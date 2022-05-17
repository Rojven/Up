import { FC, useMemo } from 'react';
import { TiPointOfInterest } from 'react-icons/ti';

import { PageTemplate, PlatesTemplate } from '../../components';

import './Account.scss';

const Account: FC = () => {

    return (
        <PageTemplate sectionClassName='section_account account'> 
            <div className='account__upper'>
                <h2 className='section__title'>Ready to get started?</h2>
                <h3 className='section__subtitle'>choose a plane tailored to your needs</h3>
            </div>
            <div className='account__wrapper'>
                <div className='account__card'>
                    <div className='account__card-upper'>
                        <div>
                            <h2 style={{fontSize: '20px'}}>Free</h2>
                        </div>
                        <h2 style={{padding: '10px 0'}}>0$/month</h2>
                        <button className='button' style={{marginTop: '10px'}}>7 days free trial</button>
                    </div>
                    <div className='account__card-content'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    <div className='account__card-footer'>
                        <h2 className='section__subtitle'>See all features</h2>
                    </div>
                </div>
                <div className='account__card'>
                    <div className='account__card-upper'>
                        <div>
                            <h2 style={{fontSize: '20px'}}>Premium</h2>
                        </div>
                        <h2 style={{padding: '10px 0'}}>6.99$/month</h2>
                        <button className='button' style={{marginTop: '10px'}}>Get Started</button>
                    </div>
                    <div className='account__card-content'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    <div className='account__card-footer'>
                        <h2 className='section__subtitle'>See all features</h2>
                    </div>
                </div>
                <div className='account__card'>
                    <div className='account__card-upper'>
                        <div>
                            <h2 style={{fontSize: '20px'}}>Ultimate</h2>
                        </div>
                        <h2 style={{padding: '10px 0'}}>11.99$/month</h2>
                        <button className='button' style={{marginTop: '10px'}}>Get Started</button>
                    </div>
                    <div className='account__card-content'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className='settings__checkitem'>
                                <TiPointOfInterest className='icon icon_advanced'/>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                    <div className='account__card-footer'>
                        <h2 className='section__subtitle'>See all features</h2>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
}

export default Account;