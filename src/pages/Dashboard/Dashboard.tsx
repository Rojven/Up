import { FC } from 'react';

import { TodaysSales } from '../../components';

import './Dashboard.scss';

const dashboardData = [
    {class: 'dashboard__plate-one', child: <TodaysSales/>},
    {class: 'dashboard__plate-two', child: <div>1</div>},
    {class: 'dashboard__plate-three', child: <div>1</div>},
    {class: 'dashboard__plate-four', child: <div>1</div>},
    {class: 'dashboard__plate-five', child: <div>1</div>},
    {class: 'dashboard__plate-six', child: <div>1</div>},
    {class: 'dashboard__plate-seven', child: <div>1</div>},
    {class: 'dashboard__plate-eight', child: <div>1</div>}
]

const Dashboard: FC = () => {
    return (
        <section className='dashboard'>
            {dashboardData.map((dashboardPlate, i) => 
            <div key={i} className={dashboardPlate.class}>
                {dashboardPlate.child}
            </div>
            )}
        </section>
    )
}

export default Dashboard;