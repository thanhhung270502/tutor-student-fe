import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './classList.module.css'
import { Table } from 'react-bootstrap'
import { usePagination } from 'react-use-pagination';
// import data from './ClassList.json';
import { getClassInfo } from '~/api/api'

import Row from './Row';

const ClassList = () => {
    const [data, setData] = useState([]);
    const [subjectClassInfo, setSubjectClassInfo] = useState([]);
    const [classClassInfo, setClassClassInfo] = useState([]);
    const [currentClassInfo, setCurrentClassInfo] = useState([]);
    // 0: default, 1: filter subject, 2: filter class, 3: filter both
    const [number, setNumber] = useState(0);

    useEffect(() => {
        (
            async () => {
                await getClassInfo().then((data) => {
                    setData(data);
                    setCurrentClassInfo(data);
                    setData(data);
                    setSubjectClassInfo(data);
                    setClassClassInfo(data);
                });
            }
        )()
    }, [])

    const handleFilteredSubject = (e) => {
        console.log(number);
        const selected = e.target.value;
        // const res = selected === "all" ? data : currentClassInfo.filter((c) => c.subject === selected);
        let res = data;
        if (number === 0 || number === 1) {
            res =
                selected === 'all'
                    ? data
                    : selected === 'Khác'
                        ? data.filter(
                            (c) =>
                                c.subject !== 'Toán' &&
                                c.subject !== 'Vật lý' &&
                                c.subject !== 'Hoá học' &&
                                c.subject !== 'Sinh học' &&
                                c.subject !== 'Anh văn' &&
                                c.subject !== 'Ngữ văn',
                        )
                        : data.filter((c) => c.subject === selected);
            setNumber(1);
            setSubjectClassInfo(res);
        } else if (number === 2 || number === 3) {
            let res_2 =
                selected === 'all'
                    ? data
                    : selected === 'Khác'
                        ? data.filter(
                            (c) =>
                                c.subject !== 'Toán' &&
                                c.subject !== 'Vật lý' &&
                                c.subject !== 'Hoá học' &&
                                c.subject !== 'Sinh học' &&
                                c.subject !== 'Anh văn' &&
                                c.subject !== 'Ngữ văn',
                        )
                        : data.filter((c) => c.subject === selected);

            res =
                selected === 'all'
                    ? classClassInfo
                    : selected === 'Khác'
                        ? classClassInfo.filter(
                            (c) =>
                                c.subject !== 'Toán' &&
                                c.subject !== 'Vật lý' &&
                                c.subject !== 'Hoá học' &&
                                c.subject !== 'Sinh học' &&
                                c.subject !== 'Anh văn' &&
                                c.subject !== 'Ngữ văn',
                        )
                        : classClassInfo.filter((c) => c.subject === selected);
            setNumber(3);
            setSubjectClassInfo(res_2);
        }
        setCurrentClassInfo(res);
        // setSubject(selected);
    };

    const handleFilteredGrade = (e) => {
        console.log(number);
        const selected = e.target.value;
        let res = data;
        if (number === 0 || number === 2) {
            res = selected === 'all' ? data : data.filter((c) => c.grade === selected);
            setNumber(2);
            setClassClassInfo(res);
        } else if (number === 1 || number === 3) {
            res = selected === 'all' ? subjectClassInfo : subjectClassInfo.filter((c) => c.grade === selected);
            let res_2 = selected === 'all' ? data : data.filter((c) => c.grade === selected);
            setNumber(3);
            setClassClassInfo(res_2);
        }
        // const res = selected === 'all' ? data : data.filter((c) => c.grade === selected);
        setCurrentClassInfo(res);
        // setGrade(selected);
    };

    const {
        currentPage,
        totalPages,
        setNextPage,
        setPreviousPage,
        nextEnabled,
        previousEnabled,
        startIndex,
        endIndex,
    } = usePagination({
        totalItems: data.length,
        initialPageSize: 11,
        startIndex: 0,
        endIndex: 11,
    });

    return (
        <div className={`container ${style.container}`}>
            <h4 className={style.header}>Danh sách lớp đang tìm Gia sư</h4>
            <button className={style.pagi} onClick={setPreviousPage} disabled={!previousEnabled}>
                {`<`}
            </button>
            <span>
                Trang hiện tại: {currentPage + 1} / {totalPages}
            </span>
            <button className={style.pagi} onClick={setNextPage} disabled={!nextEnabled}>
                {`>`}
            </button>
            <Table className={`table table-borderless ${style.table}`}>
                <thead className={style.theader}>
                    <tr>
                        <th className={`col-md-3 ${style.th}`}>MÃ LỚP</th>
                        <th className={`col-md-3 ${style.th}`}>
                            MÔN
                            <select
                                id="subject"
                                className={style.option}
                                onChange={(e) => {
                                    handleFilteredSubject(e);
                                }}
                            >
                                <option value="all">TẤT CẢ</option>
                                <option value="TOÁN">TOÁN</option>
                                <option value="VẬT LÝ">VẬT LÝ</option>
                                <option value="HÓA HỌC">HOÁ HỌC</option>
                                <option value="ANH VĂN">ANH VĂN</option>
                                <option value="SINH HỌC">SINH HỌC</option>
                                <option value="NGỮ VĂN">NGỮ VĂN</option>
                                <option value="Khác">KHÁC</option>
                            </select>
                        </th>
                        <th className={`col-md-3 ${clsx(style.th, style.center)}`}>
                            LỚP
                            <select
                                id="class"
                                className={style.option}
                                onChange={(e) => {
                                    handleFilteredGrade(e);
                                }}
                            >
                                <option value="all">TẤT CẢ</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="ĐH">ĐH</option>
                            </select>
                        </th>
                        <th className={`col-md-3 ${style.th}`}>NGÀY ĐĂNG KÝ</th>
                    </tr>
                </thead>
                <tbody>
                    {currentClassInfo.slice(startIndex, endIndex).map((c, index) => (
                        <Row key={index} data={currentClassInfo[index]} c={c} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ClassList;
