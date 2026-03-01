import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.scss';


const dataSalary = [
    { name: 'January', salary: 4000 }, { name: 'Febuary', salary: 3000 },
    { name: 'March', salary: 2000 }, { name: 'April', salary: 2780 },
    { name: 'May', salary: 1890 }, { name: 'June', salary: 2390 },
];
const dataDepartment = [
    { name: 'IT', value: 400 }, { name: 'HR', value: 300 },
    { name: 'Marketing', value: 300 }, { name: 'Sales', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
    return (
        <main className="dashboard-container">
            <header>
                <h2 className="page-title">HR Dashboard & Analytics</h2>
            </header>

            <section className="stats-cards" aria-label="Key Performance Indicators">
                <article className="card">
                    <h3 className="card-title">Total headcount</h3>
                    <p className="card-value">1,250</p>
                    <span className="card-trend up">+5% this month</span>
                </article>
                <article className="card">
                    <h3 className="card-title">Monthly salary fund</h3>
                    <p className="card-value">$45,000</p>
                    <span className="card-trend down">-2% compared to May</span>
                </article>
                <article className="card">
                    <h3 className="card-title">Employee turnover rate</h3>
                    <p className="card-value">1.2%</p>
                    <span className="card-trend stable">Stable</span>
                </article>
            </section>

            <section className="charts-container" aria-label="Analytics Charts">
                <article className="chart-box">
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
                </article>

                <article className="chart-box">
                    <h3>Headcount distribution by department</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={dataDepartment} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                                {dataDepartment.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: 'none' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </article>
            </section>
        </main>
    );
};

export default Dashboard;