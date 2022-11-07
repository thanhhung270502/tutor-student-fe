import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './Home.module.css'
import RButton from './RButton'


const HomePage2 = () => {
    return (
        <React.Fragment>
            <div className={`row ${clsx(style.container2)}`}>
                <div className={`col-sm-1`}></div>
                <div className={`col-sm-4`}>
                    <img data-aos="fade-right" src="./figure_2.png" alt="figure-2" className={`algin-center ${clsx(style.figure2)}`} />
                </div>
                <div data-aos="fade-left" className={`col-sm-6 ${clsx(style.text2)}`}>
                    <h1 className={`${clsx(style.inlineHeader)}`}>Bạn muốn </h1>
                    <h1 className={`${clsx(style.inlineHeader, style.pinkHeader)}`}>tìm gia sư?</h1>
                    <div className={`${style.normalText}`}>Tạo tài khoản và gửi yêu cầu tạo lớp!</div>
                    <div className={`row ${clsx(style.steps)}`}>
                        <div className={`col-sm ${clsx(style.cirNum, style.cir1)}`}>1</div>
                        <div className={`col-sm ${clsx(style.cirNum, style.cir2)}`}>2</div>
                        <div className={`col-sm ${clsx(style.cirNum, style.cir3)}`}>3</div>
                    </div>
                    <div className={`row ${clsx(style.steps1)}`}>
                        <div className={`col-md-4 ${style.cirText}`}>Cho chúng tôi biết nhu cầu của bạn</div>
                        <div className={`col-md-4 ${clsx(style.cirText)}`}>Kết nối và gặp gỡ gia sư</div>
                        <div className={`col-md-4 ${style.cirText}`}>Bắt đầu lớp học của bạn!</div>
                    </div>
                    <RButton page="p2" />
                </div>
            </div>
            <div className={`col-sm-1`}></div>
        </React.Fragment >
    );
}

export default HomePage2;