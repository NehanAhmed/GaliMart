import OrdersFilters from "@/components/Dashboard/orders/OrdersFilter";
import OrdersHeader from "@/components/Dashboard/orders/OrdersHeader";
import OrdersStats from "@/components/Dashboard/orders/OrdersStats";
import RecentOrders from "@/components/Dashboard/RecentOrders";


export default function Page() {
  // In real app, fetch this data from your API
  const orders = [
    { id: '#12345', customer: 'John Smith', product: 'Wireless Headphones Pro', amount: '$129.99', status: 'completed' as const, date: '2 hours ago', items: 1 },
    { id: '#12344', customer: 'Sarah Johnson', product: 'Smart Watch Series 5', amount: '$299.99', status: 'processing' as const, date: '5 hours ago', items: 1 },
    { id: '#12343', customer: 'Mike Wilson', product: 'Bluetooth Speaker', amount: '$79.99', status: 'pending' as const, date: '1 day ago', items: 2 },
    { id: '#12342', customer: 'Emily Davis', product: 'USB-C Cable (Pack of 3)', amount: '$19.99', status: 'completed' as const, date: '1 day ago', items: 1 },
    { id: '#12341', customer: 'David Brown', product: 'Phone Case Premium', amount: '$24.99', status: 'cancelled' as const, date: '2 days ago', items: 1 },
    { id: '#12340', customer: 'Lisa Anderson', product: 'Wireless Mouse Pro', amount: '$49.99', status: 'completed' as const, date: '2 days ago', items: 1 },
    { id: '#12339', customer: 'James Taylor', product: 'Laptop Stand Adjustable', amount: '$89.99', status: 'processing' as const, date: '3 days ago', items: 1 },
    { id: '#12338', customer: 'Maria Garcia', product: 'Webcam HD 1080p', amount: '$69.99', status: 'completed' as const, date: '3 days ago', items: 1 },
    { id: '#12337', customer: 'Robert Martinez', product: 'Keyboard Mechanical RGB', amount: '$129.99', status: 'pending' as const, date: '4 days ago', items: 1 },
    { id: '#12336', customer: 'Jennifer Lee', product: 'Desk Lamp LED', amount: '$34.99', status: 'completed' as const, date: '4 days ago', items: 2 }
  ];

  const statsData = {
    total: orders.length,
    completed: orders.filter(o => o.status === 'completed').length,
    processing: orders.filter(o => o.status === 'processing').length,
    pending: orders.filter(o => o.status === 'pending').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <OrdersHeader />
        <OrdersStats stats={statsData} />
        <OrdersFilters />
        <RecentOrders orders={orders} />
      </div>
    </div>
  );
}
