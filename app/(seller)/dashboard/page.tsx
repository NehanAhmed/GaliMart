import InventoryAlerts from "@/components/Dashboard/InventoryAlert";
import QuickActions from "@/components/Dashboard/QuickActions";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import RevenueChart from "@/components/Dashboard/RevenueChart";
import StatsCards from "@/components/Dashboard/StatsCard";
import TrendingProducts from "@/components/Dashboard/TrendingProduct";

export default function Page() {
  // In real app, fetch this data from your API
  const statsData = {
    revenue: { value: '$12,426', change: '+12.5%', trend: 'up' },
    orders: { value: '156', change: '+8.2%', trend: 'up' },
    products: { value: '342', change: '+15.3%', trend: 'up' },
    customers: { value: '89', change: '-2.4%', trend: 'down' }
  };

  const revenueData = [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 5100 },
    { month: 'Mar', revenue: 3800 },
    { month: 'Apr', revenue: 6200 },
    { month: 'May', revenue: 5500 },
    { month: 'Jun', revenue: 7100 }
  ];

  const trendingProducts = [
    { id: 1, name: 'Wireless Earbuds Pro', sold: 45, revenue: '$2,249', rating: 4.8, image: '🎧' },
    { id: 2, name: 'Smart Watch Series 5', sold: 32, revenue: '$4,799', rating: 4.9, image: '⌚' },
    { id: 3, name: 'Bluetooth Speaker', sold: 28, revenue: '$1,119', rating: 4.7, image: '🔊' },
    { id: 4, name: 'Phone Stand', sold: 67, revenue: '$669', rating: 4.6, image: '📱' }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Smith', product: 'Wireless Headphones', amount: '$129.99', status: 'completed', date: '2 hours ago' },
    { id: '#12344', customer: 'Sarah Johnson', product: 'Smart Watch Pro', amount: '$299.99', status: 'processing', date: '5 hours ago' },
    { id: '#12343', customer: 'Mike Wilson', product: 'Bluetooth Speaker', amount: '$79.99', status: 'pending', date: '1 day ago' },
    { id: '#12342', customer: 'Emily Davis', product: 'USB-C Cable', amount: '$19.99', status: 'completed', date: '1 day ago' }
  ];

  const inventoryAlerts = [
    { id: 1, product: 'Wireless Mouse', stock: 5, status: 'low' },
    { id: 2, product: 'USB Cable', stock: 0, status: 'out' },
    { id: 3, product: 'Phone Case', stock: 8, status: 'low' }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards data={statsData} />

        {/* Chart and Trending Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={revenueData} />
          <TrendingProducts products={trendingProducts} />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Orders and Inventory Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentOrders orders={recentOrders} />
          </div>
          <InventoryAlerts alerts={inventoryAlerts} />
        </div>
      </div>
    </div>
  );
}


