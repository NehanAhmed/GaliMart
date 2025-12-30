

// components/inventory/InventoryTable.tsx
import React from 'react';
import { IconCheck, IconAlertTriangle, IconX, IconEdit, IconTrash, IconDotsVertical } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  lowStock: number;
  price: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export default function InventoryTable({ products }: { products: Product[] }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'in-stock':
        return {
          icon: <IconCheck className="h-3 w-3" stroke={2} />,
          text: 'In Stock',
          className: 'bg-primary/10 text-primary border-primary/20'
        };
      case 'low-stock':
        return {
          icon: <IconAlertTriangle className="h-3 w-3" stroke={2} />,
          text: 'Low Stock',
          className: 'bg-muted text-muted-foreground border-border'
        };
      case 'out-of-stock':
        return {
          icon: <IconX className="h-3 w-3" stroke={2} />,
          text: 'Out of Stock',
          className: 'bg-destructive/10 text-destructive border-destructive/20'
        };
      default:
        return {
          icon: null,
          text: status,
          className: 'bg-muted text-foreground border-border'
        };
    }
  };

  const getStockColor = (stock: number, lowStock: number) => {
    if (stock === 0) return 'text-destructive';
    if (stock <= lowStock) return 'text-muted-foreground';
    return 'text-foreground';
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Product Inventory</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {products.length} products found
        </p>
      </div>

      {/* Table Content - Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => {
              const statusConfig = getStatusConfig(product.status);
              return (
                <tr key={product.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-mono font-medium text-foreground">
                      {product.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-foreground">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-muted-foreground font-mono">
                      {product.sku}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-foreground">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-semibold ${getStockColor(product.stock, product.lowStock)}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-foreground">
                      {product.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${statusConfig.className}`}>
                      {statusConfig.icon}
                      {statusConfig.text}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Button className="p-1.5 hover:bg-muted rounded-md transition-colors" title="Edit Product">
                        <IconEdit className="h-4 w-4 text-muted-foreground" stroke={2} />
                      </Button>
                      <Button className="p-1.5 hover:bg-muted rounded-md transition-colors" title="Delete Product">
                        <IconTrash className="h-4 w-4 text-destructive" stroke={2} />
                      </Button>
                      <Button className="p-1.5 hover:bg-muted rounded-md transition-colors" title="More Options">
                        <IconDotsVertical className="h-4 w-4 text-muted-foreground" stroke={2} />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Content - Mobile */}
      <div className="md:hidden divide-y divide-border">
        {products.map((product) => {
          const statusConfig = getStatusConfig(product.status);
          return (
            <div key={product.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-mono font-medium text-foreground">
                  {product.id}
                </span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${statusConfig.className}`}>
                  {statusConfig.icon}
                  {statusConfig.text}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Product</span>
                  <span className="text-sm font-medium text-foreground">{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">SKU</span>
                  <span className="text-sm font-mono text-foreground">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="text-sm text-foreground">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Stock</span>
                  <span className={`text-sm font-semibold ${getStockColor(product.stock, product.lowStock)}`}>
                    {product.stock}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Price</span>
                  <span className="text-sm font-semibold text-foreground">{product.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                <Button variant={'link'} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ">
                  <IconEdit className="h-4 w-4" stroke={2} />
                  Edit
                </Button>
                <Button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-background border border-border rounded-lg text-sm font-medium text-destructive hover:bg-muted transition-colors">
                  <IconTrash className="h-4 w-4" stroke={2} />
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-border flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {products.length} of {products.length} products
        </p>
        <div className="flex items-center gap-2">
          <Button className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </Button>
          <Button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            1
          </Button>
          <Button className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors">
            2
          </Button>
          <Button className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}