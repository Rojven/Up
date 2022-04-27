import { FC } from 'react';
import PlatesTemplate from '../../components/PlatesTemplate/PlatesTemplate';

import Chart from '../../components/Chart';


const Analytics: FC = () => {
    
    return (
        <section>
            <h3 className='section-title section-title_addons'>Analytics</h3> 
            <p className='section-subtitle'>Track the effectiveness of Add-Ons here</p>
            <div style={{display: 'flex', gap: '30px', flexDirection: 'column'}}>
                <PlatesTemplate>
                    <h3 className='settings-title'>Info 1</h3>
                    <Chart/>
                </PlatesTemplate>
                <PlatesTemplate>
                    <h3 className='settings-title'>Info 2</h3>
                    <Chart/>
                </PlatesTemplate>
                <PlatesTemplate>
                    <h3 className='settings-title'>Info 3</h3>
                    <Chart/>
                </PlatesTemplate>
                <PlatesTemplate>
                    <h3 className='settings-title'>Info 4</h3>
                    <Chart/>
                </PlatesTemplate>
                <PlatesTemplate>
                    <h3 className='settings-title'>Info 5</h3>
                    <Chart/>
                </PlatesTemplate>
            </div>
        </section>
    )
}

export default Analytics;