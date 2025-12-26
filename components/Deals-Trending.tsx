'use client'
import React, { useState, useEffect } from 'react';
import {
  IconFlame,
  IconTrendingUp,
  IconClock,
  IconShoppingCart,
  IconHeart,
  IconEye,
  IconStar,
  IconArrowRight,
  IconBolt,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-react';

const DealsAndTrending = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      category: 'Electronics',
      price: 49.99,
      originalPrice: 99.99,
      discount: 50,
      rating: 4.8,
      reviews: 234,
      image: '🎧',
      stock: 12,
      sold: 88
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      category: 'Wearables',
      price: 159.99,
      originalPrice: 299.99,
      discount: 47,
      rating: 4.9,
      reviews: 456,
      image: '⌚',
      stock: 8,
      sold: 142
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      category: 'Audio',
      price: 39.99,
      originalPrice: 79.99,
      discount: 50,
      rating: 4.7,
      reviews: 189,
      image: '🔊',
      stock: 15,
      sold: 95
    },
    {
      id: 4,
      name: 'Fitness Tracker Band',
      category: 'Fitness',
      price: 29.99,
      originalPrice: 69.99,
      discount: 57,
      rating: 4.6,
      reviews: 312,
      image: '⌚',
      stock: 20,
      sold: 180
    }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: 'Premium Laptop Backpack',
      category: 'Accessories',
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 567,
      image: '🎒',
      trending: 'up'
    },
    {
      id: 2,
      name: 'Mechanical Keyboard RGB',
      category: 'Gaming',
      price: 129.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 423,
      image: '⌨️',
      trending: 'hot'
    },
    {
      id: 3,
      name: 'Wireless Mouse Pro',
      category: 'Accessories',
      price: 49.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 289,
      image: '🖱️',
      trending: 'up'
    },
    {
      id: 4,
      name: 'USB-C Hub Adapter',
      category: 'Tech',
      price: 34.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 198,
      image: '🔌',
      trending: 'up'
    },
    {
      id: 5,
      name: 'Portable SSD 1TB',
      category: 'Storage',
      price: 89.99,
      originalPrice: 149.99,
      rating: 4.9,
      reviews: 345,
      image: '💾',
      trending: 'hot'
    },
    {
      id: 6,
      name: 'Webcam HD 1080p',
      category: 'Tech',
      price: 59.99,
      originalPrice: 99.99,
      rating: 4.6,
      reviews: 234,
      image: '📹',
      trending: 'up'
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flashDeals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flashDeals.length) % flashDeals.length);
  };

  return (
    <div className="bg-background">
      {/* Flash Deals Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/10 border border-destructive/20 rounded-md mb-3">
                <IconFlame className="h-4 w-4 text-destructive" stroke={2} />
                <span className="text-sm font-medium text-destructive">Limited Time</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Flash Deals
              </h2>
              <p className="text-muted-foreground">
                Hurry! These deals won't last long
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-2">
              <IconClock className="h-5 w-5 text-muted-foreground" stroke={2} />
              <div className="flex gap-2">
                <div className="flex flex-col items-center px-3 py-2 bg-muted border border-border rounded-lg">
                  <span className="text-xl font-bold text-foreground">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-muted-foreground">Hours</span>
                </div>
                <div className="flex flex-col items-center px-3 py-2 bg-muted border border-border rounded-lg">
                  <span className="text-xl font-bold text-foreground">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-muted-foreground">Mins</span>
                </div>
                <div className="flex flex-col items-center px-3 py-2 bg-muted border border-border rounded-lg">
                  <span className="text-xl font-bold text-foreground">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-muted-foreground">Secs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flash Deals Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashDeals.map((product) => {
                const progressPercentage = (product.sold / (product.sold + product.stock)) * 100;
                
                return (
                  <div
                    key={product.id}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    {/* Product Image */}
                    <div className="relative bg-muted aspect-square flex items-center justify-center">
                      <div className="text-7xl">{product.image}</div>
                      
                      {/* Discount Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded">
                        -{product.discount}%
                      </div>

                      {/* Stock Badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-background border border-border text-xs font-medium rounded">
                        Only {product.stock} left
                      </div>

                      {/* Action Buttons */}
                      <div className={`absolute bottom-3 right-3 flex gap-2 transition-opacity ${
                        hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="p-2 bg-background border border-border rounded-md hover:border-primary transition-colors"
                        >
                          <IconHeart
                            className={`h-4 w-4 ${
                              favorites.has(product.id) ? 'fill-primary text-primary' : 'text-foreground'
                            }`}
                            stroke={2}
                          />
                        </button>
                        <button className="p-2 bg-background border border-border rounded-md hover:border-primary transition-colors">
                          <IconEye className="h-4 w-4 text-foreground" stroke={2} />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                      
                      <h3 className="font-medium text-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <IconStar className="h-4 w-4 fill-primary text-primary" stroke={2} />
                        <span className="text-sm font-medium text-foreground">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-foreground">${product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Sold: {product.sold}</span>
                          <span>Available: {product.stock}</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                        <IconShoppingCart className="h-4 w-4" stroke={2} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors">
              View All Flash Deals
              <IconArrowRight className="h-5 w-5" stroke={2} />
            </button>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-md mb-3">
                <IconTrendingUp className="h-4 w-4 text-primary" stroke={2} />
                <span className="text-sm font-medium text-primary">Popular Now</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Trending Products
              </h2>
              <p className="text-muted-foreground">
                Most popular items this week
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              View All
              <IconArrowRight className="h-4 w-4" stroke={2} />
            </button>
          </div>

          {/* Trending Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHoveredProduct(`trending-${product.id}`)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="flex gap-4 p-4">
                  {/* Product Image */}
                  <div className="relative bg-muted w-24 h-24 flex-shrink-0 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">{product.image}</div>
                    
                    {/* Trending Badge */}
                    {product.trending === 'hot' && (
                      <div className="absolute -top-2 -right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full">
                        <IconFlame className="h-3 w-3" stroke={2} />
                      </div>
                    )}
                    {product.trending === 'up' && (
                      <div className="absolute -top-2 -right-2 p-1.5 bg-primary text-primary-foreground rounded-full">
                        <IconTrendingUp className="h-3 w-3" stroke={2} />
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-medium text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      <IconStar className="h-3.5 w-3.5 fill-primary text-primary" stroke={2} />
                      <span className="text-sm font-medium text-foreground">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">${product.price}</span>
                      <span className="text-xs text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className={`flex flex-col gap-2 transition-opacity ${
                    hoveredProduct === `trending-${product.id}` ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button
                      onClick={() => toggleFavorite(`trending-${product.id}`)}
                      className="p-2 bg-muted border border-border rounded-md hover:border-primary transition-colors"
                    >
                      <IconHeart
                        className={`h-4 w-4 ${
                          favorites.has(`trending-${product.id}`) ? 'fill-primary text-primary' : 'text-foreground'
                        }`}
                        stroke={2}
                      />
                    </button>
                    <button className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      <IconShoppingCart className="h-4 w-4" stroke={2} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button Mobile */}
          <div className="text-center mt-8 md:hidden">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium hover:bg-foreground/90 transition-colors">
              View All Trending
              <IconArrowRight className="h-5 w-5" stroke={2} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealsAndTrending;