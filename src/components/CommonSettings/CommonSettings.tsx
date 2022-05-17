import { FC, useMemo } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

import { PageTemplate, DropdownTemplate, PlatesTemplate } from '../../components';

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

    const generalFormData = useMemo(
        () => [
            {title: 'Link product title', inputName: 'producttitle-check'},
            {title: "Show '(See Details)' link", inputName: 'seedetails-check'},
            {title: 'Show border', inputName: 'showborder-check'}
        ],
        []
    )

    const borderData = useMemo(
        () => [
            {inputName: 'borderThickness', inputType: 'number', inputLabel: 'Thickness'},
            {inputName: 'borderColor', inputType: 'color', inputLabel: 'Set Border color'},
        ],
        []
    )

    const thumbnailData = useMemo(
        () => [
            {sizeLabel: "Width (pixels)", inputName: 'img-widht'},
            {sizeLabel: "Height (pixels)", inputName: 'img-height'}
        ],
        []
    )

    const fontsData = useMemo(
        () => [
            {formLabel: 'Header text', inputName: 'header-size',},
            {formLabel: 'Product title', inputName: 'product-size'},
            {formLabel: 'Description', inputName: 'descr-size'}
        ],
        []
    )
    const fontsFormData = useMemo(
        () => [
            {inputType: 'number', inputLabel: 'Font size'},
            {inputType: 'color', inputLabel: 'Set Font color'},
        ],
        []
    )

    const addToCartData = useMemo(
        () => [
            {sizeLabel: "Width (pixels)", inputName: 'button-widht'},
            {sizeLabel: "Height (pixels)", inputName: 'button-height'},
            {sizeLabel: "Font size", inputName: 'button-size'},
        ],
        []
    )

    const addToCartTwoData = useMemo(
        () => [
            {sizeLabel: "Padding top (pixels)", inputName: 'padding-top'},
            {sizeLabel: "Padding right (pixels)", inputName: 'padding-right'},
            {sizeLabel: "Padding bottom (pixels)", inputName: 'padding-bottom'},
            {sizeLabel: "Padding left (pixels)", inputName: 'padding-left'},
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
                <h3 className='section__title'>Design Options</h3>
                <div className='settings__form'>
                    <div>
                        <p className='settings__label'>General</p>
                        <form className='settings__form settings__form_checkitem'>
                            {generalFormData.map((item, i) => 
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
                    <div>
                        <p className='settings__label'>Add-On type</p>
                        <DropdownTemplate options={addonTypeDropdownOptions} />
                    </div>
                    <div>
                        <p className='settings__label'>Layout variant</p>
                        <DropdownTemplate options={layoutVariantDropdownOptions} />
                    </div>
                    <div>
                        <p className='settings__label'>Border</p>
                        <form className='settings__size-form'>
                            {borderData.map((block, i) => 
                                <div key={i}>
                                    <label htmlFor={block.inputName} className='settings__label'>{block.inputLabel}</label>
                                    <div className='settings__size-form-wrapper'>
                                        <input type={block.inputType} name={block.inputName} className='input'/>
                                    </div>
                                </div>
                            )}          
                        </form>
                    </div>   
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Image options</h3>
                <div className='settings__form'>
                    <form className='settings__form settings__form_checkitem'>
                        <div>
                            <div className='settings__checkitem'>
                                <input 
                                    type="checkbox" 
                                    name='thumbnailSettings'
                                    className='checkbox'
                                />
                                Use Shopify's generated Thumbnail Image
                            </div>
                            <p className='section__subtext'>App will use large product image and set a default height of 50px, use this option to change the source of image instead to the thumbnail image</p>
                        </div> 
                    </form>
                    <div>
                        <p className='settings__label'>Thumbnail Image size</p>
                        <form className='settings__size-form'>
                            {thumbnailData.map((block, i) => 
                                <div key={i}>
                                    <label htmlFor={block.inputName} className='settings__label'>{block.sizeLabel}</label>
                                    <div className='settings__size-form-wrapper'>
                                        <input type='number' name={block.inputName} className='input'/>
                                    </div>
                                </div>
                            )}          
                        </form>
                    </div>
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Fonts</h3>
                <div className='settings__form'>
                    {fontsData.map((block, i) => 
                        <div key={i}>
                            <p className='settings__label'>{block.formLabel}</p>
                            <form className='settings__size-form'>
                                {fontsFormData.map((item, i) =>
                                    <div key={i}>
                                        <label htmlFor={block.inputName} className='settings__label'>{item.inputLabel}</label>
                                        <div className='settings__size-form-wrapper'>
                                            <input type={item.inputType} name={block.inputName} className='input'/>
                                        </div>
                                    </div>
                                )} 
                            </form>
                        </div>  
                    )} 
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Add to cart button</h3>
                <div className='settings__form'>
                    <div>
                        <form className='settings__size-form'>
                            {addToCartData.map((block, i) => 
                                <div key={i}>
                                    <label htmlFor={block.inputName} className='settings__label'>{block.sizeLabel}</label>
                                    <div className='settings__size-form-wrapper'>
                                        <input type='number' name={block.inputName} className='input'/>
                                    </div>
                                </div>
                            )}          
                        </form>
                    </div>
                    <div>
                        <form className='settings__size-form'>
                            {addToCartTwoData.map((block, i) => 
                                <div key={i}>
                                    <label htmlFor={block.inputName} className='settings__label'>{block.sizeLabel}</label>
                                    <div className='settings__size-form-wrapper'>
                                        <input type='number' name={block.inputName} className='input'/>
                                    </div>
                                </div>
                            )}          
                        </form>
                    </div>
                    <div className='settings__info'><IoAlertCircleSharp className='icon icon_info'/> <p>App will use styles of your existing "Add to cart" button on product page and "Checkout" button on the cart page. However, you can specify additional settings using below options</p></div>
                </div>
            </PlatesTemplate>
            <PlatesTemplate>
                <h3 className='section__title'>Advanced Styling</h3>
                <form className='settings__form'>
                    <div>
                        <label htmlFor='customCSS' className='settings__label'>Custom CSS</label>
                        <textarea className='input input_textarea' name='customCSS'/>
                    </div>
                </form>
            </PlatesTemplate>
        </PageTemplate>
    )
}

export default CommonSettings;