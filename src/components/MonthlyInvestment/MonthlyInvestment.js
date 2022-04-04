import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import useData from '../../Utilities/CustomHok/useData';

const MonthlyInvestment = () => {
    const [datas, setDatas]=useData()
    return (
        <div>
            <h1 className='chart-title'>Monthly Investment</h1>
            {/* <div className="monthly-investment-chart"> */}
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <BarChart
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
                        {/* <Legend /> */}
                        <Bar dataKey="investment" fill="#a29bfe" />
                    </BarChart>
                {/* </ResponsiveContainer> */}
            {/* </div> */}
        </div>
    );
};

export default MonthlyInvestment;