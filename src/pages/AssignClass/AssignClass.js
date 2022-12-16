import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from '../../components/GlobalStyles/table.module.scss'
import Row from './Row'
import { Table } from 'react-bootstrap'
import data from './ClassList.json'

const PendingClass = () => {
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
            <h4 className={style.header}>Danh sách lớp chờ duyệt</h4>
            <Table className={`table table-borderless ${style.table}`}>
                <thead className={style.theader}>
                    <th className={`col-md-2 ${style.th}`}>MÃ LỚP</th>
                    <th className={`col-md-2 ${style.th}`}>MÔN</th>
                    <th className={`col-md-1 ${clsx(style.th, style.center)}`}>LỚP</th>
                    <th className={`col-md-3 ${style.th}`}>NGÀY ĐĂNG KÝ</th>
                    <th className={`col-md-2 ${style.th}`}></th>
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

export default PendingClass