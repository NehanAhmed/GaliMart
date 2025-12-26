'use client'
import React, { useState } from 'react';
import {
    IconShoppingCart,
    IconHeart,
    IconEye,
    IconStar,
    IconArrowRight,
    IconTrendingUp,
    IconFlame,
    IconSparkles,
    IconDevices,
    IconShirt,
    IconHome,
    IconBarbell,
    IconBook,
    IconPerfume,
    IconBabyCarriage,
    IconToolsKitchen2
} from '@tabler/icons-react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import Link from 'next/link';

const FeaturedSection = () => {
    const [activeTab, setActiveTab] = useState('all');

    const [hoveredCategory, setHoveredCategory] = useState(null);

    const categories = [
        { id: 1, name: 'Electronics', icon: IconDevices, count: '2.5K', href: '/products?category=electronics' },
        { id: 2, name: 'Fashion', icon: IconShirt, count: '5.2K', href: '/products?category=fashion' },
        { id: 3, name: 'Home & Living', icon: IconHome, count: '1.8K', href: '/products?category=home&living' },
        { id: 4, name: 'Sports', icon: IconBarbell, count: '987', href: '/products?category=sports' },
        { id: 5, name: 'Books', icon: IconBook, count: '3.4K', href: '/products?category=books' },
        { id: 6, name: 'Beauty', icon: IconPerfume, count: '2.1K', href: '/products?category=beauty' },
        { id: 7, name: 'Baby & Kids', icon: IconBabyCarriage, count: '1.5K', href: '/products?category=baby' },
        { id: 8, name: 'Kitchen', icon: IconToolsKitchen2, count: '890', href: '/products?category=kitchen' }
    ];

    const tabs = [
        { id: 'all', label: 'All Products' },
        { id: 'trending', label: 'Trending', icon: IconTrendingUp },
        { id: 'hot', label: 'Hot Deals', icon: IconFlame }
    ];

    const products = [
        {
            id: 1,
            name: 'Premium Wireless Headphones',
            category: 'Electronics',
            price: 129.99,
            originalPrice: 199.99,
            rating: 4.8,
            reviews: 234,
            image: '🎧',
            discount: 35,
            tab: 'all'
        },
        {
            id: 2,
            name: 'Smart Fitness Watch',
            category: 'Wearables',
            price: 89.99,
            originalPrice: 149.99,
            rating: 4.9,
            reviews: 456,
            image: '⌚',
            discount: 40,
            tab: 'trending'
        },
        {
            id: 3,
            name: 'Organic Cotton T-Shirt',
            category: 'Fashion',
            price: 24.99,
            originalPrice: 39.99,
            rating: 4.7,
            reviews: 189,
            image: '👕',
            discount: 38,
            tab: 'all'
        },
        {
            id: 4,
            name: 'Professional Camera Lens',
            category: 'Photography',
            price: 299.99,
            originalPrice: 449.99,
            rating: 4.9,
            reviews: 123,
            image: '📷',
            discount: 33,
            tab: 'hot'
        },
        {
            id: 5,
            name: 'Ergonomic Office Chair',
            category: 'Furniture',
            price: 199.99,
            originalPrice: 299.99,
            rating: 4.6,
            reviews: 567,
            image: '🪑',
            discount: 33,
            tab: 'trending'
        },
        {
            id: 6,
            name: 'Gourmet Coffee Maker',
            category: 'Kitchen',
            price: 79.99,
            originalPrice: 119.99,
            rating: 4.8,
            reviews: 345,
            image: '☕',
            discount: 33,
            tab: 'all'
        },
        {
            id: 7,
            name: 'Wireless Gaming Mouse',
            category: 'Gaming',
            price: 49.99,
            originalPrice: 79.99,
            rating: 4.7,
            reviews: 289,
            image: '🖱️',
            discount: 38,
            tab: 'hot'
        },
        {
            id: 8,
            name: 'Premium Yoga Mat',
            category: 'Sports',
            price: 34.99,
            originalPrice: 54.99,
            rating: 4.9,
            reviews: 412,
            image: '🧘',
            discount: 36,
            tab: 'trending'
        }
    ];

    const filteredProducts = activeTab === 'all'
        ? products
        : products.filter(p => p.tab === activeTab);



    return (
        <div className="bg-background">
            {/* Categories Section */}
            <section className="py-16 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">
                                Shop by Category
                            </h2>
                            <p className="text-muted-foreground">
                                Browse our popular categories
                            </p>
                        </div>
                        <Button variant={'link'} >
                            View All
                            <IconArrowRight className="h-4 w-4" stroke={2} />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <a
                                    key={category.id}
                                    href={category.href}
                                    className="group flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-all"
                                    onMouseEnter={() => setHoveredCategory(category.id)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    <div className="mb-4 p-4 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                        <Icon
                                            className={`h-8 w-8 transition-colors ${hoveredCategory === category.id ? 'text-primary' : 'text-foreground'
                                                }`}
                                            stroke={1.5}
                                        />
                                    </div>
                                    <h3 className="text-sm font-medium text-center text-foreground mb-1">
                                        {category.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {category.count} items
                                    </p>
                                </a>
                            );
                        })}
                    </div>

                    <button className="md:hidden w-full mt-6 flex items-center justify-center gap-2 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        View All Categories
                        <IconArrowRight className="h-4 w-4" stroke={2} />
                    </button>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">
                                Featured Products
                            </h2>
                            <p className="text-muted-foreground">
                                Discover our handpicked selection
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 p-1 bg-muted rounded-lg border border-border w-full md:w-auto">
                            {tabs.map((tab) => {
                                const TabIcon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                                            ? 'bg-background text-foreground shadow-sm'
                                            : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        {TabIcon && <TabIcon className="h-4 w-4" stroke={2} />}
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href={'/products'}>
                            <Button className="inline-flex items-center gap-2  bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors">
                                View All Products
                                <IconArrowRight className="h-5 w-5" stroke={2} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedSection;