
// components/dashboard/InventoryAlerts.tsx
import React from 'react';
import { IconAlertTriangle, IconAlertCircle } from '@tabler/icons-react';
import Link from 'next/link';

interface Alert {
  id: number;
  product: string;
  stock: number;
  status: 'low' | 'out';
}

export default function InventoryAlerts({ alerts }: { alerts: Alert[] }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground">Inventory Alerts</h2>
        <p className="text-sm text-muted-foreground mt-1">Products that need attention</p>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${
              alert.status === 'out'
                ? 'bg-destructive/10 border-destructive/20'
                : 'bg-muted border-border'
            }`}
          >
            <div className="flex items-start gap-3">
              {alert.status === 'out' ? (
                <IconAlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" stroke={2} />
              ) : (
                <IconAlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" stroke={2} />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{alert.product}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {alert.status === 'out' ? 'Out of stock' : `Only ${alert.stock} left`}
                </p>
              </div>
            </div>
          </div>
        ))}
        <Link
          href="/seller/inventory"
          className="block w-full py-2 text-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
}