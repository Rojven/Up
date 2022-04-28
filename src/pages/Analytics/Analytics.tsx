import { FC } from 'react';

import { PageTemplate, PlatesTemplate } from '../../components';
import Chart from '../../components/Chart';
import Chart2 from '../../components/Chart2';
import Chart3 from '../../components/Chart3';
import Chart4 from '../../components/Chart4';

const Analytics: FC = () => {
    
    return (
        <PageTemplate
            title='Analytics'
            subtitle='Track the effectiveness of Add-Ons here'
            contentClassName='section__content_analytics analytics'
        >
            <PlatesTemplate>
                <h3 className='settings-title'>Info 1</h3>
                <Chart/>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Info 2</h3>
                <Chart4/>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Info 3</h3>
                <Chart3/>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Info 4</h3>
                <Chart4/>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Info 5</h3>
                <Chart2/>
            </PlatesTemplate>    
        </PageTemplate> 
    )
}

export default Analytics;