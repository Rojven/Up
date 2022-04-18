import { FC } from 'react';

import PlatesTemplate from '../../components/PlatesTemplate/PlatesTemplate';

import './Help.scss';

const Help: FC = () => {
    return (
        <section className='help'>
            <PlatesTemplate title='Support'>

            </PlatesTemplate>
            <h3>Find out more</h3>
            <PlatesTemplate title='More'>

            </PlatesTemplate>
            <h3>Tips</h3>
            <div className='help__tips'>
            <PlatesTemplate title='Tip 1'>

            </PlatesTemplate>
            <PlatesTemplate title='Tip 2'>

            </PlatesTemplate>
            <PlatesTemplate title='Tip 3'>

            </PlatesTemplate>
            <PlatesTemplate title='Tip 4'>

            </PlatesTemplate>
            <PlatesTemplate title='Tip 5'>

            </PlatesTemplate>
            <PlatesTemplate title='Tip 6'>

            </PlatesTemplate>
            </div>
        </section>
    )
}

export default Help;