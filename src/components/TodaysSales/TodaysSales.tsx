import { FC } from 'react';
import { MdPointOfSale } from 'react-icons/md';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import PlatesTemplate from '../PlatesTemplate/PlatesTemplate';

import './TodaysSales.scss';

const todaysSalesData = [
    {class: 'todays__item_one', title: '', subtitle: '', compare: '', icon: <MdPointOfSale/>},
    {class: 'todays__item_two', title: '', subtitle: '', compare: '', icon: <AiOutlineShoppingCart/>},
    {class: 'todays__item_three', title: '', subtitle: '', compare: '', icon: <BiPurchaseTagAlt/>}
]

const TodaysSales: FC = () => {
    return (
        <PlatesTemplate title="Today's Sales">
            <ul className='todays'>
                {todaysSalesData.map((todaysItem, i) =>
                    <li 
                        key={i}
                        className={`todays__item ${todaysItem.class}`}
                    >
                        <div className='todays__icon-box'>
                            {todaysItem.icon}
                        </div>
                        <h4 className='todays__title'>{todaysItem.title}</h4>
                        <p className='todays__subtitle'>{todaysItem.subtitle}</p>
                        <p>{todaysItem.compare}</p>
                    </li>
                )}
            </ul>
        </PlatesTemplate>
    )
}

export default TodaysSales;