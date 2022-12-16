import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './RButton.module.css'
import { AppContext } from '~/store/appContext'

const RButton = (props) => {
    const context = useContext(AppContext);
    const findTutor = context.role === '' ? "/signup" : (context.role === 'NguoiCanTimGiaSu' ? "/createclass" : "");
    const bcTutor = context.role === '' ? "/signup" : (context.role === 'GiaSu' ? "/classlist" : "");

    return (
        <div>
            {props.page === "p2" ?
                <div className={style.container}>

                    {
                        (context.role === '' || context.role === 'NguoiCanTimGiaSu') &&
                        <>
                            <i className={`fa-xl fa-solid fa-caret-right ${style.arrow}`}></i>
                            <i className={`fa-xl fa-solid fa-caret-right ${style.arrow}`}></i>
                            <a href={findTutor} className={`btn ${clsx(style.button, style.findTutor)}`}>
                                Tìm gia sư
                            </a>
                        </>
                    }

                </div>
                :
                <div className={style.container}>
                    {
                        (context.role === '' || context.role === 'GiaSu') &&
                        <>
                            <i className={`fa-xl fa-solid fa-caret-right ${style.whiteArrow}`}></i>
                            <i className={`fa-xl fa-solid fa-caret-right ${style.whiteArrow}`}></i>
                            <a href={bcTutor} className={`btn ${clsx(style.button, style.becomeTutor)}`}>
                                Trở thành gia sư
                            </a>
                        </>
                    }

                </div>
            }
        </div>
    )
}

export default RButton