import { FC } from 'react';

import TabsTemplate from '../../components/TabsTemplate/TabsTemplate';

import './Addons.scss';

const addonsSelectorData = [
    {text: 'On-Page Add-ons'},
    {text: 'Popup Add-ons'}
]


const Addons: FC = () => {

    return (
        <section className='addons'>
            <TabsTemplate clazz='notification__tabs' tabsList={addonsSelectorData}>gg</TabsTemplate>
            {/* <div className='addons__selector'>
                {addonsSelectorData.map((tab, i) => 
                    <div 
                        key={i}
                        className={tab.state ? 'addons__tab addons__tab_active' : 'addons__tab'}
                        onClick={stateToggler}
                    >
                        {tab.text}
                    </div>
                )}
            </div> */}
            {/* <div className='addons__content'>

            </div> */}
        </section>
    )
}

export default Addons;