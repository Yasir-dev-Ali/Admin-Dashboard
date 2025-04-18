// components/Sidebar.jsx
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="w-64 bg-gray-800 text-white p-6 space-y-4">
            <h1 className="text-2xl font-bold mb-6">Admin</h1>
            <nav className="space-y-2">
                <Link to="/" className="block hover:bg-gray-700 p-2 rounded">Dashboard</Link>
                <Link to="/analytics" className="block hover:bg-gray-700 p-2 rounded">Analytics</Link>
                <Link to="/users" className="block hover:bg-gray-700 p-2 rounded">Users</Link>
            </nav>
        </div>
    );
}
