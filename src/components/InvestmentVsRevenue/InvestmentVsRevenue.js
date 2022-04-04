import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import useData from '../../Utilities/CustomHok/useData';

const InvestmentVsRevenue = () => {
    const [datas, setDatas] = useData()
    return (
        <div>
            <h1 className='chart-title'>Monthly Investment vs Revenue</h1>
            <div className="monthly-investment-vs-revenue">
                <AreaChart
                    width={600}
                    height={300}
                    data={datas}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#a29bfe" fill="#a29bfe" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#e74c3c" fill="#e74c3c" />
                </AreaChart>
            </div>
        </div>
    );
};

export default InvestmentVsRevenue;