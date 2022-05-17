import { FC } from 'react';
import { TabPanel } from 'react-tabs';

import { TabsTemplate, ModalsTemplate} from '../../components';


import './Notification.scss';

interface NotificationProps {
    notification: boolean;
}

const notificationTabsData = [
    {text: 'All'},
    {text: 'Following'},
    {text: 'Archive'}
]

const Notification: FC<NotificationProps> = ({ notification }) => {
    return (
        <ModalsTemplate modalState={notification}>
            <TabsTemplate 
                tabClass='tabs tabs_notification' 
                tabsList={notificationTabsData}
                notificationClass='react-tabs__tab react-tabs__tab_notification'
            >
                {notificationTabsData.map((tab, i) =>
                    <TabPanel key={i}>
                        <h2 className='section__title' style={{paddingTop: '30px'}}>{tab.text}</h2>
                    </TabPanel>
                )}
            </TabsTemplate>
        </ModalsTemplate>
    )
}

export default Notification;