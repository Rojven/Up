import { useMemo, useState, FC } from 'react';

import { PageTemplate, AddonsTable } from '../../components';

import './Addons.scss';

const Addons = () => {

    const [isTableDataFetched, setIsTableDataFetched] = useState(true);

    const addonsTableData = useMemo(
        () => [
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 1', placement: 'cart page, popup', for: 'product 1', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 2', placement: 'product page, cart page', for: 'product 2', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 3', placement: 'product page', for: 'product 3', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 4', placement: 'cart page', for: 'product 4', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 5', placement: 'product page', for: 'product 5', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 6', placement: 'product page', for: 'product 6', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 7', placement: 'product page, popup', for: 'product 7', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 8', placement: 'product page, popup', for: 'product 8', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 9', placement: 'cart page', for: 'product 9', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 10', placement: 'cart page', for: 'product 10', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 11', placement: 'product page', for: 'product 11', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 12', placement: 'product page', for: 'product 12', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 13', placement: 'product page', for: 'product 13', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 14', placement: 'product page', for: 'product 14', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 15', placement: 'product page, cart page', for: 'product 15', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 16', placement: 'product page', for: 'product 16', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 17', placement: 'popup', for: 'product 17', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 18', placement: 'product page', for: 'product 18', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 19', placement: 'product page, cart page', for: 'product 19', status: 'active'},
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 20', placement: 'product page', for: 'product 20', status: 'active'},
        ],
        []
    )

    const columns = useMemo(
        () => [
                {   Header: 'Product', 
                    Cell: tableProps  => (
                    <div className='table__product-box'>
                        <img src={tableProps.row.original.productImg} alt='#'className='table__product-img'/>
                        {tableProps.row.original.product}
                    </div>
                )},
                {
                    Header: 'Placement',
                    accessor: 'placement',
                },
                {
                    Header: 'Main product',
                    accessor: 'for',
                },
                {
                    Header: 'Status',
                    Cell: tableProps  => (
                        <div className='section__upsell'>
                            {tableProps.row.original.status}
                        </div>
                )}
            ],
        []
      );

    

    return (
        <PageTemplate sectionClassName='section_addons addons'>
            {isTableDataFetched 
                ? ( 
                    <AddonsTable data={addonsTableData} columns={columns}/>  
                )
                : (
                    {/* <div className='addons__table-placeholder'>
                        <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?t=st=1650539630~exp=1650540230~hmac=64f1be6c67697989c24f571adde1f90f9ae35e33156fcb6b9107545d31480a60&w=1380" alt="" className='addons__table-img'/>
                        <h3>Add your first add-on</h3>
                    </div> */}
                )
            } 
        </PageTemplate>   
    )
}

export default Addons;