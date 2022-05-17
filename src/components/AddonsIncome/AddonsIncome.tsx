import { FC, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { PlatesTemplate } from '../../components';

const AddonsIncome: FC = () => {

    const addonsIncomeData = useMemo(
        () => [
            {
                name: '4 days ago',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: '3 days ago',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: '2 days ago',
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
                <h2 className='section__title'>Add-Ons Revenue</h2>
                <button className='button'>Details</button>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={100}
                    data={addonsIncomeData}
                    margin={{
                        top: 30,
                        right: 20,
                        left: 0,
                        bottom: 40,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" stackId="a" fill="#9c9eec" />
                    <Bar dataKey="pv" stackId="a" fill="#9ceca8" />
                </BarChart>
            </ResponsiveContainer> 
        </PlatesTemplate>
    )
}

export default AddonsIncome;