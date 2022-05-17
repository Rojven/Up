import { FC, useMemo } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import { DropdownTemplate, PageTemplate, PlatesTemplate } from '../../components';

import './General.scss';

const OnPagePlacementDropdownOptions = [
    'Above add to cart button', 
    'After add to cart button', 
    'Before the form',
    'After the form'
];

const CartPagePlacementDropdownOptions = [
    'Above cart (recommended)',
    'Below cart',
    'Before check out button'
];

const layoutStyleDropdownOptions = [
    'Vertical', 
    'Flexible', 
    'Slider',
];

const boxStyleDropdownOptions = [
    'Classic (vertical layout only)', 
    'Image on top (vertical layout not supported)', 
    'Image on left (vertical layout not supported)'
];

const General: FC = () => {

    const designData = useMemo(
        () => [
            {dropdownLabel: 'Layout style', sizeLabel: 'Layout container size', inputNameWidth: 'layout-widht', inputNameHeight: 'layout-height', infoText: "Setting Height and Width for the container is only required if Slider layout doesn't work correctly on your theme", options: layoutStyleDropdownOptions},
            {dropdownLabel: 'Box style', sizeLabel: 'Box size', inputNameWidth: 'box-widht', inputNameHeight: 'box-height', infoText: "Setting Height and Width is only required for Slider layout. Leave blank for all other layouts", options: boxStyleDropdownOptions},
        ],
        []
    )

    const placementFormData = useMemo(
        () => [
            {title: 'Disable on Product Page', inputName: 'productpage-check', subtitle: 'Add-Ons will be only displayed on the cart page'},
            {title: 'Disable Catalog Add-ons on Product Page', inputName: 'catalog-check', subtitle: 'Add-Ons created for entire catalog will not be displayed on the product page'},
            {title: 'Disable Product and Collection Add-ons on Cart Page', inputName: 'cartpage-check', subtitle: 'Add-Ons created for individual products will not be displayed on the cart page'},
            {title: 'Popup display', inputName: 'popup-check', subtitle: 'Display the main product in popup'}
        ],
        []
    )

    const contentFormData = useMemo(
        () => [
            {label: 'Header Text', inputName: 'popup-header', placeholder: ''},
            {label: 'Description Text', inputName: 'popup-descr', placeholder: ''},
            {label: 'Add item to cart text', inputName: 'popup-add', placeholder: ''},
            {label: 'Remove item from cart text', inputName: 'popup-remove', placeholder: ''},
            {label: 'No, I am good text (popup only)', inputName: 'popup-no', placeholder: ''},
            {label: 'Continue shopping text (popup only)', inputName: 'popup-continue', placeholder: ''},
            {label: 'Add to cart text (for checkbox style)', inputName: 'popup-checkbox', placeholder: ''},
            {label: 'Save text (popup only)', inputName: 'popup-save', placeholder: ''},
            {label: 'Continue button text  (popup only)', inputName: 'popup-continue-button', placeholder: ''},
            {label: 'Check out button text  (popup only)', inputName: 'popup-checkout-button', placeholder: ''},  
        ],
        []
    )

    return (
        <PageTemplate sectionClassName='section_settings-tab'>
            <PlatesTemplate>
                <h3 className='section__title'>Settings Preview</h3>
                <div className='settings__form'>
                    <div style={{height: '200px'}}>
                        in progress
                    </div>
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>The example preview is based on <span>Shopify's Simple</span> theme with app's default options and may look different for your theme</p></div>
                </div>  
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Placement</h3>
                <div className='settings__form'>
                    <div>
                        <p className='settings__label'>Add-On position (product page)</p>
                        <DropdownTemplate options={OnPagePlacementDropdownOptions} />
                    </div>
                    <div>
                        <p className='settings__label'>Add-On position (cart page)</p>
                        <DropdownTemplate options={CartPagePlacementDropdownOptions} />
                    </div>
                    <form className='settings__form settings__form_checkitem'>
                        {placementFormData.map((item, i) => 
                            <div key={i}>
                                <div className='settings__checkitem'>
                                    <input 
                                        type="checkbox" 
                                        name={item.inputName} 
                                        className='checkbox'
                                    />
                                    {item.title}
                                </div>
                                <p className='section__subtext'>{item.subtitle}</p>
                            </div>
                        )}
                    </form>
                </div>  
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Design Options</h3> 
                {designData.map((block, i) => 
                    <div key={i} className='settings__form'>
                        <div>
                            <p className='settings__label'>{block.dropdownLabel}</p>
                            <DropdownTemplate options={block.options} />
                        </div>
                        <div>
                            <p className='settings__label'>{block.sizeLabel}</p>
                            <form className='settings__size-form'>
                                <div>
                                    <label htmlFor={block.inputNameWidth} className='settings__label'>Width (pixels)</label>
                                    <div className='settings__size-form-wrapper'>
                                        <input type="number" name={block.inputNameWidth} className='input'/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor={block.inputNameHeight} className='settings__label'>Height (pixels)</label>
                                    <div className='settings__size-form-wrapper'> 
                                        <input type="number" name={block.inputNameHeight} className='input'/>
                                    </div>  
                                </div>
                            </form>
                        </div>
                        <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>{block.infoText}</p></div>
                    </div>
                )}
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Text Content</h3>
                    <form className='settings__form'>
                    {contentFormData.map((item, i) =>
                        <div key={i}>
                            <label htmlFor={item.inputName} className='settings__label'>{item.label}</label>
                            <div className='settings__input-wrapper'>
                                <input 
                                    type="text" 
                                    className='input' 
                                    name={item.inputName}
                                    placeholder={item.label}
                                />
                            </div>  
                        </div>  
                    )}
                </form>
            </PlatesTemplate>
        </PageTemplate>
    )
}

export default General;