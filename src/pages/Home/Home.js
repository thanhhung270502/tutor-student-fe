import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './Home.module.css'
import HomePage1 from './HomePage1'
import HomePage2 from './HomePage2'
import HomePage3 from './HomePage3'


function Home() {
    return (
        <React.Fragment>
            <HomePage1 />
            <div className={`${clsx(style.subjects)}`}>
                <div className={`${clsx(style.subject)}`}>TOÁN</div>
                <div className={`${clsx(style.subject)}`}>VẬT LÝ</div>
                <div className={`${clsx(style.subject)}`}>HOÁ HỌC</div>
                <div className={`${clsx(style.subject)}`}>ANH VĂN</div>
                <div className={`${clsx(style.subject)}`}>SINH HỌC</div>
                <div className={`${clsx(style.subject)}`}>NGỮ VĂN</div>
            </div>
            <div className={`${clsx(style.bubble)}`}></div>
            <HomePage2 />
            <HomePage3 />
        </React.Fragment>
    );
}
export default Home;
