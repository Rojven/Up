import { FC } from 'react';
import { MdPointOfSale } from 'react-icons/md';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';

import './TodaysSales.scss';

const todaysSalesData = [
    {title: '$1k', subtitle: 'Total Sales', compare: '+5% from yesterday', icon: <MdPointOfSale className='icon'/>},
    {title: '50 items', subtitle: 'Total Order', compare: '+13% from yesterday', icon: <AiOutlineShoppingCart className='icon'/>},
    {title: '15 items', subtitle: 'Products Sold', compare: '+1% from yesterday', icon: <BiPurchaseTagAlt className='icon'/>}
]

const TodaysSales: FC = () => {
    return (
        <PlatesTemplate>
            <div className='section__flex'>
                <h2 className='section__title'>Today's sales</h2>
                <button className='button'>Details</button>
            </div>
            <ul className='todays'>
                {todaysSalesData.map((todaysItem, i) =>
                    <li 
                        key={i}
                        className='todays__item'
                    >
                        <div className='todays__icon-box'>
                            {todaysItem.icon}
                        </div>
                        <div className='todays__info'>
                            <h4 className='section__title'>{todaysItem.title}</h4>
                            <h4 className='section__subtitle'>{todaysItem.subtitle}</h4>
                            <p className='section__link'>{todaysItem.compare}</p>
                        </div>
                    </li>
                )}
            </ul>
        </PlatesTemplate>
    )
}

export default TodaysSales;