import { FC, useMemo } from 'react';
import { BsCheck } from 'react-icons/bs';

import { PageTemplate, PlatesTemplate } from '../../components';

import './Account.scss';

const Account: FC = () => {

    const accountPlatesData = useMemo(
        () => [
            {title: 'Lite', price: 'Free', underprice: 'with restrictions', listTitle: 'Plan incudes:', button: <p className='account__active'>Active</p>, class: null},
            {title: 'Pro', price: '11.99$', underprice: 'monthly', listTitle: 'All of Lite plus:', button: <button className='button button_light'>Start 7 days Trial</button>, class: 'account__header_pro'}
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
        <PageTemplate
            title='Account'
            subtitle='Start your Pro plan now'
            contentClassName='section__content_account account'
        > 
            {accountPlatesData.map((plate, i) => 
                <PlatesTemplate 
                    key={i}
                    plateClass='plate_account'
                >   
                    <div className={`account__header ${plate.class}`}>
                        <h3>{plate.title}</h3>
                        <div>
                            <h4>{plate.price}</h4>
                            <p>{plate.underprice}</p>
                        </div>
                    </div>
                    <h4>{plate.listTitle}</h4>
                    <ul className='account__list'>
                        {platesListData.map((item, i) => 
                            <li 
                                key={i}
                                className='account__list-item'
                            >
                                <BsCheck className='icon'/> 
                                {item.text}
                            </li>
                        )}
                    </ul>
                    <div className='account__footer'>
                        <p>View all the features</p>
                        {plate.button}
                    </div>
                </PlatesTemplate>
            )}       
        </PageTemplate>
    )
}

export default Account;