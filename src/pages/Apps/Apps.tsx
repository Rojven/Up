import { FC, useMemo } from 'react';

import { PageTemplate, PlatesTemplate } from '../../components';

import './Apps.scss';


const Apps: FC = () => {

    const appsPageData = useMemo(
        () => [
            {imgLink: 'https://img.freepik.com/free-vector/flat-people-holding-euro-dollar-coins-currency-exchange_88138-568.jpg?t=st=1651049887~exp=1651050487~hmac=f35caaa3aad4fe0a909fbc572fc34804e5f8d2948c607556f6585f71dede32b2&w=1380', appTitle: 'App 1', appDescr: ''},
            {imgLink: 'https://img.freepik.com/free-vector/happy-rich-banker-celebrating-income-growth_74855-5867.jpg?t=st=1651039661~exp=1651040261~hmac=546bbc8c47c6b736da0bb0493e58c947452f370d1508c96e2e87a2cfa1fed674&w=1380', appTitle: 'App 2', appDescr: ''},
            {imgLink: 'https://img.freepik.com/free-vector/mobile-application-development-programming-languages-css-html-it-ui-male-programmer-cartoon-character-developing-website-coding_335657-2367.jpg?w=826', appTitle: 'App 3', appDescr: ''}
        ],
        []
    )

    return (
        <PageTemplate
            title='Apps'
            subtitle='Try out our new apps right over here'
            contentClassName='section__content_apps apps'
        >
            {appsPageData.map((app, i) =>
                <PlatesTemplate 
                    plateClass='plate_apps'
                    key={i}
                >
                    <div className='apps__img-box'>
                        <img 
                            src={app.imgLink}
                            alt=""
                            className='apps__img'
                        />
                    </div>
                    <h3 className='apps__title'>{app.appTitle}</h3>
                    <p className='apps__descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere repudiandae perferendis eos. Soluta, totam? Nostrum minima odit officiis doloremque ullam, evenie!</p>
                    <button className='button'>Get started</button>
            </PlatesTemplate>
            )}
        </PageTemplate> 
    )
}

export default Apps;