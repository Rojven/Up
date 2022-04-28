import { FC, useMemo, useState } from 'react';
import { TabPanel } from 'react-tabs';
import { AiOutlineSearch} from 'react-icons/ai';
import { CgSortAz } from 'react-icons/cg';
import { MdArrowForwardIos } from 'react-icons/md';

import { IAddonsTableContentItem } from '../../types/types';
import ListTemplate from '../../components/ListTemplate/ListTemplate';
import { PageTemplate, TabsTemplate, PlatesTemplate, AddonsListItem } from '../../components';

import './Addons.scss';

const Addons: FC = () => {

    const [isTableDataFetched, setIsTableDataFetched] = useState<boolean>(true);

    const addonsFirstTabsData = useMemo(
        () => [
            {text: 'On-Page'},
            {text: 'Popup'}
        ],
        []
    )
    
    const addonsSecondTabsData = useMemo(
        () => [
            {text: 'Product', btnText: 'Select Product'},
            {text: 'Collection', btnText: 'Select Collection'},
            {text: 'All Products', btnText: 'Add Add-On'}
        ],
        []
    )

    const addonsTableData = useMemo(
        () => [
            {title: 'Title 1'},
            {title: 'Title 2'}
        ],
        []
    )

    const addonsTableHeaderData = useMemo(
        () => [
            {title: <input type='checkbox'/>},
            {title: 'Item'},
            {title: 'Description'},
            {title: 'Discount'},
        ],
        []
    )

    const addonsTableContentData = useMemo(
        () => [
            {id: 1, title: 'Item 1', imgUrl: ''},
            {id: 2, title: 'Item 2', imgUrl: ''},
            {id: 3, title: 'Item 3', imgUrl: ''},
            {id: 4, title: 'Item 4', imgUrl: ''},
        ],
        []
    )

    return (
        <PageTemplate
            title='Add-Ons'
            subtitle='Manage your On-Page and Popup Add-Ons here'
            contentClassName='section__content_addons addons'
        >
            <TabsTemplate
                tabClass='tabs tabs_addons' 
                tabsList={addonsFirstTabsData}
            >
                {addonsFirstTabsData.map((tabFirst, i) => 
                    <TabPanel key={i}>
                        <TabsTemplate 
                            tabClass='tabs' 
                            tabsList={addonsSecondTabsData}
                            key={i}
                        >
                            {addonsSecondTabsData.map((tab, i) =>
                                <TabPanel key={i}>
                                    <div className='addons__content'>
                                        <PlatesTemplate>
                                            <h3 className='section__content-title section__content-title_addons'>{tabFirst.text}</h3>
                                            <div className='addons__search'>
                                                <input 
                                                    type="text" 
                                                    className='input'
                                                    placeholder='type to search...'
                                                />
                                                <AiOutlineSearch className='icon icon_search'/>
                                            </div>
                                            <div className='addons__upper'>
                                                <div className='addons__main'>
                                                    <img 
                                                        src="https://img.freepik.com/free-vector/market-research-studies-abstract-concept-vector-illustration-explore-new-market-segment-product-testing-customers-needs-research-brand-management-studies-paid-focus-group-abstract-metaphor_335657-2948.jpg?t=st=1650777588~exp=1650778188~hmac=97a11365bd8c3c59487765e2ba3801dcfde379278b70eaf5b17bc63f24d453a2&w=826" 
                                                        alt="main"
                                                        className='addons__main-img' 
                                                    />
                                                    <h3 className='section__content-title'>{tab.text} Title</h3>
                                                </div>
                                                <button className='button'>{tab.btnText}</button>
                                            </div>
                                            {isTableDataFetched 
                                                ? (
                                                    <div className='addons__table'>
                                                        <div className='section__content-title section__content-title_table'>
                                                            Add-Ons 
                                                            <CgSortAz className='icon'/>
                                                        </div>
                                                        <ul className='addons__table-header'>
                                                            {addonsTableHeaderData.map((item, i) => 
                                                                <li 
                                                                    key={i}
                                                                    className='addons__table-header-item'
                                                                >
                                                                    {item.title}
                                                                </li>
                                                            )}
                                                        </ul>
                                                        <ListTemplate
                                                            items={addonsTableContentData}
                                                            renderItems={(listItem: IAddonsTableContentItem) => 
                                                                <AddonsListItem 
                                                                    listItem={listItem} 
                                                                    key={listItem.id}
                                                                />
                                                            }
                                                        />   
                                                        <div>
                                                            <p>1-10 of 50</p>
                                                            <span><MdArrowForwardIos/></span>
                                                            <span><MdArrowForwardIos/></span>
                                                        </div>   
                                                    </div>
                                                )
                                                : (
                                                    {/* <div className='addons__table-placeholder'>
                                                        <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?t=st=1650539630~exp=1650540230~hmac=64f1be6c67697989c24f571adde1f90f9ae35e33156fcb6b9107545d31480a60&w=1380" alt="" className='addons__table-img'/>
                                                        <h3>Add your first add-on</h3>
                                                    </div> */}

                                                )
                                            }
                                        </PlatesTemplate>  
                                    </div>
                                </TabPanel>
                            )}
                        </TabsTemplate>
                    </TabPanel>
                )}
            </TabsTemplate>
        </PageTemplate>   
    )
}

export default Addons;