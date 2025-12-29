
// components/dashboard/TrendingProducts.tsx
import React from 'react';
import { IconStar, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  sold: number;
  revenue: string;
  rating: number;
  image: string;
}

export default function TrendingProducts({ products }: { products: Product[] }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Trending Products</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Best performing items
          </p>
        </div>
        <Link
          href="/seller/products"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          View All
          <IconArrowRight className="h-4 w-4" stroke={2} />
        </Link>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-2xl">
              {product.image}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {product.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <IconStar className="h-3 w-3 fill-primary text-primary" stroke={2} />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">• {product.sold} sold</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{product.revenue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
