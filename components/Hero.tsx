'use client'
import { IconArrowRight, IconPackage, IconShield, IconShoppingBag, IconSparkles, IconTrendingUp, IconTruck } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      badge: "New Arrivals",
      title: "Discover Amazing Deals",
      subtitle: "Up to 70% Off",
      description: "Shop the latest trends and hottest products at unbeatable prices",
      cta: "Shop Now",
      accent: "primary",
      features: ["Free Shipping", "24/7 Support", "Secure Payment"]
    },
    {
      badge: "Flash Sale",
      title: "Limited Time Offers",
      subtitle: "Today Only",
      description: "Don't miss out on exclusive deals that won't last long",
      cta: "Grab Deals",
      accent: "destructive",
      features: ["Limited Stock", "Best Prices", "Fast Delivery"]
    },
    {
      badge: "Premium Quality",
      title: "Curated Collections",
      subtitle: "Handpicked for You",
      description: "Experience premium products selected by our expert team",
      cta: "Explore Now",
      accent: "accent",
      features: ["Top Brands", "Quality Assured", "Easy Returns"]
    }
  ];

  const features = [
    { icon: IconTruck, label: "Free Delivery", desc: "On orders over $50" },
    { icon: IconShield, label: "Secure Payment", desc: "100% protected" },
    { icon: IconPackage, label: "Easy Returns", desc: "30-day guarantee" },
    { icon: IconTruck, label: "Fast Shipping", desc: "2-3 business days" }
  ];

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <IconSparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                {currentHero.badge}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {currentHero.title}
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  {currentHero.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg">
              {currentHero.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {currentHero.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm text-foreground"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                {currentHero.cta}
                <IconArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="text-black py-4 bg-background border border-border rounded-lg font-semibold hover:bg-muted/50 transition-all duration-300 flex items-center gap-2">
                <IconTrendingUp className="h-5 w-5" />
                Trending Products
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 pt-4">
              {heroSlides.map((_, idx) => (
                <Button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-primary' : 'w-1.5 bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Card */}
            <div className="relative">
              {/* Floating Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl scale-95" />
              
              {/* Main Content Card */}
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
                {/* Shopping Bag Icon with Animation */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-full">
                      <IconShoppingBag className="h-24 w-24 text-primary-foreground" />
                    </div>
                    {/* Floating Badges */}
                    <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-bounce">
                      SALE
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      NEW
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">50K+</p>
                    <p className="text-xs text-muted-foreground">Products</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">100K+</p>
                    <p className="text-xs text-muted-foreground">Customers</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <p className="text-2xl font-bold text-primary">4.9★</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 text-center">
                  <p className="text-sm font-semibold mb-1">🎉 Special Offer</p>
                  <p className="text-xs text-muted-foreground">Use code <span className="font-bold text-primary">GALI2024</span> for extra 10% off</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-float">
                💰 Best Prices
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-semibold animate-float" style={{ animationDelay: '1s' }}>
                ⚡ Fast Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Feature Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{feature.label}</p>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;