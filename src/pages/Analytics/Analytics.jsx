
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../Analytics/Analytics.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'User Growth',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
            borderColor: 'rgba(59, 130, 246, 1)',      
            borderWidth: 2,
        },
    ],
};

export default function Analytics() {
    return (
        <div className="analytics-container">
            <h2 className="analytics-title">Analytics Dashboard</h2>
            <div className="analytics-card">
                <Bar data={data} />
            </div>
        </div>
    );
}
