import { FC, useMemo } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import DropdownTemplate from '../DropdownTemplate/DropdownTemplate';
import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';

import './OnPageSettings.scss';

const OnPagePlacementDropdownOptions = [
    'Above add to cart button', 
    'After add to cart button', 
    'Before the form',
    'After the form'
];

const OnPageLayoutStyleDropdownOptions = [
    'Vertical', 
    'Flexible', 
    'Slider',
];

const OnPageBoxStyleDropdownOptions = [
    'Classic (vertical layout only)', 
    'Image on top (vertical layout not supported)', 
    'Image on left (vertical layout not supported)'
];

const OnPageSettings: FC = () => {

    const onpageContentFormData = useMemo(
        () => [
            {label: 'Header Text', inputName: 'onpage-header', placeholder: ''},
            {label: 'Add to cart button text', inputName: 'onpage-add', placeholder: ''},
            {label: 'Remove from cart text', inputName: 'onpage-remove', placeholder: ''},
            {label: 'See Details text', inputName: 'onpage-details', placeholder: ''},
        ],
        []
    )

    return (
        <section className='settings__tab-content'>
            <PlatesTemplate>
                <h3 className='settings-title'>Settings Preview</h3>
                <div className='settings-info'><IoAlertCircleSharp className='settings-icon'/> <p>The example preview is based on <span>Shopify's Simple</span> theme with app's default options and may look different for your theme</p></div>
            </PlatesTemplate>
            <PlatesTemplate>
                <div className='settings-wrapper'>
                    <h3 className='settings-title'>Placement</h3>
                    <p className='settings-subtitle'>Add-On position</p>
                    <DropdownTemplate options={OnPagePlacementDropdownOptions} />
                </div>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Disable on Product Page</p>
                    <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Add-Ons will be only displayed on the cart page</div>
                </div>
                <p className='settings-subtitle'>Disable Catalog Add-ons on Product Page</p>
                <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Add-Ons created for entire catalog will not be displayed on the product page</div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Design Options</h3>
                <div className='settings-wrapper'>
                    <p className='settings-subtitle'>Layout style</p>
                    <DropdownTemplate options={OnPageLayoutStyleDropdownOptions} />
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
                    <DropdownTemplate options={OnPageBoxStyleDropdownOptions} />
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
            <PlatesTemplate>
                <h3 className='settings-title'>Text / Language Localization</h3>
                <form className='popup-settings__form'>
                    {onpageContentFormData.map((item, i) =>
                        <div className='popup-settings__form-item' key={i}>
                            <label htmlFor={item.inputName}>{item.label}</label>
                            <input 
                                type="text" 
                                className='input' 
                                name={item.inputName}
                                placeholder={item.label}
                            />
                        </div>  
                    )}
                </form>
            </PlatesTemplate>
        </section>
    )
}

export default OnPageSettings;