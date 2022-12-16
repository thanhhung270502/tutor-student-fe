import React, { useState, useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './userAccounts.module.scss'
import { AppContext } from 'src/store/appContext';
import { useDebugValue } from 'react'

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
    const context = useContext(AppContext);

    const [hide, setHide] = useState(false);
    const Hide = () => {
        setHide(!hide);
        console.log(hide);
    }

    const [h, setH] = useState(false);
    const H = () => {
        setH(!h);
        console.log(h);
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
                        {!hide && c.role !== 'Gia Sư' && c.role !== 'Phụ huynh / Học sinh' && <button type="button"
                            className={`btn ${clsx(style.accept, style.center)}`}
                            onClick={() => {
                                Hide(false);
                            }}> CẤP QUYỀN
                        </button> || c.role !== 'Gia Sư' && c.role !== 'Phụ huynh / Học sinh' && <button type="button"
                            className={`btn ${clsx(style.decline, style.center)}`}
                            onClick={() => {
                                Hide(false);
                            }}>
                            XÓA QUYỀN
                        </button>}

                        {!hide && c.role !== 'Quản lí chuyên môn' && c.role !== 'Quản lí hệ thống' && <button type="button"
                            className={`btn ${clsx(style.ban, style.center)}`}
                            onClick={() => {
                                Hide(false);
                            }}> 
                            CHẶN
                        </button> || c.role !== 'Quản lí chuyên môn' && c.role !== 'Quản lí hệ thống' && <button type="button"
                            className={`btn ${clsx(style.unban, style.center)}`}
                            onClick={() => {
                                Hide(false);
                            }}> 
                            BỎ CHẶN
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