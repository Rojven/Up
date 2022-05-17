import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brush, ReferenceLine } from 'recharts';

import { PageTemplate, PlatesTemplate } from '../../components';

const data = [
    {
      date: '2022-01',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      date: '2022-02',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      date: '2022-03',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      date: '2022-04',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: '2022-05',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      date: '2022-06',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      date: '2022-07',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      date: '2022-08',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      date: '2022-09',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      date: '2022-10',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      date: '2022-11',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: '2022-12',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
];

const monthTickFormatter = (tick) => {
    const date = new Date(tick);
  
    return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;
  
    if (month % 3 === 1) {
      return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }
  
    const isLast = month === 11;
  
    if (month % 3 === 0 || isLast) {
      const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
  
      return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
};

//////////////////////////////////////////////////////////////

const dataTwo = [
  { name: '1', uv: 300, pv: 456 },
  { name: '2', uv: -145, pv: 230 },
  { name: '3', uv: -100, pv: 345 },
  { name: '4', uv: -8, pv: 450 },
  { name: '5', uv: 100, pv: 321 },
  { name: '6', uv: 9, pv: 235 },
  { name: '7', uv: 53, pv: 267 },
  { name: '8', uv: 252, pv: -378 },
  { name: '9', uv: 79, pv: -210 },
  { name: '10', uv: 294, pv: -23 },
  { name: '12', uv: 43, pv: 45 },
  { name: '13', uv: -74, pv: 90 },
  { name: '14', uv: -71, pv: 130 },
  { name: '15', uv: -117, pv: 11 },
  { name: '16', uv: -186, pv: 107 },
  { name: '17', uv: -16, pv: 926 },
  { name: '18', uv: -125, pv: 653 },
  { name: '19', uv: 222, pv: 366 },
  { name: '20', uv: 372, pv: 486 },
  { name: '21', uv: 182, pv: 512 },
  { name: '22', uv: 164, pv: 302 },
  { name: '23', uv: 316, pv: 425 },
  { name: '24', uv: 131, pv: 467 },
  { name: '25', uv: 291, pv: -190 },
  { name: '26', uv: -47, pv: 194 },
  { name: '27', uv: -415, pv: 371 },
  { name: '28', uv: -182, pv: 376 },
  { name: '29', uv: -93, pv: 295 },
  { name: '30', uv: -99, pv: 322 },
  { name: '31', uv: -52, pv: 246 },
];

const Analytics = () => {

    return (
        <PageTemplate sectionClassName='section_analytics analytics'>
            <PlatesTemplate plateClass='plate_chart'>
                <div className='section__flex'>
                    <h2 className='section__title'>Annual Add-Ons Revenue</h2>
                    <input type="month" className='date'/>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 20,
                        left: 0,
                        bottom: 50,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        tick={renderQuarterTick}
                        height={1}
                        scale="band"
                        xAxisId="quarter"
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" stackId="a" fill="#9c9eec" />
                    <Bar dataKey="pv" stackId="a" fill="#9ceca8" />
                    </BarChart>
                </ResponsiveContainer>
            </PlatesTemplate>
            <PlatesTemplate plateClass='plate_chart'>
                <div className='section__flex'>
                    <h2 className='section__title'>Monthly Add-Ons Revenue</h2>
                    <input type="month" className='date'/>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={dataTwo}
                  margin={{
                    top: 30,
                    right: 20,
                    left: 0,
                    bottom: 50,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                  <ReferenceLine y={0} stroke="#000" />
                  <Brush dataKey="name" height={30} stroke="#9c9eec" />
                  <Bar dataKey="uv" stackId="a" fill="#ffc658" />
                    <Bar dataKey="pv" stackId="a" fill="#9ceca8" />
                </BarChart>
              </ResponsiveContainer>
            </PlatesTemplate>
        </PageTemplate> 
    )
}

export default Analytics;