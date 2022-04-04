import React from 'react';
import { PieChart, Pie, Legend, Tooltip,} from 'recharts';
import useData from '../../Utilities/CustomHok/useData';



  
const MonthlyRevenue = () => {
    const [datas, setDatas]=useData();
    return (
      <div>
        <h1 className='chart-title'>Monthly Revenue</h1>
        <div className="monthly-revenue-chart">
            <PieChart width={600} height={350}>
                <Pie
                dataKey="revenue"
                isAnimationActive={true}
                data={datas}
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#8884d8"
                label
                />
                <Tooltip />
            </PieChart>
        </div>
      </div>
    );
  }

// const MonthlyRevenue = () => {
//     const [datas, setDatas]=useData();
//     return (
//         <div>
//             <h1 className='chart-title'>Monthly Revenue</h1>
//             <div className="monthly-revenue-chart">
//                 <PieChart width={600} height={300}>
//                     <Pie
//                         dataKey="revenue"
//                         isAnimationActive={true}
//                         data={datas}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={130}
//                         fill="#6c5ce7"
//                         label
//                     />
//                     <Tooltip />
//                 </PieChart>
//             </div>
//         </div>
//     );
// };

export default MonthlyRevenue;



