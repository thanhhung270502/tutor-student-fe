import React, { useState, useEffect } from 'react'
import className from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './userAccounts.module.scss'
import Row from './Row'
import { Table } from 'react-bootstrap'
import data from './ClassList.json'

const cx = className.bind(style);

const UserAccounts = () => {
    const [classInfo, setClassInfo] = useState([]);

    const [show, setShow] = useState(false);

    useEffect(() => {
        /* use api / wait until data is updated
        async () => {
            info = await getClassInfo();
            setClassInfo(info);
        } */
        setCurrentClassInfo(data);
        setClassInfo(data);
        setRole(data);
        setClassClassInfo(data);
    }, []);

    const [c, setC] = useState(0);
    const [order, setOrder] = useState("ASC");
    const sorting = (col) => {
        if(order == "ASC") {
            const sorted = [...currentClassInfo].sort((a, b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setCurrentClassInfo(sorted);
            setOrder("DSC");
            setC(col);
        }
        if(order == "DSC") {
            const sorted = [...currentClassInfo].sort((a, b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setCurrentClassInfo(sorted);
            setOrder("ASC");
            setC(0);
        }
    }

    const [subjectClassInfo, setRole] = useState([]);
    const [classClassInfo, setClassClassInfo] = useState([]);
    const [currentClassInfo, setCurrentClassInfo] = useState([]);
    // 0: default, 1: filter subject, 2: filter class, 3: filter both
    const [number, setNumber] = useState(0);

    const [grade, setGrade] = useState('all');
    const [subject, setSubject] = useState('all');

    const handleFilteredSubject = (e) => {
        console.log(number);
        const selected = e.target.value;
        // const res = selected === "all" ? data : currentClassInfo.filter((c) => c.subject === selected);
        let res = classInfo;
        if (number === 0 || number === 1) {
            res =
                selected === 'all'
                    ? data
                    : selected === 'Khác'
                    ? data.filter(
                          (c) =>
                              c.subject !== 'Gia Sư' &&
                              c.subject !== 'Quản lí chuyên môn' &&
                              c.subject !== 'Phụ huynh / Học sinh',
                      )
                    : data.filter((c) => c.role === selected);
            setNumber(1);
            setRole(res);
        }
        setCurrentClassInfo(res);
        // setSubject(selected);
    };

    return (
        <div className={cx('container')}>
            <h4 className={style.header}>Danh sách tài khoản người dùng</h4>
            <Table className={`table table-borderless ${style.table}`}>
                {/* <div className={cx('wrapper')}> */}
                    <thead className={style.theader}>
                        <tr>
                            <th className={`col-md-2 ${clsx(style.th, style.center)}`} onClick={()=>sorting("name")}>HỌ TÊN
                                <span className={`col-md-2 ${clsx(style.column)}`}>
                                    {c == "name" ? '▲' : '▼'}
                                </span>
                            </th>
                            <th className={`col-md-3 ${clsx(style.th, style.center)}`} onClick={()=>sorting("accountCreatedate")}>NGÀY ĐĂNG KÝ
                                <span className={`col-md-2 ${clsx(style.column)}`}>
                                    {c == "accountCreatedate" ? '▲' : '▼'}
                                </span>
                            </th>
                            <th className={`col-md-1 ${clsx(style.th, style.center)}`} >QUYỀN
                                <span className={`col-md-2 ${clsx(style.column)}`}>
                                    <select
                                            id="role"
                                            className={style.option}
                                            onChange={(e) => {
                                            handleFilteredSubject(e);}}
                                            >
                                        <option value="all">TẤT CẢ</option>
                                        <option value="Gia Sư">GIA SƯ</option>
                                        <option value="Quản lí chuyên môn">QUẢN LÍ</option>
                                        <option value="Phụ huynh / Học sinh">HỌC VIÊN</option>
                                    </select>
                                </span>
                            </th>
                            <th className={`col-md-2 ${clsx(style.th, style.center)}`}>QUẢN LÝ TÀI KHOẢN</th>
                            {}
                        </tr>
                    </thead>
                    <tbody className={style.column}>
                        {
                            currentClassInfo.map(
                                (c, index) => (
                                    <Row key={index} data={currentClassInfo[index]} c={c} />
                            ))
                        }
                    </tbody>
                {/* </div> */}
            </Table>
        </div>
    );
}

export default UserAccounts