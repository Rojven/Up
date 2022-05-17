import { FC, useMemo } from 'react';
import { TabPanel } from 'react-tabs';

import { AdvancedSettings, CommonSettings, General, PreferencesSettings, TabsTemplate, PageTemplate } from '../../components';

import './Settings.scss';

const Settings: FC = () => {

    const settingsTabsData = useMemo(
        () => [
            {text: 'General', component: <General/>},
            {text: 'Styles', component: <CommonSettings/>},
            {text: 'Preferences', component: <PreferencesSettings/>},
            {text: 'Advanced', component: <AdvancedSettings/>},
        ],
        []
    )

    return (
        <PageTemplate sectionClassName='section_settings settings'>
            <TabsTemplate 
                tabClass='tabs'
                tabsList={settingsTabsData}
            >
                {settingsTabsData.map((tab, i) =>
                    <TabPanel key={i}>
                        {tab.component}    
                    </TabPanel>
                )}
            </TabsTemplate>
        </PageTemplate>
    )
}

export default Settings;