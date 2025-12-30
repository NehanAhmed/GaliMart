
    // components/inventory/InventoryStats.tsx
    import React from 'react';
    import {
      IconPackage,
      IconCheck,
      IconAlertTriangle,
      IconX,
      IconCurrencyDollar
    } from '@tabler/icons-react';
    
    interface StatsProps {
      stats: {
        totalProducts: number;
        inStock: number;
        lowStock: number;
        outOfStock: number;
        totalValue: string;
      };
    }
    
    export default function InventoryStats({ stats }: StatsProps) {
      const statsCards = [
        { label: 'Total Products', value: stats.totalProducts, icon: IconPackage, color: 'text-foreground' },
        { label: 'In Stock', value: stats.inStock, icon: IconCheck, color: 'text-primary' },
        { label: 'Low Stock', value: stats.lowStock, icon: IconAlertTriangle, color: 'text-muted-foreground' },
        { label: 'Out of Stock', value: stats.outOfStock, icon: IconX, color: 'text-destructive' },
        { label: 'Total Value', value: stats.totalValue, icon: IconCurrencyDollar, color: 'text-foreground' }
      ];
    
      return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${stat.color}`} stroke={2} />
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {typeof stat.value === 'string' ? stat.value : stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      );
    }
    