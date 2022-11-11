import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './Home.module.css'
import RButton from './RButton'

const HomePage3 = () => {
    return (
        <React.Fragment>
            <div className={`row ${clsx(style.container3)}`}>
                <div className={`col-sm-1`}></div>
                <div data-aos="fade-right" className={`col-sm-5 ${clsx(style.text3)}`}>
                    <h1 className={`${clsx(style.become)}`}>Bạn muốn</h1>
                    <h1 className={`${clsx(style.become)}`}>trở thành gia sư?</h1>
                    <div className={`${clsx(style.normalText, style.whiteText)}`}>
                        Tạo tài khoản và kết nối với học viên!
                    </div>
                    <div className={`row ${clsx(style.steps)}`}>
                        <div className={`col-sm ${clsx(style.cirNum, style.cir11)}`}>1</div>
                        <div className={`col-sm ${clsx(style.cirNum, style.cir22)}`}>2</div>
                        <div className={`col-sm ${clsx(style.cirNum, style.cir33)}`}>3</div>
                    </div>
                    <div className={`row ${clsx(style.steps1)}`}>
                        <div className={`col-md-4 ${style.cirText}`}>Cho chúng tôi biết nhu cầu của bạn</div>
                        <div className={`col-md-4 ${clsx(style.cirText)}`}>Kết nối và gặp gỡ gia sư</div>
                        <div className={`col-md-4 ${style.cirText}`}>Bắt đầu lớp học của bạn!</div>
                    </div>
                    <RButton page="p3" />
                </div>
                <div className={`col-sm-6`}>
                    <img src="./bubbles.png" alt="bubble" className={`${clsx(style.bubbleFig)}`} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomePage3;