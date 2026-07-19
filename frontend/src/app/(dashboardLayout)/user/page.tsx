export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">My Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-medium text-slate-500 mb-1">Total Orders</h3>
          <p className="text-3xl font-bold text-slate-800">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-medium text-slate-500 mb-1">Saved Builds</h3>
          <p className="text-3xl font-bold text-slate-800">3</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-medium text-slate-500 mb-1">Pending Deliveries</h3>
          <p className="text-3xl font-bold text-slate-800">1</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-8">
        <h2 className="text-xl font-semibold mb-4 text-slate-700">Recent Orders</h2>
        <div className="text-slate-500 text-center py-8">
          No recent orders found.
        </div>
      </div>
    </div>
  );
}