import DashboardPieChart from './components/DashboardPieChart';
import DashboardBarChart from './components/DashboardBarChart';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold mb-4 text-slate-700">Sales Distribution</h2>
          <DashboardPieChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-semibold mb-4 text-slate-700">Monthly Revenue</h2>
          <DashboardBarChart />
        </div>
      </div>
    </div>
  );
}