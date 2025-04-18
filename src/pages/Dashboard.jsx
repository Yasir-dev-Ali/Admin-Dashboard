// pages/Dashboard.jsx
import AnalyticsCard from '../components/AnalyticsCard';

export default function Dashboard() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnalyticsCard title="Total Users" value={120} />
                <AnalyticsCard title="Active Users" value={80} />
                <AnalyticsCard title="Inactive Users" value={40} />
            </div>
        </div>
    );
}
