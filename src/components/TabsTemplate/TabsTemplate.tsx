import { FC, ReactNode } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';

import './TabsTemplate.scss';

interface TabsListArray {
    text: string;
}

interface TabsTemplateProps {
    tabClass: string;
    tabsList: TabsListArray[];
    children: ReactNode;
    notificationClass?: string;
}

const TabsTemplate: FC<TabsTemplateProps> = ({ tabClass, tabsList, children, notificationClass }) => {

    return (
        <Tabs>
            <TabList className={tabClass}>
                {tabsList.map((tab, i) => 
                    <Tab 
                        key={i}
                        className={notificationClass}
                    >
                        {tab.text}
                    </Tab>
                )}
            </TabList>
            {children}
        </Tabs>
        
    )
}

export default TabsTemplate;