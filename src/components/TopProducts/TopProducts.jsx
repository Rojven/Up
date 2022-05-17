import { FC, useMemo } from 'react';
import { useTable } from 'react-table';
import { IoIosArrowRoundUp } from 'react-icons/io';

import { PlatesTemplate } from '../../components';

const TopProducts = () => {

    const data = useMemo(
        () => [
            {id: 1, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg', product: 'Item 1', sales: '45%', smth: 'smth'},
            {id: 2, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg',product: 'Item 2', sales: '30%', smth: 'smth'},
            {id: 3, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg',product: 'Item 3', sales: '18%', smth: 'smth'},
            {id: 4, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg',product: 'Item 4', sales: '15%', smth: 'smth'},
            {id: 5, productImg: 'https://www.sunhome.ru/i/wallpapers/255/alberta-kanada.1920x1200.jpg',product: 'Item 5', sales: '10%', smth: 'smth'},
        ],
        []
    )

    const columns = useMemo(
        () => [
                {
                    Header: '#',
                    accessor: 'id',
                },
                {
                    Header: 'Product',
                    Cell: tableProps  => (
                    <div className='table__product-box'>
                        <img src={tableProps.row.original.productImg} alt='#'className='table__product-img'/>
                        {tableProps.row.original.product}
                    </div>
                )},
                {
                    Header: 'Sales',
                    Cell: tableProps  => (
                        <div className='section__upsell'>
                            <IoIosArrowRoundUp className='icon icon_info'/>
                            {tableProps.row.original.sales}
                        </div>
                )},
                {
                    Header: 'Smth',
                    accessor: 'smth',
                }
            ],
        []
      );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <PlatesTemplate>
            <div className='section__flex section__flex_mb'>
                <h2 className='section__title'>Top Products</h2>
                <button className='button'>All products</button>
            </div>
            <div className='table-wrapper'>
                <table
                    className='table'  
                    {...getTableProps()}
                >
                    <thead className='table__thead'>
                        {headerGroups.map(headerGroup => (
                        <tr 
                            className='table__row'
                            {...headerGroup.getHeaderGroupProps()}
                        >
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody 
                        className='table__tbody'
                        {...getTableBodyProps()}
                    >
                        {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr 
                                className='table__row'
                                {...row.getRowProps()}
                            >
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        </PlatesTemplate>
    )
}

export default TopProducts;