import { FC, useMemo } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';
import DropdownTemplate from '../DropdownTemplate/DropdownTemplate';

import './PopupSettings.scss';

const PopupBoxStyleDropdownOptions = [
    'Classic (vertical layout only)', 
    'Image on top (vertical layout not supported)',
];

const PopupSettings: FC = () => {

    const popupContentFormData = useMemo(
        () => [
            {label: 'Header Text', inputName: 'popup-header', placeholder: ''},
            {label: 'Description Text', inputName: 'popup-descr', placeholder: ''},
            {label: 'Add item to cart text', inputName: 'popup-add', placeholder: ''},
            {label: 'Remove item from cart text', inputName: 'popup-remove', placeholder: ''},
            {label: 'No, I am good text', inputName: 'popup-no', placeholder: ''},
            {label: 'Continue shopping text', inputName: 'popup-continue', placeholder: ''},
            {label: 'Add to cart text (for checkbox style)', inputName: 'popup-checkbox', placeholder: ''},
            {label: 'Save text', inputName: 'popup-save', placeholder: ''},
            {label: 'Popup Continue Button text', inputName: 'popup-continue-button', placeholder: ''},
            {label: 'Popup Check out Button text', inputName: 'popup-checkout-button', placeholder: ''},  
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
                <h3 className='settings-title'>Placement</h3>
                <p className='settings-subtitle'>Popup display</p>
                <div className='settings-list-item'><input type="checkbox" className='settings-checkbox'/>Display the main product in popup</div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Design Options</h3> 
                <p className='settings-subtitle'>Box style</p>
                <DropdownTemplate options={PopupBoxStyleDropdownOptions} /> 
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='settings-title'>Text / Language Localization</h3>
                <form className='popup-settings__form'>
                    {popupContentFormData.map((item, i) =>
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

export default PopupSettings;