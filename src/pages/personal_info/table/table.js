import className from 'classnames/bind'
import styles from './table.module.scss'
import React, {Children, useContext, useMemo} from 'react';
import { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Data from './data.json';
import { Columns } from './column';
import { AppContext } from 'src/store/appContext';
import { getDefaultNormalizer } from '@testing-library/react';

const cx = className.bind(styles);

let text = ['Thời gian: thứ 3, thứ 5 hàng tuần, 19h-20h30',
    'Độ dài: 22/3/2022 đến 22/12/2022',
    'Hình thức: offline',
    'Địa chỉ:',
    'SĐT: 090812345',
    'Lương: 3.000.000 vnđ',
    'Yêu cầu: không']

function Table() {
    
    const context = useContext(AppContext);

    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => Data, []);

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    const [dt, setDt] = useState([]);
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        getDaTa();
    }, [])

    async function getDaTa() {
        setDt(data);
    }

    const showFullInfo = no => {
        const showState = detail.slice();
        const index = detail.indexOf(no);

        if(index >= 0) {
            showState.splice(index, 1);
            setDetail(showState);
        }
        else {
            showState.push(no);
            setDetail(showState);
        }
    }

    return (
        <aside className={cx('wrapper')}>
            {/* <p className={cx("title")}>Lớp đã tạo</p> */}
            <aside className={cx('table')}>
                <table {...getTableProps()}>
                    <thead className={cx('header')}>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className={cx('body')}{...getTableBodyProps()}>
                        {rows.map((row => (
                            prepareRow(row),
                            <React.Fragment key={row.id}>
                                <tr {...row.getRowProps()}
                                style={{ textAlign:'center', 'padding': '1rem 0' }}
                                onClick={() => showFullInfo(row.original.no)}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                                {detail.includes(row.original.no) && (
                                <tr className={cx('additionalInfo')}>
                                    <td style={{ textAlign: 'left' }} colSpan={row.cells.length}>
                                        <p style={{marginLeft: '1.5rem', fontSize: '12px', 'line-height': '25px', 'margin-top': '0.25rem'}}>
                                            <i className={`fa-regular fa-clock`}></i> {text[0]}<br/>
                                            <i className={`fi fi-rr-calendar`}></i> {text[1]}<br/>
                                            <i className={`fi fi-rr-users`}></i> {text[2]}<br/>
                                            <i className={`fi fi-rr-home`}></i> {text[3]}<br/>
                                            <i className={`fi fi-rr-phone-call`}></i> {text[4]}<br/>
                                            <i className={`fi fi-rr-credit-card`}></i> {text[5]}<br/>
                                            <i className={`fi fi-rr-info`}></i> {text[6]}<br/>
                                        </p>
                                        {context.role == "NguoiCanTimGiaSu" ? <nav className={cx('changeClassInfo')}><a href="/editclass" className='btn btn-warning' style={{'padding': '6px 20px', 'border-radius': '100px', 'margin-bottom': '0.5rem', 'font-size': '0.8rem'}}>Sửa</a></nav> : ''}
                                    </td>
                                </tr>)}
                            </React.Fragment>
                        )))}
                            {/*
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} onClick={() => showFullInfo(row.id)}>
                                    {row.cells.map((cell) =>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}*/}
                    </tbody>
                </table>
            </aside>
        </aside>
    )
}

export default Table;