import React, { useState, useEffect } from 'react'
import className from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './PaymentStatus.module.scss'
import Row from './Row'
import { Table } from 'react-bootstrap'
import data from './ClassList.json'

const cx = className.bind(style);

const PaymentStatus = () => {
    const [classInfo, setClassInfo] = useState([]);

    const [show, setShow] = useState(false);

    useEffect(() => {
        /* use api / wait until data is updated
        async () => {
            info = await getClassInfo();
            setClassInfo(info);
        } */

        setClassInfo(data);
    }, []);

    const [c, setC] = useState(0);
    const [order, setOrder] = useState("ASC");
    const sorting = (col) => {
        if(order == "ASC") {
            const sorted = [...classInfo].sort((a, b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setClassInfo(sorted);
            setOrder("DSC");
            setC(col);
        }
        if(order == "DSC") {
            const sorted = [...classInfo].sort((a, b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setClassInfo(sorted);
            setOrder("ASC");
            setC(0);
        }
    }

    return (
        <div className={cx('container')}>
            <h4 className={style.header}>Tình trạng thanh toán lớp</h4>
            <Table className={`table table-borderless ${style.table}`}>
                <thead className={style.theader}>
                    <tr>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`} onClick={()=>sorting("classID")}>MÃ LỚP
                            <span className={`col-md-2 ${clsx(style.column)}`}>
                                {c == "classID" ? '▲' : '▼'}
                            </span>
                        </th>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`} onClick={()=>sorting("subject")}>MÔN
                            <span className={`col-md-2 ${clsx(style.column)}`}>
                                {c == "subject" ? '▲' : '▼'}
                            </span>
                        </th>
                        <th className={`col-md-1 ${clsx(style.th, style.center)}`} onClick={()=>sorting("grade")}>LỚP
                            <span className={`col-md-2 ${clsx(style.column)}`}>
                                {c == "grade" ? '▲' : '▼'}
                            </span>
                        </th>
                        <th className={`col-md-3 ${clsx(style.th, style.center)}`} onClick={()=>sorting("date")}>NGÀY ĐĂNG KÝ
                            <span className={`col-md-2 ${clsx(style.column)}`}>
                                {c == "date" ? '▲' : '▼'}
                            </span>
                        </th>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`} onClick={()=>sorting("name")}>TÌNH TRẠNG THANH TOÁN</th>
                        {/*<th className={`col-md-2 ${style.th}`}></th>*/}
                    </tr>
                </thead>
                <tbody>
                    {
                        classInfo.map(
                            (c, index) => <Row key={index} data={classInfo[index]} c={c} />
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default PaymentStatus