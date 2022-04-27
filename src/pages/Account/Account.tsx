import { FC, useMemo } from 'react';
import { BsCheck } from 'react-icons/bs';

import PlatesTemplate from '../../components/PlatesTemplate/PlatesTemplate';

import './Account.scss';

const Account: FC = () => {

    const accountPlatesData = useMemo(
        () => [
            {title: 'Lite', price: 'Free', underprice: 'with restrictions', listTitle: 'Plan incudes:', button: <p className='account__plans-active'>Active</p>, class: null},
            {title: 'Pro', price: '11.99$', underprice: 'monthly', listTitle: 'All of Lite plus:', button: <button className='button button_light'>Start 7 days Trial</button>, class: 'account__plans-header_pro'}
        ],
        []
    )

    const platesListData = useMemo(
        () => [
            {text: 'loremloremlorem lorem lortytem'},
            {text: 'loremlor emkklorem lorem loremyyy'},
            {text: 'lore mloreml orjhkem loremyyyy lorem'},
            {text: 'lor emloremlo re5y5ym lorem lorem'}
        ],
        []
    )

    return (
        <section className='account'>
            <div className='account__profile'>
                <h3>Your account</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <h3>Billing and usage charges</h3>
                <p>US$11.99 USD every 30 days, next charge on Date</p>
            </div>
            <div className='account__plans'>
                <h3 className='section-title'>Start your <br /> <span>Pro</span> plan now</h3>
                <div className='account__plans-wrapper'>
                    {accountPlatesData.map((plate, i) => 
                        <PlatesTemplate 
                        key={i}
                        plateClass='plate_account'
                    >   
                        <div className={`account__plans-header ${plate.class}`}>
                            <div>
                                <h3>{plate.title}</h3>
                                <div className='account__plans-divider'></div>
                            </div>
                            <div>
                                <h4>{plate.price}</h4>
                                <p>{plate.underprice}</p>
                            </div>
                        </div>
                        <p className='account__plans-list-header'>{plate.listTitle}</p>
                        <ul className='account__plans-list'>
                            {platesListData.map((item, i) => 
                                <li 
                                    key={i}
                                    className='account__plans-list-item'
                                >
                                    <BsCheck className='account__plans-list-icon'/> 
                                    {item.text}
                                </li>
                            )}
                        </ul>
                        <div className='account__plans-footer'>
                            <p>View all the features</p>
                            {plate.button}
                        </div>
                    </PlatesTemplate>
                    )}
                </div>
            </div>
             
        </section>
    )
}

export default Account;