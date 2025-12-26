'use client'
import { IconEye, IconHeart, IconShoppingCart, IconStar } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { toast } from 'sonner'

interface ProductCard {
    id: number | null
    name: string
    category: string
    price: number
    originalPrice: number
    rating: number
    reviews: number
    image: string
    discount: number
    tab: string
    slug: string
}

const ProductCard = ({ product }: { product: ProductCard }) => {
    const [favorites, setFavorites] = useState(new Set());
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    return (
        <>
            <div
                key={product.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
            >
                {/* Product Image */}
                <div className="relative bg-muted aspect-square flex items-center justify-center overflow-hidden">
                    <div className="text-7xl">
                        {product.image}
                    </div>

                    {/* Discount Badge */}
                    {product.discount > 0 && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
                            -{product.discount}%
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                        }`}>
                        <Link href={`products/${product.slug}`}>
                            <Button className="p-2 bg-background border border-border rounded-md hover:border-primary transition-colors">
                                <IconEye className="h-4 w-4 text-foreground" stroke={2} />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                        {product.category}
                    </p>
                    <Link href={`products/${product.slug}`}>
                        <h3 className="hover:text-primary  font-medium text-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                            {product.name}
                        </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                        <IconStar className="h-4 w-4 fill-primary text-primary" stroke={2} />
                        <span className="text-sm font-medium text-foreground">
                            {product.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            ({product.reviews})
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-foreground">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>

                    {/* Add to Cart Button */}

                    <Button onClick={() => {
                        toast.success('Product Added to Cart Successfuly!')
                    }} className="w-full py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        <IconShoppingCart className="h-4 w-4" stroke={2} />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductCard