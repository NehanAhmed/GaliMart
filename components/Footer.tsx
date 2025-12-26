'use client'
import React, { useState } from 'react';
import {
  IconShoppingCart,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconSend,
  IconChevronRight,
  IconBuilding,
  IconPackage,
  IconTruck,
  IconShield,
  IconHeadphones,
  IconClock,
  IconAward,
  IconSparkles,
  IconWorld,
  IconBrandApple,
  IconBrandAndroid,
  IconArrowUp,
  IconCreditCard,
  IconBrandPaypal,
  IconCurrencyDollar,
  IconDeviceMobile,
  IconGift,
  IconStar,
  IconUsers,
  IconCategory,
  IconHelp,
  IconSettings,
  IconBuildingStore,
  IconChartLine
} from '@tabler/icons-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#', icon: IconBuilding },
      { label: 'Careers', href: '#', badge: 'Hiring', icon: IconUsers },
      { label: 'Press & Media', href: '#', icon: IconBuildingStore },
      { label: 'Our Blog', href: '#', icon: IconChartLine },
      { label: 'Sustainability', href: '#', icon: IconWorld },
      { label: 'Investor Relations', href: '#', icon: IconCurrencyDollar },
      { label: 'Gift Cards', href: '#', icon: IconGift }
    ],
    customer: [
      { label: 'Help Center', href: '#', icon: IconHelp },
      { label: 'Track Order', href: '#', icon: IconPackage },
      { label: 'Shipping Info', href: '#', icon: IconTruck },
      { label: 'Returns & Refunds', href: '#', icon: IconSettings },
      { label: 'Size Guide', href: '#', icon: IconCategory },
      { label: 'Payment Options', href: '#', icon: IconCreditCard },
      { label: 'Product Recalls', href: '#', icon: IconShield }
    ],
    vendors: [
      { label: 'Become a Seller', href: '#', badge: 'New', icon: IconBuildingStore },
      { label: 'Vendor Dashboard', href: '#', icon: IconChartLine },
      { label: 'Seller Guidelines', href: '#', icon: IconHelp },
      { label: 'Fulfillment Services', href: '#', icon: IconPackage },
      { label: 'Advertising', href: '#', icon: IconSparkles },
      { label: 'Seller Support', href: '#', icon: IconHeadphones },
      { label: 'Success Stories', href: '#', icon: IconAward }
    ],
    policies: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Intellectual Property', href: '#' },
      { label: 'Community Guidelines', href: '#' }
    ],
    categories: [
      { label: 'Electronics', href: '#' },
      { label: 'Fashion & Apparel', href: '#' },
      { label: 'Home & Living', href: '#' },
      { label: 'Sports & Fitness', href: '#' },
      { label: 'Beauty & Personal Care', href: '#' },
      { label: 'Books & Media', href: '#' },
      { label: 'Toys & Games', href: '#' },
      { label: 'Automotive', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: IconBrandFacebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
    { icon: IconBrandTwitter, label: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
    { icon: IconBrandInstagram, label: 'Instagram', href: '#', color: 'hover:bg-pink-600' },
    { icon: IconBrandLinkedin, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' },
    { icon: IconBrandYoutube, label: 'YouTube', href: '#', color: 'hover:bg-red-600' }
  ];

  const trustBadges = [
    { icon: IconShield, label: 'Secure Payment', desc: '100% Protected' },
    { icon: IconTruck, label: 'Fast Delivery', desc: '2-3 Business Days' },
    { icon: IconAward, label: 'Top Quality', desc: 'Verified Products' },
    { icon: IconHeadphones, label: '24/7 Support', desc: 'Always Available' }
  ];

  const paymentMethods = [
    { icon: IconCreditCard, label: 'Credit Card' },
    { icon: IconBrandPaypal, label: 'PayPal' },
    { icon: IconCurrencyDollar, label: 'Cash' },
    { icon: IconDeviceMobile, label: 'Mobile Pay' }
  ];

  const stats = [
    { icon: IconUsers, value: '100K+', label: 'Happy Customers' },
    { icon: IconPackage, value: '50K+', label: 'Products' },
    { icon: IconBuildingStore, value: '500+', label: 'Verified Sellers' },
    { icon: IconStar, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full mb-4">
                <IconSparkles className="h-4 w-4 text-primary" stroke={2} />
                <span className="text-sm font-medium text-primary">Exclusive Offers</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground">
                Get the latest deals, new arrivals, and exclusive offers delivered to your inbox
              </p>
            </div>
            <div className="flex-1 max-w-md w-full">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" stroke={2} />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 pl-10 pr-4 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
                >
                  <IconSend className="h-5 w-5" stroke={2} />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <StatIcon className="h-6 w-6 text-primary" stroke={2} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative bg-primary text-primary-foreground rounded-lg p-2">
                  <IconShoppingCart className="h-6 w-6" stroke={2} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Gali Mart
                </h2>
                <p className="text-xs text-muted-foreground">Your Shopping Hub</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted multi-vendor marketplace bringing you quality products from verified sellers worldwide. Shop smart, shop with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <IconMapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" stroke={2} />
                <span className="text-sm text-muted-foreground">
                  123 Commerce Street, Karachi, Sindh, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <IconPhone className="h-5 w-5 text-primary flex-shrink-0" stroke={2} />
                <span className="text-sm text-muted-foreground">+92 (300) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <IconMail className="h-5 w-5 text-primary flex-shrink-0" stroke={2} />
                <span className="text-sm text-muted-foreground">support@galimart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <IconClock className="h-5 w-5 text-primary flex-shrink-0" stroke={2} />
                <span className="text-sm text-muted-foreground">24/7 Customer Support</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <IconUsers className="h-5 w-5 text-primary" stroke={2} />
                Follow Us
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-2.5 bg-muted border border-border rounded-lg ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" stroke={2} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <IconBuilding className="h-5 w-5 text-primary" stroke={2} />
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" stroke={2} />
                        {link.label}
                      </span>
                      {link.badge && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <IconHeadphones className="h-5 w-5 text-primary" stroke={2} />
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.customer.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" stroke={2} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Vendor Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <IconBuildingStore className="h-5 w-5 text-primary" stroke={2} />
              For Vendors
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.vendors.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" stroke={2} />
                        {link.label}
                      </span>
                      {link.badge && (
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <IconCategory className="h-5 w-5 text-primary" stroke={2} />
              Categories
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <IconChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" stroke={2} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-y border-border mb-8">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" stroke={2} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{badge.label}</p>
                  <p className="text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* App Download Section */}
        <div className="py-8 border-b border-border mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-xl mb-2 flex items-center justify-center md:justify-start gap-2">
                <IconDeviceMobile className="h-6 w-6 text-primary" stroke={2} />
                Download Our Mobile App
              </h3>
              <p className="text-muted-foreground">Shop on the go with exclusive app-only deals</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-xl hover:scale-105 transition-all duration-300">
                <IconBrandApple className="h-6 w-6" stroke={2} />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-xl hover:scale-105 transition-all duration-300">
                <IconBrandAndroid className="h-6 w-6" stroke={2} />
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Gali Mart. All rights reserved. Made with ❤️ in Pakistan
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">We Accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method) => {
                  const PayIcon = method.icon;
                  return (
                    <div
                      key={method.label}
                      className="w-12 h-10 flex items-center justify-center bg-muted border border-border rounded hover:scale-110 hover:border-primary transition-all group"
                      title={method.label}
                    >
                      <PayIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" stroke={2} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-6 border-t border-border">
            {footerLinks.policies.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
                {idx < footerLinks.policies.length - 1 && (
                  <span className="text-border">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <IconArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" stroke={2.5} />
        </button>
      )}
    </footer>
  );
};

export default Footer;