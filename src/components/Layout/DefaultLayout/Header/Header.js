import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import clsx from 'clsx'
import style from './Header.module.css'

const Guest = () => {
    return (
        <React.Fragment>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.link)}`}>Tìm gia sư</a>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.link)}`}>Trở thành gia sư</a>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.link)}`}>About us</a>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.login)}`}>Đăng nhập</a>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.signup)}`}>Đăng ký</a>
            </li>
        </React.Fragment>
    )
}

const SystemAdmin = () => {
    return (
        <React.Fragment>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.link)}`}>Trang chủ</a>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.link)}`}>Duyệt gia sư</a>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <a href="" className={`nav-link ${clsx(style.link)}`}>Duyệt lớp</a>
            </li>
            <li className={`nav-item dropdown ${style.dropdown}`}>
                <a className={`nav-link dropdown-toggle ${style.dropdownBtn}`} href="#">
                    Quản lý hệ thống
                </a>
                <ul className={`dropdown-menu ${style.dropdownContent}`}>
                    <li className={`nav-item`}><a className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} href="#">Thông tin cá nhân</a></li>
                    <li className={`nav-item`}><a className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} href="#">Xác nhận thanh toán</a></li>
                    <li className={`nav-item`}><a className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} href="#">Đăng xuất</a></li>
                </ul>
            </li>
        </React.Fragment>
    );
}


function Header() {
    return (
        <nav id="mainNavbar" className={`navbar navbar-light navbar-expand-lg sticky-top ${clsx(style.navbar)}`}>
            <a className={`navbar-brand ${style.logo}`} href="#">
                <img src='.././logo.png' height='50'></img>
            </a>
            <button className={`navbar-toggler ${style.togglerBut}`} data-bs-toggle="collapse" data-bs-target="#navLinks" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${style.grbut}`} id="navLinks">
                <ul className={`navbar-nav ms-auto`}>
                    <Guest />
                    {/* <SystemAdmin /> */}
                </ul>
            </div>
        </nav>
    );
}


export default Header;
