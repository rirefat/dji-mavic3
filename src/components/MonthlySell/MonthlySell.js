import './MonthlySell.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import useData from '../../Utilities/CustomHok/useData';

const MonthlySell = () => {
    // const [datas, setDatas]=useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //         .then(res=>res.json())
    //         .then(data=>setDatas(data))
    // },[]);
    const [datas, setDatas] = useData();
    return (
        <div>
            <h1 className='chart-title'>Monthly Sell</h1>
            <div className="monthly-sell-chart">
                <LineChart width={600} height={300} data={datas}>
                    <Line type="monotone" dataKey="sell" stroke="#a29bfe" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default MonthlySell;