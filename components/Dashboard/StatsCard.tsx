// components/dashboard/StatsCards.tsx
import React from 'react';
import {
  IconCurrencyDollar,
  IconShoppingCart,
  IconPackage,
  IconUsers,
  IconTrendingUp,
  IconTrendingDown
} from '@tabler/icons-react';

interface StatsData {
  revenue: { value: string; change: string; trend: 'up' | 'down' };
  orders: { value: string; change: string; trend: 'up' | 'down' };
  products: { value: string; change: string; trend: 'up' | 'down' };
  customers: { value: string; change: string; trend: 'up' | 'down' };
}

export default function StatsCards({ data }: { data: StatsData }) {
  const stats = [
    { label: 'Total Revenue', ...data.revenue, icon: IconCurrencyDollar },
    { label: 'Total Orders', ...data.orders, icon: IconShoppingCart },
    { label: 'Products Sold', ...data.products, icon: IconPackage },
    { label: 'Total Customers', ...data.customers, icon: IconUsers }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? IconTrendingUp : IconTrendingDown;
        
        return (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-muted rounded-lg">
                <Icon className="h-6 w-6 text-foreground" stroke={2} />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
              <div className="flex items-center gap-1">
                <TrendIcon
                  className={`h-4 w-4 ${
                    stat.trend === 'up' ? 'text-primary' : 'text-destructive'
                  }`}
                  stroke={2}
                />
                <span
                  className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-primary' : 'text-destructive'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground">vs last week</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}