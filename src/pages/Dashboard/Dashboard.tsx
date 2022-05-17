import { FC } from 'react';
import Masonry from 'react-masonry-css';

import { TodaysSales, AddonsIncome, PageTemplate, TopProducts, AddonsClicks } from '../../components';

import './Dashboard.scss';

const dashboardData = [
    {child: <TodaysSales/>},
    {child: <AddonsIncome/>},
    {child: <AddonsClicks/>},
    {child: <TopProducts/>}
]

const breakpointObj = {
    default: 2,
    3000: 3,
    2000: 2,
    960: 1
    
}

const Dashboard: FC = () => {
    return (
        <PageTemplate sectionClassName='section_dashboard dashboard'>
            <Masonry
                breakpointCols={breakpointObj}
                className="dashboard__wrapper"
                columnClassName="dashboard__column"
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