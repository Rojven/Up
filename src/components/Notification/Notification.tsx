import { FC } from 'react';
import { TabPanel } from 'react-tabs';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';
import TabsTemplate from '../TabsTemplate/TabsTemplate';

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
        <PlatesTemplate plateClass={notification ? 'plate_notification plate_notification_active' : 'plate_notification'}>
            <TabsTemplate 
                tabClass='tabs tabs_notification' 
                tabsList={notificationTabsData}
                notificationClass='react-tabs__tab react-tabs__tab_notification'
            >
                {notificationTabsData.map((tab, i) =>
                    <TabPanel key={i}>
                        <h2>{tab.text}</h2>
                    </TabPanel>
                )}
            </TabsTemplate>
        </PlatesTemplate>  
    )
}

export default Notification;