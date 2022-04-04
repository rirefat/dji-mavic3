import React from 'react';
import InvestmentVsRevenue from '../InvestmentVsRevenue/InvestmentVsRevenue';
import MonthlyInvestment from '../MonthlyInvestment/MonthlyInvestment';
import MonthlyRevenue from '../MonthlyRevenue/MonthlyRevenue';
import MonthlySell from '../MonthlySell/MonthlySell';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='dashboard-page'>
            <div className="title">
                <h1><span className='target-text'>Admin</span> Dashboard</h1>
            </div>
            <div className="chart-container">
                
                <MonthlyRevenue></MonthlyRevenue>
                <MonthlySell></MonthlySell>
                <MonthlyInvestment></MonthlyInvestment>
                <InvestmentVsRevenue></InvestmentVsRevenue>
            </div>
        </div>
    );
};

export default Dashboard;