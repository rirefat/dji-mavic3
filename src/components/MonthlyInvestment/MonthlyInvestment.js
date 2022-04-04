import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import useData from '../../Utilities/CustomHok/useData';

const MonthlyInvestment = () => {
    const [datas, setDatas]=useData()
    return (
        <div>
            <h1 className='chart-title'>Monthly Investment</h1>
            <BarChart
                isAnimationActive={true}
                width={600}
                height={300}
                data={datas}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#a29bfe" />
            </BarChart>
        </div>
    );
};

export default MonthlyInvestment;