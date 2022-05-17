import { FC, useMemo } from 'react';
import { TiPointOfInterest } from 'react-icons/ti';
import { IoAlertCircleSharp } from 'react-icons/io5';

import { PageTemplate, PlatesTemplate } from '../../components';

const AdvancedSettings: FC = () => {

    const cartSelectorData = useMemo(
        () => [
            {text: "Default selector used by the app is: form[action='/cart/add']"},
            {text: "If app cannot find a form with above selector then it will look for any form which has an action that contains /cart/add"}
        ],
        []
    )

    const addToCartSelectorData = useMemo(
        () => [
            {text: "button[type='submit']"},
            {text: "input[type='submit']"},
            {text: ".btn-addtocart"},
            {text: "button[name='add']"},
            {text: "a.addtocart"},
        ],
        []
    )

    const checkoutSelectorData = useMemo(
        () => [
            {text: "Default selector used by the app is: form[action='/cart']"},
            {text: "If app cannot find a form with above selector then it will look for any form which has an action that contains /checkout or /cart"},
        ],
        []
    )

    const checkoutBtnSelectorData = useMemo(
        () => [
            {text: "button[name='checkout']"},
            {text: "input[name='checkout']"},
        ],
        []
    )

    return (
        <PageTemplate sectionClassName='section_settings-tab'>
            <PlatesTemplate>
                <h3 className='section__title'>Selector for Form and Button</h3>
                <div className='settings__form'>
                    <p className='section__subtitle'>Product Page</p>
                    <form>
                        <label htmlFor='cartSelector' className='settings__label'>Cart form selector</label>
                        <div className='settings__input-wrapper'>
                            <input type="text" name='cartSelector' className='input'/>
                        </div> 
                    </form>
                    {cartSelectorData.map((item, i) =>
                    <div className='settings__checkitem' key={i}>
                        <TiPointOfInterest className='icon icon_advanced'/>
                        {item.text}
                    </div>
                    )}
                    <form>
                        <label htmlFor='addSelector' className='settings__label'>Add to cart button selector</label>
                        <div className='settings__input-wrapper'>
                            <input type="text" name='addSelector' className='input'/>
                        </div> 
                    </form>
                    <p className='section__subtitle'>Selector used by app to find Add to cart button within the cart form:</p>
                    {addToCartSelectorData.map((item, i) =>
                    <div className='settings__checkitem' key={i}>
                        <TiPointOfInterest className='icon icon_advanced'/>
                        {item.text}
                    </div>
                    )}
                </div>
                <div className='settings__form'>
                    <p className='section__subtitle'>Cart Page</p>
                    <form>
                        <label htmlFor='checkoutSelector' className='settings__label'>Checkout form selector</label>
                        <div className='settings__input-wrapper'>
                            <input type="text" name='checkoutSelector' className='input'/>
                        </div> 
                    </form>
                    {checkoutSelectorData.map((item, i) =>
                    <div className='settings__checkitem' key={i}>
                        <TiPointOfInterest className='icon icon_advanced'/>
                        {item.text}
                    </div>
                    )}
                    <form>
                        <label htmlFor='checkoutBtnSelector' className='settings__label'>Checkout button selector</label>
                        <div className='settings__input-wrapper'>
                            <input type="text" name='checkoutBtnSelector' className='input'/>
                        </div> 
                    </form>
                    <p className='section__subtitle'>Selector used by app to find Checkout button within the checkout form:</p>
                    {checkoutBtnSelectorData.map((item, i) =>
                    <div className='settings__checkitem' key={i}>
                        <TiPointOfInterest className='icon icon_advanced'/>
                        {item.text}
                    </div>
                    )}
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Add-On Templates</h3>
                <div className='settings__form'>       
                    <form>
                        <label htmlFor='productPageTemplate' className='settings__label'>Product page template</label>
                        <textarea className='input input_textarea' name='productPageTemplate'/>
                    </form> 
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>Provide a template to change the default box rendering of add-ons on product page, please contact support to get more info</p></div>  
                    <form>
                        <label htmlFor='cartPageTemplate' className='settings__label'>Cart page template</label>
                        <textarea className='input input_textarea' name='cartPageTemplate'/>
                    </form> 
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>Provide a template to change the default box rendering of add-ons on cart page, please contact support to get more info</p></div>
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Input Template</h3>
                <div className='settings__form'>
                    <form>
                        <label htmlFor='checkboxTemplate' className='settings__label'>Product page (checkbox template)</label>
                        <textarea className='input input_textarea' name='checkboxTemplate'/>
                    </form>
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>Provide a template to change the default checkbox rendering of add-ons on cart page, please contact support to get more info</p></div>
                </div>
            </PlatesTemplate>            
        </PageTemplate>
    )
}

export default AdvancedSettings;