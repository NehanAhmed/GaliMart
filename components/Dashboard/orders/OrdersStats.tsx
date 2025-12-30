
    // components/orders/OrdersStats.tsx
    import React from 'react';
    import {
      IconShoppingCart,
      IconCheck,
      IconClock,
      IconAlertCircle,
      IconX
    } from '@tabler/icons-react';
    
    interface StatsProps {
      stats: {
        total: number;
        completed: number;
        processing: number;
        pending: number;
        cancelled: number;
      };
    }
    
    export default function OrdersStats({ stats }: StatsProps) {
      const statsCards = [
        { label: 'Total Orders', value: stats.total, icon: IconShoppingCart, color: 'text-foreground' },
        { label: 'Completed', value: stats.completed, icon: IconCheck, color: 'text-primary' },
        { label: 'Processing', value: stats.processing, icon: IconClock, color: 'text-foreground' },
        { label: 'Pending', value: stats.pending, icon: IconAlertCircle, color: 'text-muted-foreground' },
        { label: 'Cancelled', value: stats.cancelled, icon: IconX, color: 'text-destructive' }
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
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      );
    }