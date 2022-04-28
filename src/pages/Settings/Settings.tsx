import { FC, useMemo } from 'react';
import { TabPanel } from 'react-tabs';

import { AdvancedSettings, CartPageSettings, CommonSettings, OnPageSettings, PopupSettings, PreferencesSettings, TabsTemplate, PageTemplate } from '../../components';

import './Settings.scss';

const Settings: FC = () => {

    const settingsTabsData = useMemo(
        () => [
            {text: 'On-Page', component: <OnPageSettings/>},
            {text: 'Popup', component: <PopupSettings/>},
            {text: 'Cart Page', component: <CartPageSettings/>},
            {text: 'Common styles', component: <CommonSettings/>},
            {text: 'Preferences', component: <PreferencesSettings/>},
            {text: 'Advanced', component: <AdvancedSettings/>},
        ],
        []
    )

    return (
        <PageTemplate
            title='Settings'
            subtitle='Manage and set up the app here'
            contentClassName='section__content_settings settings'
        >
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