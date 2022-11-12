import className from 'classnames/bind'
import styles from './table.module.scss'
import React, {Children, useMemo} from 'react';
import { useState, useEffect } from 'react';
import { useTable } from 'react';
import Data from './data.json';
import { Columns } from './column';
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
            <p className={cx("title")}>Lớp đã tạo</p>
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
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row => (
                            prepareRow(row),
                            <React.Fragment key={row.id}>
                                <tr {...row.getRowProps()}
                                style={{ textAlign:'center' }}
                                onClick={() => showFullInfo(row.original.no)}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                                {detail.includes(row.original.no) && (
                                <tr className={cx('additionalInfo')}>
                                    <td style={{ textAlign: 'left' }} colSpan={row.cells.length}>
                                        {text[0]}<br/>
                                        {text[1]}<br/>
                                        {text[2]}<br/>
                                        {text[3]}<br/>
                                        {text[4]}<br/>
                                        {text[5]}<br/>
                                        {text[6]}<br/>
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