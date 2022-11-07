import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './ClassList.module.css'
import { Table } from 'react-bootstrap'
import data from './ClassList.json'

const ClassList = () => {
    const [classInfo, setClassInfo] = useState([]);

    useEffect(() => {
        /* use api
        async () => {
            info = await getClassInfo();
            setClassInfo(info);
        } */

        setClassInfo(data);
    }, []);

    return (
        <React.Fragment>
            <h4 className={style.header}>Danh sách lớp đang tìm Gia sư</h4>
            <table className={`table table-borderless ${style.table}`}>
                <thead className={style.theader}>
                    <tr>
                        <th className={`col-md-2 ${style.th}`}>MÃ LỚP</th>
                        <th className={`col-md-2 ${style.th}`}>MÔN</th>
                        <th className={`col-md-2 ${clsx(style.th, style.center)}`}>LỚP</th>
                        <th className={`col-md-3 ${style.th}`}>NGÀY ĐĂNG KÝ</th>
                        <th className={`col-md-3 ${style.th}`}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classInfo.map(
                            (c, index) =>
                                <tr key={index} className={style.tr}>
                                    <td className={`col-md-2 ${clsx(style.td)}`}>{c.classID}</td>
                                    <td className={`col-md-2 ${clsx(style.td)}`}>{c.subject}</td>
                                    <td className={`col-md-2 ${clsx(style.td, style.center)}`}>{c.grade}</td>
                                    <td className={`col-md-3 ${clsx(style.td)}`}>{c.date}</td>
                                    <td className={`col-md-3 ${clsx(style.td)}`}></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default ClassList