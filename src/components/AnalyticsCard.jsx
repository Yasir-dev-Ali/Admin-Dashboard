// components/AnalyticsCard.jsx
export default function AnalyticsCard({ title, value }) {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
}
