import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from '../../components/GlobalStyles/table.module.scss'
import { Button, Table } from 'react-bootstrap'
import data from './ClassList.json'

import Row from './Row'

const PaymentList = () => {
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
        <div className={`container`}>
            <h4 className={style.header}>Danh sách lớp thanh toán</h4>
            <Table className={`${clsx(style.table)}`}>
                <thead>
                    <tr>
                        <th>MÃ LỚP</th>
                        <th>MÔN</th>
                        <th>LỚP</th>
                        <th>NGÀY ĐĂNG KÝ</th>
                        <th>SỐ TIỀN THANH TOÁN</th>
                        <th></th>
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

export default PaymentList