import { FC, useMemo } from 'react';
import { TabPanel } from 'react-tabs';

import TabsTemplate from '../../components/TabsTemplate/TabsTemplate';
import { AdvancedSettings, CartPageSettings, CommonSettings, OnPageSettings, PopupSettings, PreferencesSettings } from '../../components';

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
        <section className='settings'>
            <h3 className='section-title section-title_addons'>Settings</h3> 
            <p className='section-subtitle'>Manage and set up the app here</p>
            <TabsTemplate 
                tabClass='tabs tabs_addons'
                tabsList={settingsTabsData}
            >
                {settingsTabsData.map((tab, i) =>
                    <TabPanel key={i}>
                        {tab.component}    
                    </TabPanel>
                )}
            </TabsTemplate>
        </section>
    )
}

export default Settings;