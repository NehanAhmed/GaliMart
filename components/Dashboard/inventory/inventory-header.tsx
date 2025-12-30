
// components/inventory/InventoryHeader.tsx
import React from 'react';
import { IconDownload, IconPlus, IconUpload } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export default function InventoryHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Inventory</h1>
        <p className="text-muted-foreground mt-1">
          Manage your product stock and availability
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <IconUpload className="h-4 w-4" stroke={2} />
          Import
        </Button>
        <Button className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <IconDownload className="h-4 w-4" stroke={2} />
          Export
        </Button>
        <Button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          <IconPlus className="h-4 w-4" stroke={2} />
          Add Product
        </Button>
      </div>
    </div>
  );
}
