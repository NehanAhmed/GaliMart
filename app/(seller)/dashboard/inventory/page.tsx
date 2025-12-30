import InventoryFilters from "@/components/Dashboard/inventory/inventory-filter";
import InventoryHeader from "@/components/Dashboard/inventory/inventory-header";
import InventoryStats from "@/components/Dashboard/inventory/inventory-stats";
import InventoryTable from "@/components/Dashboard/inventory/inventory-table";

export default function Page() {
  // In real app, fetch this data from your API
  const products = [
    { id: 'PRD001', name: 'Wireless Earbuds Pro', sku: 'WEP-001', category: 'Electronics', stock: 45, lowStock: 10, price: '$49.99', status: 'in-stock' as const },
    { id: 'PRD002', name: 'Smart Watch Series 5', sku: 'SWS-005', category: 'Wearables', stock: 8, lowStock: 10, price: '$159.99', status: 'low-stock' as const },
    { id: 'PRD003', name: 'Bluetooth Speaker', sku: 'BTS-003', category: 'Audio', stock: 0, lowStock: 5, price: '$39.99', status: 'out-of-stock' as const },
    { id: 'PRD004', name: 'USB-C Cable', sku: 'USC-004', category: 'Accessories', stock: 120, lowStock: 20, price: '$9.99', status: 'in-stock' as const },
    { id: 'PRD005', name: 'Phone Case Premium', sku: 'PCP-005', category: 'Accessories', stock: 67, lowStock: 15, price: '$24.99', status: 'in-stock' as const },
    { id: 'PRD006', name: 'Wireless Mouse Pro', sku: 'WMP-006', category: 'Accessories', stock: 5, lowStock: 10, price: '$49.99', status: 'low-stock' as const },
    { id: 'PRD007', name: 'Laptop Stand', sku: 'LPS-007', category: 'Office', stock: 32, lowStock: 10, price: '$89.99', status: 'in-stock' as const },
    { id: 'PRD008', name: 'Webcam HD 1080p', sku: 'WHD-008', category: 'Tech', stock: 0, lowStock: 5, price: '$69.99', status: 'out-of-stock' as const },
    { id: 'PRD009', name: 'Keyboard Mechanical', sku: 'KBM-009', category: 'Accessories', stock: 23, lowStock: 10, price: '$129.99', status: 'in-stock' as const },
    { id: 'PRD010', name: 'Desk Lamp LED', sku: 'DLL-010', category: 'Office', stock: 7, lowStock: 10, price: '$34.99', status: 'low-stock' as const }
  ];

  const statsData = {
    totalProducts: products.length,
    inStock: products.filter(p => p.status === 'in-stock').length,
    lowStock: products.filter(p => p.status === 'low-stock').length,
    outOfStock: products.filter(p => p.status === 'out-of-stock').length,
    totalValue: '$12,450'
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <InventoryHeader />
        <InventoryStats stats={statsData} />
        <InventoryFilters />
        <InventoryTable products={products} />
      </div>
    </div>
  );
}
