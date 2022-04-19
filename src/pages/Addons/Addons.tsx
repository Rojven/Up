import { FC, useMemo } from 'react';
import { TabPanel } from 'react-tabs';
import { AiOutlineSearch } from 'react-icons/ai';

import PlatesTemplate from '../../components/PlatesTemplate/PlatesTemplate';
import TabsTemplate from '../../components/TabsTemplate/TabsTemplate';
//import AddonsTable from '../../components/AddonsTable/AddonsTable';

import './Addons.scss';

const Addons: FC = () => {

    const addonsTabsData = useMemo(
        () => [
            {text: 'Product Add-Ons'},
            {text: 'Collection Add-Ons'},
            {text: 'All Products Add-Ons'}
        ],
        []
    )

    const addonsTemplatesData = useMemo(
        () => [
            {title: 'On-Page Add-Ons'},
            {title: 'Popup Add-Ons'}
        ],
        []
    )

    return (
        <section className='addons'>
            {addonsTemplatesData.map((template, i) => 
                <PlatesTemplate 
                    title={template.title} 
                    key={i}
                >
                    <TabsTemplate 
                        clazz='notification__tabs' 
                        tabsList={addonsTabsData}
                    >
                        {addonsTabsData.map((tab, i) =>
                            <TabPanel key={i}>
                                <div className='addons__content'>
                                    <div className='addons__search'>
                                        <input 
                                            type="text" 
                                            className='input'
                                            placeholder='type to search...'
                                        />
                                        <AiOutlineSearch/>
                                    </div>
                                    <button className='button'>Add Add-Ons</button>
                                    <h2>{tab.text}</h2>
                                    {/* <AddonsTable/> */}
                                </div>
                            </TabPanel>
                        )}
                    </TabsTemplate>
                </PlatesTemplate>
            )}
        </section>
    )
}

export default Addons;