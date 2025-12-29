'use client'
import React, { useState } from 'react';
import {
    IconHome,
    IconShoppingCart,
    IconCategory,
    IconBuildingStore,
    IconFlame,
    IconPackage,
    IconHeart,
    IconUser,
    IconSettings,
    IconLogout,
    IconChevronRight,
    IconChevronDown,
    IconDevices,
    IconShirt,
    IconHome2,
    IconBarbell,
    IconBook,
    IconPerfume,
    IconBabyCarriage,
    IconToolsKitchen2,
    IconMenu2,
    IconX,
    IconChartLine,
    IconWallet,
    IconList,
    IconPlus,
    IconPackages,
    IconStar,
    IconUpload
} from '@tabler/icons-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState(null);

    const mainNavigation = [
        { id: 'dashboard', label: 'Dashboard', icon: IconHome, href: '/dashboard/dashboard', badge: null },
        { id: 'orders', label: 'Orders', icon: IconPackage, href: '/dashboard/orders', badge: null },
        { id: 'Inventory', label: 'Inventory', icon: IconShoppingCart, href: '/dashboard/inventory', badge: null, hasSubmenu: true },
        { id: 'customers', label: 'Customers', icon: IconUser, href: '/dashboard/customers', badge: null },
        { id: 'analytics', label: 'Analytics', icon: IconChartLine, href: '/dashboard/analytics', badge: null },
        { id: 'wallet', label: 'Wallet', icon: IconWallet, href: '/dashboard/wallet', badge: null }
    ];

    const categories = [
        { id: 'all-products', label: 'All Products', icon: IconList, href: '/dashboard/products', count: '45' },
        { id: 'add-product', label: 'Add Product', icon: IconPlus, href: '/dashboard/products/add', count: null },
        { id: 'inventory', label: 'Inventory', icon: IconPackages, href: '/dashboard/inventory', count: '45' },
        { id: 'categories', label: 'Categories', icon: IconCategory, href: '/dashboard/categories', count: '12' },
        { id: 'reviews', label: 'Reviews', icon: IconStar, href: '/dashboard/reviews', count: '89' },
        { id: 'bulk-upload', label: 'Bulk Upload', icon: IconUpload, href: '/dashboard/products/bulk', count: null }
    ];

    const userMenu = [
        { id: 'shop-settings', label: 'Shop Settings', icon: IconBuildingStore, href: '/dashboard/shop', badge: null },
        { id: 'profile', label: 'My Profile', icon: IconUser, href: '/dashboard/profile', badge: null },
        { id: 'settings', label: 'Settings', icon: IconSettings, href: '/dashboard/settings', badge: null }
    ];

    const toggleMenu = (menuId) => {
        setExpandedMenu(expandedMenu === menuId ? null : menuId);
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                        <IconShoppingCart className="h-5 w-5" stroke={2} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-foreground">Gali Mart</h1>
                        <p className="text-xs text-muted-foreground">Shopping Hub</p>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
                <div className="space-y-1">
                    {mainNavigation.map((item) => {
                        const Icon = item.icon;
                        const isExpanded = expandedMenu === item.id;
                        const hasSubmenu = item.hasSubmenu && item.id === 'categories';

                        return (
                            <div key={item.id}>
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        if (hasSubmenu) {
                                            e.preventDefault();
                                            toggleMenu(item.id);
                                        }
                                    }}
                                    className="group flex items-center justify-between px-3 py-2.5 rounded-lg text-foreground hover:bg-muted transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" stroke={2} />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                    {item.badge && (
                                        <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
                                            {item.badge}
                                        </span>
                                    )}
                                    {hasSubmenu && (
                                        <IconChevronDown
                                            className={`h-4 w-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''
                                                }`}
                                            stroke={2}
                                        />
                                    )}
                                </a>

                                {/* Submenu for Categories */}
                                {hasSubmenu && isExpanded && (
                                    <div className="mt-1 ml-4 pl-4 border-l border-border space-y-1">
                                        {categories.map((category) => {
                                            const CategoryIcon = category.icon;
                                            return (
                                                <a
                                                    key={category.id}
                                                    href={category.href}
                                                    className="group flex items-center justify-between px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <CategoryIcon className="h-4 w-4" stroke={2} />
                                                        <span className="text-sm">{category.label}</span>
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">
                                                        {category.count}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* User Menu Section */}
                <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Account
                    </h3>
                    <div className="space-y-1">
                        {userMenu.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="group flex items-center justify-between px-3 py-2.5 rounded-lg text-foreground hover:bg-muted transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" stroke={2} />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                    {item.badge && (
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded">
                                            {item.badge}
                                        </span>
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Become a Seller CTA */}
                <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                    <div className="mb-3">
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                            Become a Seller
                        </h4>
                        <p className="text-xs text-muted-foreground">
                            Start selling your products today
                        </p>
                    </div>
                    <a
                        href="/sell"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                        Get Started
                        <IconChevronRight className="h-4 w-4" stroke={2} />
                    </a>
                </div>
            </nav>

            {/* Logout */}
            <div className='p-4 border-t border-border'>
                <div className="flex items-center gap-3">
                    
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg"
            >
                {isOpen ? (
                    <IconX className="h-6 w-6 text-foreground" stroke={2} />
                ) : (
                    <IconMenu2 className="h-6 w-6 text-foreground" stroke={2} />
                )}
            </button>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-40 h-full w-72 bg-card border-r border-border
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <SidebarContent />
            </aside>

            {/* Spacer for Desktop */}
            <div className="hidden lg:block w-72 flex-shrink-0" />
        </>
    );
};

export default Sidebar;