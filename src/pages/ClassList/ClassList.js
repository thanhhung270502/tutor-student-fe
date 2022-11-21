import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './ClassList.module.css'
import { Table } from 'react-bootstrap'
import { usePagination } from 'react-use-pagination';
import data from './ClassList.json'

import Row from './Row'

const ClassList = () => {
    const [classInfo, setClassInfo] = useState([]);

    const [show, setShow] = useState(false);
    const [grade, setGrade] = useState("all");
    const [subject, setSubject] = useState("all");

    const handleFilteredSubject = (e) => {
        const selected = e.target.value;
        const res = selected === "all" ? data :
            (selected === "Khác" ? data.filter((c) => (c.subject !== "Toán"
                && c.subject !== "Vật lý" && c.subject !== "Hoá học" &&
                c.subject !== "Sinh học" && c.subject !== "Anh văn" &&
                c.subject !== "Ngữ văn")) :
                data.filter((c) => c.subject === selected));
        setClassInfo(res);
        // setSubject(selected);
    }

    const handleFilteredGrade = (e) => {
        const selected = e.target.value;
        const res = selected === "all" ? data :
            data.filter((c) => c.grade === selected);
        setClassInfo(res);
        // setGrade(selected);
    }

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

    useEffect(() => {
        /* use api / wait until data is updated
        async () => {
            info = await getClassInfo();
            setClassInfo(info);
        } */

        setClassInfo(data);
    }, []);

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
                            <select id="subject"
                                className={style.option}
                                onChange={(e) => { handleFilteredSubject(e) }}>
                                <option value="all">TẤT CẢ</option>
                                <option value="Toán">TOÁN</option>
                                <option value="Vật lý">VẬT LÝ</option>
                                <option value="Hoá học">HOÁ HỌC</option>
                                <option value="Anh văn">ANH VĂN</option>
                                <option value="Sinh học">SINH HỌC</option>
                                <option value="Ngữ văn">NGỮ VĂN</option>
                                <option value="Khác">KHÁC</option>
                            </select>
                        </th>
                        <th className={`col-md-3 ${clsx(style.th, style.center)}`}>
                            LỚP
                            <select id="class"
                                className={style.option}
                                onChange={(e) => { handleFilteredGrade(e) }}>
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
                        {/* <th className={`col-md-3 ${style.th}`}></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        classInfo.slice(startIndex, endIndex).map(
                            (c, index) => <Row key={index} data={classInfo[index]} c={c} />
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ClassList