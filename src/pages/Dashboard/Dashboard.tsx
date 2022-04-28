import { FC } from 'react';
import Masonry from 'react-masonry-css';

import { TodaysSales, PageTemplate, PlatesTemplate } from '../../components';
import Chart from '../../components/Chart';
import Chart3 from '../../components/Chart3';
import Chart2 from '../../components/Chart2';
import Chart4 from '../../components/Chart4';

import './Dashboard.scss';

const dashboardData = [
    {child: <TodaysSales/>},
    {child: <PlatesTemplate><Chart3/></PlatesTemplate>},
    {child: <PlatesTemplate><Chart/></PlatesTemplate>},
    {child: <TodaysSales/>},
    {child: <PlatesTemplate><Chart2/></PlatesTemplate>},
    {child: <TodaysSales/>},
    {child: <PlatesTemplate><Chart4/></PlatesTemplate>},
]

const breakpointObj = {
    default: 2,
    3000: 3,
    2000: 2,
    1000: 1
    
}

const Dashboard: FC = () => {
    return (
        <PageTemplate
            title='Dashboard'
            subtitle='All essential information in one place'
            contentClassName='section__content_dashboard dashboard'
        >
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
        </PageTemplate>
    )
}

export default Dashboard;