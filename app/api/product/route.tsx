import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { and, desc, eq, ilike } from "drizzle-orm";

import { db } from "@/lib/db"; // your drizzle db instance
import { products } from "@/lib/db/schema";
import { auth } from "@/auth";
import { headers } from "next/headers";

/* ------------------------------------------------------------------ */
/* Validation Schemas */
/* ------------------------------------------------------------------ */

const createProductSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string().optional(),
  shortDescription: z.string().max(500).optional(),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/),
  compareAtPrice: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/)
    .optional(),
  currency: z.string().length(3).optional(),
  stockQuantity: z.number().int().min(0).optional(),
  sku: z.string().max(100).optional(),
});

const getProductsQuerySchema = z.object({
    q: z.string().optional(), // search
    limit: z.coerce.number().int().min(1).max(100).default(20),
    offset: z.coerce.number().int().min(0).default(0),
    active: z.coerce.boolean().optional(),
    approved: z.coerce.boolean().optional(),
    featured: z.coerce.boolean().optional(),
});

/* ------------------------------------------------------------------ */
/* Helpers */
/* ------------------------------------------------------------------ */


function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function generateUniqueSlug(
  name: string,
  userId: string
): Promise<string> {
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existing = await db
      .select({ id: products.id })
      .from(products)
      .where(and(eq(products.slug, slug), eq(products.userId, userId)))
      .limit(1);

    if (existing.length === 0) break;
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
}

async function getUserId(req: NextRequest): Promise<string> {
    const sessionData = auth.api.getSession({
        headers: await headers()
    })
    return sessionData?.userId as string;
}

/* ------------------------------------------------------------------ */
/* POST — Create Product */
/* ------------------------------------------------------------------ */

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserId(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data = createProductSchema.parse(body);

    const slug = await generateUniqueSlug(data.name, userId);

    const [product] = await db
      .insert(products)
      .values({
        userId,
        name: data.name,
        slug, // ✅ generated
        description: data.description,
        shortDescription: data.shortDescription,
        price: data.price,
        compareAtPrice: data.compareAtPrice,
        currency: data.currency ?? "PKR",
        stockQuantity: data.stockQuantity ?? 0,
        sku: data.sku,
      })
      .returning();

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "VALIDATION_ERROR", details: error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "INTERNAL_SERVER_ERROR" },
      { status: 500 }
    );
  }
}


/* ------------------------------------------------------------------ */
/* GET — List Products (Search, Filters, Pagination) */
/* ------------------------------------------------------------------ */

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const query = getProductsQuerySchema.parse(
            Object.fromEntries(searchParams)
        );

        const conditions = [];

        if (query.q) {
            conditions.push(ilike(products.name, `%${query.q}%`));
        }
        if (query.active !== undefined) {
            conditions.push(eq(products.isActive, query.active));
        }
        if (query.approved !== undefined) {
            conditions.push(eq(products.isApproved, query.approved));
        }
        if (query.featured !== undefined) {
            conditions.push(eq(products.isFeatured, query.featured));
        }

        const result = await db
            .select()
            .from(products)
            .where(conditions.length ? and(...conditions) : undefined)
            .orderBy(desc(products.createdAt))
            .limit(query.limit)
            .offset(query.offset);

        return NextResponse.json({
            data: result,
            limit: query.limit,
            offset: query.offset,
            count: result.length,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "INVALID_QUERY", details: error.flatten() },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "INTERNAL_SERVER_ERROR" },
            { status: 500 }
        );
    }
}
