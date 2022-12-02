import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './RButton.module.css'
import { AppContext } from '~/store/appContext'

const RButton = (props) => {
    const context = useContext(AppContext);
    const findTutor = context.role === '0' ? "/signup" : (context.role === '4' ? "/createclass" : "");
    const bcTutor = context.role === '0' ? "/signup" : (context.role === '3' ? "/classlist" : "");

    return (
        <div>
            {props.page === "p2" ?
                <div className={style.container}>

                    {
                        (context.role === '0' || context.role === '4') &&
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
                        (context.role === '0' || context.role === '3') &&
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