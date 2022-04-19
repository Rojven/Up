import { FC } from 'react';

import PlatesTemplate from '../../components/PlatesTemplate/PlatesTemplate';

import './Account.scss';

const Account: FC = () => {
    return (
        <section className='account'> 
            <div className='account__wrapper'>
            <PlatesTemplate title='Upsell Free'>

            </PlatesTemplate>
            </div>
            <div className='account__wrapper'>
                <PlatesTemplate title='Upsell Pro'>

                </PlatesTemplate>
            </div>
        </section>
    )
}

export default Account;