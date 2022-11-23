import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from '../../components/GlobalStyles/table.module.scss'
import { Button } from 'react-bootstrap'
import ButtonStyle from './styles.module.scss'

const ClassDetails = (props) => {
    const [info, setInfo] = useState(props.info)

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
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fa-regular fa-clock ${style.icon}`}></i>
                    Thời gian: {info.date}
                </td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-arrow-square-right ${style.icon}`}></i>
                    Độ dài khoá học: {info.courseLength}
                </td>

            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-globe ${style.icon}`}></i>
                    Hình thức: {info.isOffline === "true" ? "Offline" : "Online"}</td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-phone-call ${style.icon}`}></i>
                    SĐT: {info.phone}</td>
            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-home ${style.icon}`}></i>
                    Địa chỉ: {info.address}</td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-flag ${style.icon}`}></i>
                    Lương: {info.salary}</td>
            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-time-forward ${style.icon}`}></i>
                    Thời gian học: {info.studyTime}</td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-notebook ${style.icon}`}></i>
                    Yêu cầu: {info.requirement}</td>
            </tr>
        </>
    )
}

const Row = (props) => {
    const [classData, setClassData] = useState(props.data)
    const [show, setShow] = useState(false)
    const c = props.c

    const toggleShow = () => {
        setShow(show => !show);
    }

    return (
        <>
            <tr onClick={toggleShow}>
                <td>{c.classID}</td>
                <td>{c.subject}</td>
                <td>{c.grade}</td>
                <td>{c.date}</td>
                <td>{c.payment}</td>
                <td><Button className={ButtonStyle['custom-payment-button']} onClick={toggleShow}>Thanh toán</Button></td>
            </tr>
            {show && <ClassDetails info={classData} />}
        </>
    )
}

export default Row;