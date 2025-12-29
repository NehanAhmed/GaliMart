'use client'
import { IconArrowBigRight, IconBell, IconChevronRight, IconHeart, IconMapPin, IconMenu, IconSearch, IconShoppingCart, IconUser, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import CosmicThemeToggle from './ModeToggle';
import { Button } from './ui/button';
import Link from 'next/link';
import { getSession } from '@/lib/auth-server';

const Header =  ()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartCount] = useState(3);
  const [notificationCount] = useState(5);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Vendors', href: '/vendors' },
    { label: 'Deals', href: '/deals' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <IconMapPin className="h-4 w-4" />
              <span className="hidden sm:inline">Deliver to: Karachi, Pakistan</span>
              <span className="sm:hidden">Karachi, PK</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Track Order
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                Customer Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                <div className="relative bg-primary text-primary-foreground rounded-lg p-2">
                  <IconShoppingCart className="h-6 w-6" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Gali Mart
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Your Shopping Hub</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className={`relative transition-all ${isSearchFocused ? 'scale-105' : ''}`}>
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products, brands, and more..."
                className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Icon for Mobile */}
            <Button className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors">
              <IconSearch className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant={'outline'} className="hidden sm:flex p-2 hover:bg-accent/10 rounded-lg transition-colors relative group">
              <IconHeart className="h-7 w-7 group-hover:fill-primary group-hover:text-primary transition-all" />
            </Button>

            {/* Notifications */}
            <Button variant={'outline'} className="relative p-2 hover:bg-accent/10 rounded-lg transition-colors group">
              <IconBell className="h-7 w-7 group-hover:animate-pulse" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-[10px] font-medium">
                  {notificationCount}
                </span>
              )}
            </Button>

            {/* Cart */}
            <Button variant={'outline'} className="relative p-2 hover:bg-accent/10 rounded-lg transition-colors group">
              <IconShoppingCart className="h-7 w-7 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-medium">
                  {cartCount}
                </span>
              )}
            </Button>
            <CosmicThemeToggle />

            
            {/* Mobile Menu Toggle */}
            <Button
              className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background animate-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t my-2" />
              <Link href="#" className="px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-2">
                <IconUser className="h-4 w-4" />
                My Account
              </Link>
              <Link href="#" className="px-4 py-3 text-sm font-medium hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-2">
                <IconHeart className="h-4 w-4" />
                Wishlist
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;