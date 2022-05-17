import React from 'react';
import { useTable, usePagination, useRowSelect, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineSortAscending, AiOutlineSortDescending, AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TiArrowUnsorted } from 'react-icons/ti';
import { matchSorter } from 'match-sorter';

import { PlatesTemplate } from '../../components';

import './AddonsTable.scss';

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className="addons__upper">
        <div className='addons__search'>
            <input 
                type="text" 
                className='input input_light'
                placeholder='type to search...'
                value={value || ""}
                onChange={e => {
                  setValue(e.target.value);
                  onChange(e.target.value);
                }}
            />
            <AiOutlineSearch className='icon icon_search'/>
        </div>
        <button className='button'>New Add-On</button>
    </div>
  )
}

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} className='checkbox'/>
        </>
      )
    }
)

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

export default function AddonsTable({ columns, data }) {

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div className='icon'>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} title='Select all' />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div className='icon'>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} title='Select' />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={data.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <PlatesTemplate>
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
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} title='Sort'>
                      <div className='table__product-box'>
                        {column.render('Header')}
                        {column.Header[0] && <TiArrowUnsorted className='icon icon_sortable'/>}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody 
              className='table__tbody'
              {...getTableBodyProps()}
            >
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr 
                    key={i}
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
        <div className="table__pagination">
          <div>
            <button className='button' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <AiOutlineDoubleLeft className='icon'/>
            </button>
            <button className='button' onClick={() => previousPage()} disabled={!canPreviousPage}>
              <IoIosArrowBack className='icon'/>
            </button>
            <button className='button' onClick={() => nextPage()} disabled={!canNextPage}>
              <IoIosArrowForward className='icon'/>
            </button>
            <button className='button' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              <AiOutlineDoubleRight className='icon'/>
            </button>
          </div>
          <div>
            <span>
              Page {pageIndex + 1} of {pageOptions.length}
            </span>
            <span>
              | Go to page:{' '}
              <input
                className='input input_table'
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
              />
            </span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </PlatesTemplate>
    </>
  )
}
