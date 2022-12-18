import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './classList.module.css'
import { AppContext } from '~/store/appContext'
import btnStyle from './ClassList.module.scss'


const ClassDetails = (props) => {
    const [info, setInfo] = useState(props.info)
    const [click, setClick] = useState(false);
    const context = useContext(AppContext)
    return (
        <>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fa-regular fa-clock ${style.icon}`}></i>
                    Thời gian: {info.time}
                </td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-arrow-square-right ${style.icon}`}></i>
                    Độ dài khoá học: {`TỪ ${info.time_to_start} ĐẾN ${info.time_to_end}`}
                </td>

            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-globe ${style.icon}`}></i>
                    Hình thức: {info.formality === '2' ? 'OFFLINE' : 'ONLINE'}</td>
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
                    <i className={`fi fi-rr-notebook ${style.icon}`}></i>
                    Yêu cầu: {info.requirement}</td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    {/* <i className={`fi fi-rr-time-forward ${style.icon}`}></i> */}
                    {
                        (context.role === "GiaSu") ?
                            (!click ? <button type="button" onClick={() => { setClick(true) }}
                                className={`btn ${btnStyle.accept}`}>
                                Đăng ký
                            </button> : "Đã đăng ký")
                            : ""
                    }
                </td>

            </tr>
        </>
    )
}

const Row = (props) => {
    const [classData, setClassData] = useState(props.data)
    const [show, setShow] = useState(false)
    const c = props.c
    const context = useContext(AppContext);

    const toggleShow = () => {
        (context.role === 'QuanLyHeThong' ||
            context.role === 'QuanLyChuyenMon' ||
            context.role === 'GiaSu') ? setShow(!show) : setShow(false);
    }

    const create_day = new Date(c.created_at);
    const [classID, setClassID] = useState('');
    useEffect(() => {
        if (c.subject === 'TOÁN') setClassID(`TH${c.id}`);
        else if (c.subject === 'VẬT LÝ') setClassID(`VL${c.id}`);
        else if (c.subject === 'HÓA HỌC') setClassID(`HH${c.id}`);
        else if (c.subject === 'SINH HỌC') setClassID(`SH${c.id}`);
        else if (c.subject === 'ANH VĂN') setClassID(`AV${c.id}`);
        else if (c.subject === 'LỊCH SỬ') setClassID(`LS${c.id}`);
        else if (c.subject === 'ĐỊA LÝ') setClassID(`DL${c.id}`);
        else if (c.subject === 'NGỮ VĂN') setClassID(`NV${c.id}`);
        else setClassID(`K${c.id}`);
    }, [])

    return (
        <>
            <tr className={style.tr} onClick={toggleShow}>
                <td className={`col-md-3 ${clsx(style.td)}`}>{
                    classID
                }</td>
                <td className={`col-md-3 ${clsx(style.td)}`}>{c.subject}</td>
                <td className={`col-md-3 ${clsx(style.td, style.center)}`}>{c.grade}</td>
                <td className={`col-md-3 ${clsx(style.td)}`}>{create_day.toLocaleString('vi-VN', {
                    year: "numeric",
                    month: "2-digit",
                    day: "numeric"
                })}</td>
                {/* {
                    context.role === 'GiaSu' &&
                    <button type="button"
                        className={`btn ${btnStyle.accept}`}>
                        Đồng ý
                    </button>
                } */}
            </tr>
            {show && <ClassDetails info={classData} c={c} />}
        </>
    )
}

export default Row;