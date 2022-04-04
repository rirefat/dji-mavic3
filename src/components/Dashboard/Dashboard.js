import React from 'react';
import MonthlySell from '../MonthlySell/MonthlySell';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-page'>
            <div className="title">
                <h1><span className='target-text'>Admin</span> Dashboard</h1>
            </div>
            <div className="chart-container">
                <MonthlySell></MonthlySell>
                <MonthlySell></MonthlySell>
            </div>
        </div>
    );
};

export default Dashboard;