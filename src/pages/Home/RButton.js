import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './RButton.module.css'


const RButton = (props) => {
    return (
        <div>
            {props.page === "p2" ?
                <div className={style.container}>
                    <i className={`fa-xl fa-solid fa-caret-right ${style.arrow}`}></i>
                    <i className={`fa-xl fa-solid fa-caret-right ${style.arrow}`}></i>
                    <a href="" className={`btn ${clsx(style.button, style.findTutor)}`}>
                        Tìm gia sư
                    </a>
                </div>
                :
                <div className={style.container}>
                    <i className={`fa-xl fa-solid fa-caret-right ${style.whiteArrow}`}></i>
                    <i className={`fa-xl fa-solid fa-caret-right ${style.whiteArrow}`}></i>
                    <a href="" className={`btn ${clsx(style.button, style.becomeTutor)}`}>
                        Trở thành gia sư
                    </a>
                </div>
            }
        </div>
    )
}

export default RButton