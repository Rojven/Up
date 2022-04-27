import { FC } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';
import DropdownTemplate from '../DropdownTemplate/DropdownTemplate';

import './CommonSettings.scss';

const layoutVariantDropdownOptions = [
    'Show each variant individually',
    'Group and allow selection via a dropdown'
]

const addonTypeDropdownOptions = [
    'Button', 
    'Checkbox', 
    'Quantity box',
    'Quantity dropdown (product page only)',
    'Button with quantity box'
];

const CommonSettings: FC = () => {
    return (
        <section className='settings__tab-content'>
            <PlatesTemplate>
                <h3 className='settings-title'>Settings Preview</h3>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>The example preview is based on <span>Shopify's Simple</span> theme with app's default options and may look different for your theme</p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Design Options</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>General</p>
                    <ul className='settings-list'>
                        <li className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Link product title</li>
                        <li className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Show '(See Details)' link</li>
                        <li className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Show border</li>
                    </ul>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Add-On type</p>
                    <DropdownTemplate options={addonTypeDropdownOptions} />
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Layout variant</p>
                    <DropdownTemplate options={layoutVariantDropdownOptions} />
                </div>
                <p className='settings-subtitle'>Border</p>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="border-size">Thickness</label>
                            <input type="number" name='border-size' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="border-color">Set Border color</label>
                            <input type="color" name='border-color' className='input'/>
                        </div>
                    </form>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Image options</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Use Shopify's generated Thumbnail Image</p>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>App will use large product image and set a default height of 50px, use this option to change the source of image instead to the thumbnail image</div>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Thumbnail Image size</p>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="img-widht">Width (pixels)</label>
                            <input type="number" name='img-widht' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="img-height">Height (pixels)</label>
                            <input type="number" name='img-height' className='input'/>
                        </div>
                    </form>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Reset height to original</p>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Recommended if using Thumbnail Image</div>
                </div>
                <p className='settings-subtitle'>Reset width to original</p>
                <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Recommended if using Thumbnail Image</div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Fonts</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Header text</p>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="header-size">Font size</label>
                            <input type="number" name='header-size' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="header-color">Set Font color</label>
                            <input type="color" name='header-color' className='input'/>
                        </div>
                    </form>
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Product title</p>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="product-size">Font size</label>
                            <input type="number" name='product-size' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="product-color">Set Font color</label>
                            <input type="color" name='product-color' className='input'/>
                        </div>
                    </form>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Bold text</div>
                </div>
                <p className='settings-subtitle'>Description</p>
                <form className='size-form'>
                    <div>
                        <label htmlFor="descr-size">Font size</label>
                        <input type="number" name='descr-size' className='input'/>
                    </div>
                    <div>
                        <label htmlFor="descr-color">Set Font color</label>
                        <input type="color" name='descr-color' className='input'/>
                    </div>
                </form> 
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Add to cart button</h3>
                <div className='settings-wrapper'>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="button-width">Width (pixels)</label>
                            <input type="number" name='button-width' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="button-height">Height (pixels)</label>
                            <input type="number" name='button-height' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="button-size">Font size</label>
                            <input type="number" name='button-size' className='input'/>
                        </div>
                    </form>
                </div>
                <div className='settings-wrapper'>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="padding-top">Padding top (pixels)</label>
                            <input type="number" name='padding-top' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="padding-right">Padding right (pixels)</label>
                            <input type="number" name='padding-right' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="padding-bottom">Padding bottom (pixels)</label>
                            <input type="number" name='padding-bottom' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="padding-left">Padding left (pixels)</label>
                            <input type="number" name='padding-left' className='input'/>
                        </div>
                    </form> 
                </div>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>App will use styles of your existing "Add to cart" button on product page and "Checkout" button on the cart page. However, you can specify additional settings using below options</p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Advanced Styling</h3>
                <p className='settings-subtitle'>Custom CSS</p>
                <div className='settings-list-item'><textarea className='input'></textarea></div>
            </PlatesTemplate>
        </section>
    )
}

export default CommonSettings;