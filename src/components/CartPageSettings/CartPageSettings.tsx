import { FC } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';
import DropdownTemplate from '../DropdownTemplate/DropdownTemplate';

import './CartPageSettings.scss';

const CartPagePlacementDropdownOptions = [
    'Above cart (recommended)',
    'Below cart',
    'Before check out button',
    'Disabled'
]

const CartPageLayoutStyleDropdownOptions = [
    'Flexible',
    'Slider'
]

const CartPageBoxStyleDropdownOptions = [
    'Classic (vertical layout only)', 
    'Image on top (vertical layout not supported)', 
    'Image on left (vertical layout not supported)',
]

const CartPageSettings: FC = () => {
    return (
        <section className='settings__tab-content'>
            <PlatesTemplate>
                <h3 className='settings-title'>Settings Preview</h3>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>The example preview is based on <span>Shopify's Simple</span> theme with app's default options and may look different for your theme</p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Placement</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Cart Page Add-On position</p>
                    <DropdownTemplate options={CartPagePlacementDropdownOptions} />
                </div>
                <p className='settings-subtitle'>Disable Product and Collection Add-ons on Cart Page</p>
                <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Add-Ons created for individual products will not be displayed on the cart page</div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Design Options</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Layout style</p>
                    <DropdownTemplate options={CartPageLayoutStyleDropdownOptions} />
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Layout container size</p>
                    <form className='size-form'>
                        <div>
                            <label htmlFor="layout-widht">Width (pixels)</label>
                            <input type="number" name='layout-widht' className='input'/>
                        </div>
                        <div>
                            <label htmlFor="layout-height">Height (pixels)</label>
                            <input type="number" name='layout-height' className='input'/>
                        </div>
                    </form>
                    <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>Setting Height and Width for the container is only required if Slider layout doesn't work correctly on your theme</p></div>
                </div> 
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Box style</p>
                    <DropdownTemplate options={CartPageBoxStyleDropdownOptions} />
                </div>
                <p className='settings-subtitle'>Box size</p>
                <form className='size-form'>
                    <div>
                        <label htmlFor="box-widht">Width (pixels)</label>
                        <input type="number" name='box-widht' className='input'/>
                    </div>
                    <div>
                        <label htmlFor="box-height">Height (pixels)</label>
                        <input type="number" name='box-height' className='input'/>
                    </div>
                </form>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>Setting Height and Width is only required for Slider layout. Leave blank for all other layouts</p></div> 
            </PlatesTemplate>
        </section>
    )
}

export default CartPageSettings;