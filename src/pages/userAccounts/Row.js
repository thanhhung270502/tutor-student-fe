import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './userAccounts.module.scss'

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
                    <i className={`fi fi-rr-calendar ${style.icon}`}></i>
                    Ngày sinh: {info.birth}
                </td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-user ${style.icon}`}></i>
                    CMND/CCCD: {info.CCCD}
                </td>

            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-envelope ${style.icon}`}></i>
                    Email: {info.email}
                </td>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-home ${style.icon}`}></i>
                    Địa chỉ: {info.address}
                </td>
            </tr>
            <tr className={`${style.modal}`}>
                <td colSpan="2" className={`${clsx(style.detail)}`}>
                    <i className={`fi fi-rr-phone-call ${style.icon}`}></i>
                    SĐT: {info.phoneNumber}
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

    const [hide, setHide] = useState(false)

    const Hide = () => {
        setHide(!hide);
    }

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <>
            {(del &&
                <tr className={style.tr}>
                    <td onClick={toggleShow} className={`col-md-2 align-middle ${clsx(style.td, style.center)}`}>{c.name}</td>
                    <td onClick={toggleShow} className={`col-md-3 align-middle ${clsx(style.td, style.center)}`}>{c.accountCreatedate}</td>
                    <td onClick={toggleShow} className={`col-md-2 align-middle ${clsx(style.td, style.center)}`}>{c.role}</td>
                    {<td className={`col-md-2 align-middle ${clsx(style.td, style.center)}`}>
                        {!hide && <button type="button"
                            className={`btn ${clsx(style.accept, style.center)}`}
                            onClick={() => {
                                Hide(false);
                            }}>
                            CẤP QUYỀN
                        </button> || <button type="button"
                            className={`btn ${clsx(style.decline, style.center)}`}
                            onClick={() => {
                                Hide(false);
                            }}>
                            XÓA QUYỀN
                        </button>}
                    </td>}
                    {/* <td className={`col-md-2 ${style.td}`}>
                        <button type="button"
                            className={`btn ${style.decline}`}
                            onClick={() => {
                                setDel(false);
                                console.log("DECLINED!");
                            }}>
                            Từ chối
                        </button>
                    </td> */}
                </tr>)
            }
            {show && <ClassDetails info={classData} />}
        </>
    )
}

export default Row;