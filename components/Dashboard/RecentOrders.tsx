

// components/dashboard/RecentOrders.tsx
import React from 'react';
import { IconCheck, IconClock, IconAlertCircle, IconX, IconArrowRight } from '@tabler/icons-react';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'completed' | 'processing' | 'pending' | 'cancelled';
  date: string;
}

export default function RecentOrders({ orders }: { orders: Order[] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-primary/10 text-primary border-primary/20';
      case 'processing': return 'bg-muted text-foreground border-border';
      case 'pending': return 'bg-muted text-muted-foreground border-border';
      case 'cancelled': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-foreground border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <IconCheck className="h-3 w-3" stroke={2} />;
      case 'processing': return <IconClock className="h-3 w-3" stroke={2} />;
      case 'pending': return <IconAlertCircle className="h-3 w-3" stroke={2} />;
      case 'cancelled': return <IconX className="h-3 w-3" stroke={2} />;
      default: return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Recent Orders</h2>
          <p className="text-sm text-muted-foreground mt-1">Your latest customer orders</p>
        </div>
        <a
          href="/seller/orders"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          View All
          <IconArrowRight className="h-4 w-4" stroke={2} />
        </a>
      </div>
      <div className="divide-y divide-border">
        {orders.map((order) => (
          <div key={order.id} className="p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-medium text-foreground">{order.id}</span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status}
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground">{order.amount}</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{order.customer}</p>
                <p className="text-xs text-muted-foreground">{order.product}</p>
              </div>
              <span className="text-xs text-muted-foreground">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
