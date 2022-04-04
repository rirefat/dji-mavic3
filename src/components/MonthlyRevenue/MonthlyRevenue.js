import React from 'react';
import { PieChart, Pie, Legend, Tooltip,} from 'recharts';

const data = [
    {
        name: "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        name: "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        name: "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        name: "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        name: "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        name: "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];
const MonthlyRevenue = () => {
    return (
        <div>
            <h1 className='chart-title'>Monthly Revenue</h1>
            <div className="monthly-revenue-chart">
                <PieChart width={600} height={330}>
                    <Pie
                        dataKey="revenue"
                        isAnimationActive={true}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={110}
                        fill="#6c5ce7"
                        label
                    />
                    <Tooltip />
                    <Legend></Legend>
                </PieChart>
            </div>
        </div>
    );
};

export default MonthlyRevenue;



