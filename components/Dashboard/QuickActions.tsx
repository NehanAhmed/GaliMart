
// components/dashboard/QuickActions.tsx
import React from 'react';
import {
  IconPackage,
  IconShoppingBag,
  IconChartLine,
  IconSettings
} from '@tabler/icons-react';
import Link from 'next/link';

export default function QuickActions() {
  const actions = [
    { label: 'Add Product', icon: IconPackage, href: '/seller/products/add', primary: true },
    { label: 'View Orders', icon: IconShoppingBag, href: '/seller/orders', primary: false },
    { label: 'Analytics', icon: IconChartLine, href: '/seller/analytics', primary: false },
    { label: 'Settings', icon: IconSettings, href: '/seller/settings', primary: false }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            href={action.href}
            className={`p-4 rounded-lg transition-all hover:scale-105 ${
              action.primary
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-card border border-border text-foreground hover:shadow-lg'
            }`}
          >
            <Icon className="h-6 w-6 mb-2" stroke={2} />
            <p className="text-sm font-medium">{action.label}</p>
          </Link>
        );
      })}
    </div>
  );
}