import { FC, useMemo } from 'react';
import { AreaChart, Legend, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { PlatesTemplate } from '../../components';


const AddonsClicks: FC = () => {

    const data = useMemo(
        () => [
            {
                name: '4 day ago',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: '3 day ago',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: '2 day ago',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: 'yesterday',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: 'today',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
        ], 
    []
    )

    return (
        <PlatesTemplate plateClass='plate_chart'>
            <div className='section__flex'>
                <h2 className='section__title'>Add-Ons Effectiveness</h2>
                <button className='button'>Details</button>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 30,
                        right: 20,
                        left: 0,
                        bottom: 40,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#5a5ee0" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#5ae06e" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                <Legend />
                </AreaChart>
                
            </ResponsiveContainer>
        </PlatesTemplate>
    )
}

export default AddonsClicks;