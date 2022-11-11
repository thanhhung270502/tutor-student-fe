import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './Home.module.css'

const HomePage1 = () => {
    return (
        <React.Fragment>
            {AOS.init({
                duration: 1200,
            })}
            < div className={`row ${clsx(style.container1)}`}>
                <div className={`col-sm-1`}></div>
                <div data-aos="fade-right" className={`col-sm-4 ${clsx(style.text1)}`} >
                    <div className={`${clsx(style.connect)}`}>KẾT NỐI GIA SƯ - HỌC VIÊN</div>
                    <h1 className={`${clsx(style.slogan)}`}>Cùng nhau,</h1>
                    <h1 className={`${clsx(style.slogan)}`}>chúng ta có thể</h1>
                    <h1 className={`${clsx(style.slogan)}`}>làm nên điều tuyệt vời</h1>
                    <div className={`${clsx(style.quote)}`}>“Học tập là điều cốt lõi của sự khiêm nhường - học từ vạn vật
                        và từ mọi người.” </div>
                    <address className={`${clsx(style.quote)}`}> - J. Krishnamurti</address>
                </div>
                <div className={`col-sm-6`}>
                    <img data-aos="fade-left" src="./figure_1.png" alt="figure-1" className={`algin-center ${clsx(style.figure1)}`} />
                </div>
                <div className={`col-sm-1`}></div>
            </div>
            <div className={`${clsx(style.subjects)}`}>
                <div className={`${clsx(style.subject)}`}>TOÁN</div>
                <div className={`${clsx(style.subject)}`}>VẬT LÝ</div>
                <div className={`${clsx(style.subject)}`}>HOÁ HỌC</div>
                <div className={`${clsx(style.subject)}`}>ANH VĂN</div>
                <div className={`${clsx(style.subject)}`}>SINH HỌC</div>
                <div className={`${clsx(style.subject)}`}>NGỮ VĂN</div>
            </div>
            <div className={`${clsx(style.bubble)}`}></div>
        </React.Fragment >
    );
}

export default HomePage1;