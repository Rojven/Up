import { FC, useMemo } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import { PageTemplate, PlatesTemplate } from '../../components';

const PreferencesSettings: FC = () => {

    const currencyFormData = useMemo(
        () => [
            {title: "Show a '+' in front of the price", inputName: 'showPlus-check'},
            {title: "Show Compare At Price", inputName: 'priceCompare-check'}
        ],
        []
    )

    return (
        <PageTemplate sectionClassName='section_settings-tab'>
            <PlatesTemplate>
                <h3 className='section__title'>Performance</h3>
                <div className='settings__form'>
                    <form>
                        <div className='settings__checkitem'>
                            <input 
                                type="checkbox" 
                                name='cache' 
                                className='checkbox'
                            />
                            Cache Add-Ons
                        </div>
                        <p className='section__subtext'>Once add-ons are created checking this option is highly recommend for better performance of loading add ons Please see the Performance & Caching Support Page for more info</p>  
                    </form>
                    <div>
                        <p className='settings__label'>Embeded script</p>
                        <button className='button'>Embed script</button>
                    </div>
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>If the app is loading after a significant lag on your site use the button below to embed app's script within your theme for faster loading of the app</p></div>
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Currency & Price</h3>
                <div className='settings__form'>
                    <form>
                        <label htmlFor="cache" className='settings__label'> Currency</label>
                        <div className='settings__input-wrapper'>
                            <input 
                                type="text" 
                                name='cache' 
                                className='input'
                            />
                        </div>
                    </form>
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>App will attempt to use currency setting from the theme, but some Shopify themes are known to set $ as default, in that case use this option to overrwrite default currency</p></div>
                    <div>
                        <form className='settings__form settings__form_checkitem'>
                            {currencyFormData.map((item, i) => 
                                <div key={i}>
                                    <div className='settings__checkitem'>
                                        <input 
                                            type="checkbox" 
                                            name={item.inputName} 
                                            className='checkbox'
                                        />
                                        {item.title}
                                    </div>
                                </div>
                            )}
                        </form>
                    </div> 
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>App works with multiple currency, Please check Multi-Currency Support page to ensure your theme is setup correctly</p></div>
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Multiple languages support</h3>
                <div className='settings__form'>   
                    <form>   
                        <div className='settings__checkitem'>
                            <input 
                                type="checkbox" 
                                name='multipleLanguages' 
                                className='checkbox'
                            />
                            Use multiple languages
                        </div> 
                        <p className='section__subtext'>If site is using Shopify's Selling in multiple languages features then please select this option</p>
                    </form>     
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Developer mode</h3>
                <div className='settings__form'>   
                    <form>   
                        <div className='settings__checkitem'>
                            <input 
                                type="checkbox" 
                                name='multipleLanguages' 
                                className='checkbox'
                            />
                            Developer mode
                        </div> 
                        <p className='section__subtext'>This will disable the app on your live site</p>
                    </form> 
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>Use this option to disable the app on your live site. In developer mode use following link to launch the app in your borwser session: <span>Launch App in Developer mode (Please note in developer mode only you can view the app via this link)</span></p></div>    
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Miscellaneous</h3>
                <div className='settings__form'>   
                    <form>   
                        <div className='settings__checkitem'>
                            <input 
                                type="checkbox" 
                                name='multipleLanguages' 
                                className='checkbox'
                            />
                            Tracking
                        </div> 
                        <p className='section__subtext'>Allow us to track how users interact with add-ons. Don't worry, we only collect aggregate anonymous click data for analytics purposes</p>
                    </form>     
                </div>
            </PlatesTemplate>
        </PageTemplate>
    )
}

export default PreferencesSettings;