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
        <div className={notification ? 'notification notification_active' : 'notification'}>
            <PlatesTemplate title='Notifications'>
                <TabsTemplate 
                    clazz='notification__tabs' 
                    tabsList={notificationTabsData}
                >
                    {notificationTabsData.map((tab, i) =>
                        <TabPanel key={i}>
                            <h2>{tab.text}</h2>
                        </TabPanel>
                    )}
                </TabsTemplate>
            </PlatesTemplate>
        </div>  
    )
}

export default Notification;