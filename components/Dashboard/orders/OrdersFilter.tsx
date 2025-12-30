

// components/orders/OrdersFilters.tsx
'use client';
import React, { useState } from 'react';
import { IconSearch, IconFilter, IconCalendar } from '@tabler/icons-react';

export default function OrdersFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'processing', label: 'Processing' },
    { value: 'pending', label: 'Pending' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" stroke={2} />
          <input
            type="text"
            placeholder="Search by order ID, customer name, or product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <IconFilter className="h-4 w-4 text-muted-foreground" stroke={2} />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Filter */}
        <button className="inline-flex items-center gap-2 h-10 px-4 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <IconCalendar className="h-4 w-4" stroke={2} />
          Date Range
        </button>
      </div>
    </div>
  );
}

