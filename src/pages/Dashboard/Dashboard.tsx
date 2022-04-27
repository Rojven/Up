import { FC } from 'react';
import Masonry from 'react-masonry-css';

import { TodaysSales } from '../../components';
import Chart from '../../components/Chart';

import './Dashboard.scss';

const dashboardData = [
    {child: <TodaysSales/>},
    {child: <div><h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae, nobis perferendis odit labore asperiores quisquam provident explicabo pariatur ipsum? Recusandae commodi maxime aut at nostrum dolore hic minus doloremque.</h1></div>},
    {child: <TodaysSales/>},
    {child: <Chart/>},
    {child: <Chart/>},
    {child: <TodaysSales/>},
    {child: <div><h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae, nobis perferendis odit labore asperiores quisquam provident explicabo pariatur ipsum? Recusandae commodi maxime aut at nostrum dolore hic minus doloremque.</h1></div>},
]

const breakpointObj = {
    default: 2,
    3000: 3,
    2000: 2,
    1000: 1
    
}

const Dashboard: FC = () => {
    return (
        <section className='dashboard'>
            <h3 className='section-title section-title_addons'>Dashboard</h3> 
            <p className='section-subtitle'>All essential information in one place</p>
            <Masonry
                breakpointCols={breakpointObj}
                className="dashboard__wrapper"
            >
                {dashboardData.map((dashboardPlate, i) => 
                    <div key={i} className='dashboard__item'>
                        {dashboardPlate.child}
                    </div>
                )}
            </Masonry>
        </section>
    )
}

export default Dashboard;