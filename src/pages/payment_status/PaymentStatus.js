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

    return (
        <div className={cx('container')}>
            <h4 className={style.header}>Tình trạng thanh toán lớp</h4>
            <Table className={`table table-borderless ${style.table}`}>
                <thead className={style.theader}>
                    <tr>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`}>MÃ LỚP</th>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`}>MÔN</th>
                        <th className={`col-md-1 ${clsx(style.th, style.center)}`}>LỚP</th>
                        <th className={`col-md-3 ${clsx(style.th, style.center)}`}>NGÀY ĐĂNG KÝ</th>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`}>TÌNH TRẠNG THANH TOÁN</th>
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