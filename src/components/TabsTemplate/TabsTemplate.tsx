import { FC, ReactNode } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';

import './TabsTemplate.scss';

interface TabsListArray {
    text: string;
}

interface TabsTemplateProps {
    clazz: string;
    tabsList: TabsListArray[];
    children: ReactNode;
}

const TabsTemplate: FC<TabsTemplateProps> = ({ clazz, tabsList, children }) => {

    return (
        <Tabs>
            <TabList className={clazz}>
                {tabsList.map((tab, i) => 
                    <Tab key={i}>
                        {tab.text}
                    </Tab>
                )}
            </TabList>
            {children}
        </Tabs>
        
    )
}

export default TabsTemplate;