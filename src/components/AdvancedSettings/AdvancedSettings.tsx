import { FC } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';

const AdvancedSettings: FC = () => {
    return (
        <section className='settings__tab-content'>
            <PlatesTemplate>
                <h3 className='settings-title'>Selector for Form and Button</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Product Page</p>
                    <p className='settings-subtitle'>Cart form selector</p>
                    <input type="text" className='input'/>
                    <p>Default selector used by the app is: form[action='/cart/add']</p>
                    <p>If app cannot find a form with above selector then it will look for any form which has an action that contains /cart/add</p>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Add to cart button selector</p>
                    <input type="text" className='input'/>
                    <p>Selector used by app to find Add to cart button within the cart form:</p>
                    <p>button[type='submit']</p>
                    <p>input[type='submit']</p>
                    <p>.btn-addtocart</p>
                    <p>button[name='add']</p>
                    <p>a.addtocart</p>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Cart Page</p>
                    <p className='settings-subtitle'>Checkout form selector</p>
                    <input type="text" className='input'/>
                    <p>Default selector used by the app is: form[action='/cart']</p>
                    <p>If app cannot find a form with above selector then it will look for any form which has an action that contains /checkout or /cart</p>
                </div>
                <p className='settings-subtitle'>Checkout button selector</p>
                <input type="text" className='input'/>
                <p>Selector used by app to find Checkout button within the checkout form:</p>
                <p>button[name='checkout']</p>
                <p>input[name='checkout']</p>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Add-On Templates</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Product page template</p>
                    <textarea className='input'/>
                    <p>Provide a template to change the default box rendering of add-ons on product page, plese contact support to for more info</p>  
                </div>
                <p className='settings-subtitle'>Cart page template</p>
                <textarea className='input'/>
                <p>Provide a template to change the default box rendering of add-ons on cart page, plese contact support to for more info</p>  
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Input Template</h3>
                <p className='settings-subtitle'>Product page (checkbox template)</p>
                <textarea className='input'/>
                <p>Provide a template to change the default checkbox rendering of add-ons on product page, plese contact support to for more info</p>  
            </PlatesTemplate>
        </section>
    )
}

export default AdvancedSettings;