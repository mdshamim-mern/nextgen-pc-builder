import Link from 'next/link';
import { LayoutDashboard, Users, Monitor, ShoppingCart, Settings } from 'lucide-react';

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white">NextGen PC</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-slate-800 text-white rounded-lg transition-colors">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
          <Users size={20} />
          <span>Users</span>
        </Link>
        <Link href="/admin/components" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
          <Monitor size={20} />
          <span>Components</span>
        </Link>
        <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
          <ShoppingCart size={20} />
          <span>Orders</span>
        </Link>
      </nav>
      <div className="p-4">
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}