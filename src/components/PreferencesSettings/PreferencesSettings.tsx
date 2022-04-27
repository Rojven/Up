import { FC } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';

import './PreferencesSettings.scss';

const PreferencesSettings: FC = () => {
    return (
        <section className='settings__tab-content'>
            <PlatesTemplate>
                <h3 className='settings-title'>Performance</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Caching</p>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Cache Add-Ons</div>
                    <p>Once add-ons are created checking this option is highly recommend for better performance of loading add ons Please see the Performance & Caching Support Page for more info</p>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Embeded script</p>
                    <button className='button'>Embed script</button>
                </div>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>If the app is loading after a significant lag on your site use the button below to embed app's script within your theme for faster loading of the app</p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Currency & Price</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Currency</p>
                    <input type="text" className='input'/>
                    <p>App will attempt to use currency setting from the theme, but some Shopify themes are known to set $ as default, in that case use this option to overrwrite default currency</p>
                </div>
                <div className='settings-wrapper'>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Show a '+' in front of the price</div>
                </div>
                <div className='settings-wrapper'>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Show Compare At Price</div>
                </div>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>App works with multiple currency, Please check Multi-Currency Support page to ensure your theme is setup correctly</p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Multiple languages support</h3>
                <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Use multiple languages</div>
                <p>If site is using Shopify's Selling in multiple languages features then please select this option</p>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Developer mode</h3>
                <div className='settings-wrapper'>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Developer mode</div>
                    <p>This will disable the app on your live site</p>
                </div>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>Use this option to disable the app on your live site. In developer mode use following link to launch the app in your borwser session: <span>Launch App in Developer mode (Please note in developer mode only you can view the app via this link)</span></p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Miscellaneous</h3>
                <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Allow us to track how users interact with add-ons. Don't worry, we only collect aggregate anonymous click data for analytics purposes</div>
            </PlatesTemplate>
        </section>
    )
}

export default PreferencesSettings;