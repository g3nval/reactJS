import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.scss';


const dataSalary = [
    { name: 'January', salary: 4000 },
    { name: 'Febuary', salary: 3000 },
    { name: 'March', salary: 2000 },
    { name: 'April', salary: 2780 },
    { name: 'May', salary: 1890 },
    { name: 'June', salary: 2390 },
];

const dataDepartment = [
    { name: 'IT', value: 400 },
    { name: 'HR', value: 300 },
    { name: 'Marketing', value: 300 },
    { name: 'Sales', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
                <h2 className="page-title">HR Dashboard & Analytics</h2>

                {/* Các thẻ chỉ số KPI */}
                <div className="stats-cards">
                    <div className="card">
                        <div className="card-title">Total headcount</div>
                        <div className="card-value">1,250</div>
                        <div className="card-trend up">+5% this month</div>
                    </div>
                    <div className="card">
                        <div className="card-title">Monthly salary fundt</div>
                        <div className="card-value">$45,000</div>
                        <div className="card-trend down">-2% compared to May</div>
                    </div>
                    <div className="card">
                        <div className="card-title">Employee turnover rate</div>
                        <div className="card-value">1.2%</div>
                        <div className="card-trend stable">Stable</div>
                    </div>
                </div>

                {/* Khu vực biểu đồ */}
                <div className="charts-container">
                    <div className="chart-box">
                        <h3>Payroll cost fluctuation</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={dataSalary}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                <XAxis dataKey="name" stroke="#ccc" />
                                <YAxis stroke="#ccc" />
                                <Tooltip contentStyle={{ backgroundColor: '#242526', border: 'none' }} />
                                <Legend />
                                <Bar dataKey="salary" fill="#2374e1" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-box">
                        <h3>Headcount distribution by department</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={dataDepartment}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {dataDepartment.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: 'none' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;