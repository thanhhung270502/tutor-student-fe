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
        setCurrentClassInfo(data);
        setClassInfo(data);
        setSubjectClassInfo(data);
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

    const [subjectClassInfo, setSubjectClassInfo] = useState([]);
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

    return (
        <div className={cx('container')}>
            <h4 className={style.header}>Tình trạng thanh toán lớp</h4>
            <Table className={`table table-borderless ${style.table}`}>
                <div className={cx('wrapper')}>
                    <thead className={style.theader}>
                        <tr>
                            <th className={`col-md-2 ${clsx(style.th, style.center)}`} onClick={()=>sorting("classID")}>MÃ LỚP
                                <span className={`col-md-2 ${clsx(style.column)}`}>
                                    {c === "classID" ? '▲' : '▼'}
                                </span>
                            </th>
                            <th className={`col-md-2 ${clsx(style.th, style.center, style.subject)}`} >MÔN
                                <select
                                        id="subject"
                                        className={style.option}
                                        onChange={(e) => {
                                        handleFilteredSubject(e);}}
                                        >
                                    <option className={style.options} value="all">TẤT CẢ</option>
                                    <option className={style.options} value="Toán">TOÁN</option>
                                    <option className={style.options} value="Vật lý">VẬT LÝ</option>
                                    <option className={style.options} value="Hóa học">HOÁ HỌC</option>
                                    <option className={style.options} value="Anh văn">ANH VĂN</option>
                                    <option className={style.options} value="Sinh học">SINH HỌC</option>
                                    <option className={style.options} value="Ngữ Văn">NGỮ VĂN</option>
                                    <option className={style.options} value="Khác">KHÁC</option>
                                </select>
                                <span class='c'></span>
                            </th>
                            <th className={`col-md-1 ${clsx(style.th, style.center)}`} >LỚP
                                <select
                                    id="class"
                                    className={style.option}
                                    onChange={(e) => {
                                        handleFilteredGrade(e);
                                    }}>
                                    <option className={style.options} value="all">TẤT CẢ</option>
                                    <option className={style.options} value="1">1</option>
                                    <option className={style.options} value="2">2</option>
                                    <option className={style.options} value="3">3</option>
                                    <option className={style.options} value="4">4</option>
                                    <option className={style.options} value="5">5</option>
                                    <option className={style.options} value="6">6</option>
                                    <option className={style.options} value="7">7</option>
                                    <option className={style.options} value="8">8</option>
                                    <option className={style.options} value="9">9</option>
                                    <option className={style.options} value="10">10</option>
                                    <option className={style.options} value="11">11</option>
                                    <option className={style.options} value="12">12</option>
                                    <option className={style.options} value="ĐH">ĐH</option>
                                </select>
                            </th>
                            <th className={`col-md-3 ${clsx(style.th, style.center)}`} onClick={()=>sorting("date")}>NGÀY ĐĂNG KÝ
                                <span className={`col-md-2 ${clsx(style.column)}`}>
                                    {c === "date" ? '▲' : '▼'}
                                </span>
                            </th>
                            <th className={`col-md-2 ${clsx(style.th, style.center)}`} >TÌNH TRẠNG THANH TOÁN</th>
                            {/*<th className={`col-md-2 ${style.th}`}></th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentClassInfo.map(
                                (c, index) => (
                                    <Row key={index} data={currentClassInfo[index]} c={c} />
                            ))
                        }
                    </tbody>
                </div>
            </Table>
        </div>
    );
}

export default PaymentStatus

















// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import clsx from 'clsx';
// import style from './PaymentStatus.module.scss';
// import { Table } from 'react-bootstrap';
// import data from './ClassList.json';

// import Row from './Row';

// const PaymentStatus = () => {
//     const [classInfo, setClassInfo] = useState([]);
//     const [subjectClassInfo, setSubjectClassInfo] = useState([]);
//     const [classClassInfo, setClassClassInfo] = useState([]);
//     const [currentClassInfo, setCurrentClassInfo] = useState([]);
//     // 0: default, 1: filter subject, 2: filter class, 3: filter both
//     const [number, setNumber] = useState(0);

//     const [show, setShow] = useState(false);
//     const [grade, setGrade] = useState('all');
//     const [subject, setSubject] = useState('all');

//     const handleFilteredSubject = (e) => {
//         console.log(number);
//         const selected = e.target.value;
//         // const res = selected === "all" ? data : currentClassInfo.filter((c) => c.subject === selected);
//         let res = classInfo;
//         if (number === 0 || number === 1) {
//             res =
//                 selected === 'all'
//                     ? data
//                     : selected === 'Khác'
//                     ? data.filter(
//                           (c) =>
//                               c.subject !== 'Toán' &&
//                               c.subject !== 'Vật lý' &&
//                               c.subject !== 'Hoá học' &&
//                               c.subject !== 'Sinh học' &&
//                               c.subject !== 'Anh văn' &&
//                               c.subject !== 'Ngữ văn',
//                       )
//                     : data.filter((c) => c.subject === selected);
//             setNumber(1);
//             setSubjectClassInfo(res);
//         } else if (number === 2 || number === 3) {
//             let res_2 =
//                 selected === 'all'
//                     ? data
//                     : selected === 'Khác'
//                     ? data.filter(
//                           (c) =>
//                               c.subject !== 'Toán' &&
//                               c.subject !== 'Vật lý' &&
//                               c.subject !== 'Hoá học' &&
//                               c.subject !== 'Sinh học' &&
//                               c.subject !== 'Anh văn' &&
//                               c.subject !== 'Ngữ văn',
//                       )
//                     : data.filter((c) => c.subject === selected);

//             res =
//                 selected === 'all'
//                     ? classClassInfo
//                     : selected === 'Khác'
//                     ? classClassInfo.filter(
//                           (c) =>
//                               c.subject !== 'Toán' &&
//                               c.subject !== 'Vật lý' &&
//                               c.subject !== 'Hoá học' &&
//                               c.subject !== 'Sinh học' &&
//                               c.subject !== 'Anh văn' &&
//                               c.subject !== 'Ngữ văn',
//                       )
//                     : classClassInfo.filter((c) => c.subject === selected);
//             setNumber(3);
//             setSubjectClassInfo(res_2);
//         }
//         setCurrentClassInfo(res);
//         // setSubject(selected);
//     };

//     const handleFilteredGrade = (e) => {
//         console.log(number);
//         const selected = e.target.value;
//         let res = data;
//         if (number === 0 || number === 2) {
//             res = selected === 'all' ? data : data.filter((c) => c.grade === selected);
//             setNumber(2);
//             setClassClassInfo(res);
//         } else if (number === 1 || number === 3) {
//             res = selected === 'all' ? subjectClassInfo : subjectClassInfo.filter((c) => c.grade === selected);
//             let res_2 = selected === 'all' ? data : data.filter((c) => c.grade === selected);
//             setNumber(3);
//             setClassClassInfo(res_2);
//         }
//         // const res = selected === 'all' ? data : data.filter((c) => c.grade === selected);
//         setCurrentClassInfo(res);
//         // setGrade(selected);
//     };

//     useEffect(() => {
//         /* use api / wait until data is updated
//         async () => {
//             info = await getClassInfo();
//             setClassInfo(info);
//         } */
//         setCurrentClassInfo(data);
//         setClassInfo(data);
//         setSubjectClassInfo(data);
//         setClassClassInfo(data);
//     }, []);

//     return (
//         <div className={`container ${style.container}`}>
//             <h4 className={style.header}>Danh sách lớp đang tìm Gia sư</h4>
            
//             <Table className={`table table-borderless ${style.table}`}>
//                 <thead className={style.theader}>
//                     <tr>
//                         <th className={`col-md-3 ${style.th}`}>MÃ LỚP</th>
//                         <th className={`col-md-3 ${style.th}`}>
//                             MÔN
//                             <select
//                                 id="subject"
//                                 className={style.option}
//                                 onChange={(e) => {
//                                     handleFilteredSubject(e);
//                                 }}
//                             >
//                                 <option value="all">TẤT CẢ</option>
//                                 <option value="Toán">TOÁN</option>
//                                 <option value="Vật lý">VẬT LÝ</option>
//                                 <option value="Hoá học">HOÁ HỌC</option>
//                                 <option value="Anh văn">ANH VĂN</option>
//                                 <option value="Sinh học">SINH HỌC</option>
//                                 <option value="Ngữ văn">NGỮ VĂN</option>
//                                 <option value="Khác">KHÁC</option>
//                             </select>
//                         </th>
//                         <th className={`col-md-3 ${clsx(style.th, style.center)}`}>
//                             LỚP
//                             <select
//                                 id="class"
//                                 className={style.option}
//                                 onChange={(e) => {
//                                     handleFilteredGrade(e);
//                                 }}
//                             >
//                                 <option value="all">TẤT CẢ</option>
//                                 <option value="1">1</option>
//                                 <option value="2">2</option>
//                                 <option value="3">3</option>
//                                 <option value="4">4</option>
//                                 <option value="5">5</option>
//                                 <option value="6">6</option>
//                                 <option value="7">7</option>
//                                 <option value="8">8</option>
//                                 <option value="9">9</option>
//                                 <option value="10">10</option>
//                                 <option value="11">11</option>
//                                 <option value="12">12</option>
//                                 <option value="ĐH">ĐH</option>
//                             </select>
//                         </th>
//                         <th className={`col-md-3 ${style.th}`}>NGÀY ĐĂNG KÝ</th>
//                         {/* <th className={`col-md-3 ${style.th}`}></th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
                    // {
                    //     currentClassInfo.map(
                    //         (c, index) => (
                    //             <Row key={index} data={currentClassInfo[index]} c={c} />
                    //     ))
                    // }
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default PaymentStatus