import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './PendingClass.module.css'
import { Button, Container, Table } from 'react-bootstrap'

const ClassDetails = (props) => {
    const [info, setInfo] = useState(props.info)
    const RegiseredTutor = [
        {'name': 'Nguyễn Văn A', 'date': '03-10-2022'},
        {'name': 'Nguyễn Văn B', 'date': '11-11-2022'},
        {'name': 'Nguyễn Văn C', 'date': '12-12-2022'},
    ]

    /* useEffect(() => {
        // use api/ wait until data is updated
        async () => {
            info = await getClassInfo();
            setClassInfo(info);
        }
    }, []); */

    return (
        <>
            <tr className={`${style.modal}`}>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fa-regular fa-clock ${style.icon}`}></i>
                    Thời gian: {info.date}
                </td>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-arrow-square-right ${style.icon}`}></i>
                    Độ dài khoá học: {info.courseLength}
                </td>

            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-globe ${style.icon}`}></i>
                    Hình thức: {info.isOffline === "true" ? "Offline" : "Online"}</td>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-phone-call ${style.icon}`}></i>
                    SĐT: {info.phone}</td>
            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-home ${style.icon}`}></i>
                    Địa chỉ: {info.address}</td>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-flag ${style.icon}`}></i>
                    Lương: {info.salary}</td>
            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-time-forward ${style.icon}`}></i>
                    Thời gian học: {info.studyTime}</td>
                <td colSpan="3" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-notebook ${style.icon}`}></i>
                    Yêu cầu: {info.requirement}</td>
            </tr>
            <tr>
                <td colSpan={5}>
                    <Container>
                        <Table className={style['small-table']} hover>
                            <thead>
                                <th>Gia sư đăng kí</th>
                                <th>Ngày đăng kí</th>
                                <th></th>
                            </thead>
                            <tbody>
                                {RegiseredTutor.map((tutor, index) =>
                                    <tr key={index}>
                                        <td>{tutor.name}</td>
                                        <td>{tutor.date}</td>
                                        <td>
                                            <button type="button"
                                                className={`btn ${style.accept}`}>
                                                Đồng ý
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Container>
                </td>
            </tr>
        </>
    )
}

const Row = (props) => {
    const [classData, setClassData] = useState(props.data)
    const [show, setShow] = useState(false)
    const [del, setDel] = useState(true)
    const c = props.c

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <>
            {(del &&
                <tr className={style.tr}>
                    <td onClick={toggleShow} className={`col-md-2 align-middle ${clsx(style.td)}`}>{c.classID}</td>
                    <td onClick={toggleShow} className={`col-md-2 align-middle ${clsx(style.td)}`}>{c.subject}</td>
                    <td onClick={toggleShow} className={`col-md-1 align-middle ${clsx(style.td, style.center)}`}>{c.grade}</td>
                    <td onClick={toggleShow} className={`col-md-3 align-middle ${clsx(style.td)}`}>{c.date}</td>
                    <td className={`col-md-2 align-middle ${style.td}`}>
                        <button type="button"
                            className={`btn ${style.accept}`}
                            onClick={() => {
                                setDel(false);
                                console.log("accepted!");
                            }}>
                            Đồng ý
                        </button>
                        <button type="button"
                            className={`btn ms-4 ${style.decline}`}
                            onClick={() => {
                                setDel(false);
                                console.log("DECLINED!");
                            }}>
                            Từ chối
                        </button>
                    </td>
                </tr>)
            }
            {show && <ClassDetails info={classData} />}
        </>
    )
}

export default Row;