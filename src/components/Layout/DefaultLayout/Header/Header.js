import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './Header.module.css';
import { AppContext } from '../../../../store/appContext'

const Guest = () => {
    const guest = ['Tìm gia sư', 'Trở thành gia sư', 'About us'];
    const link = ['/classlist', '/signup', '/aboutus'];
    return (
        <React.Fragment>
            {guest.map((v, index) => (
                <li key={index} className={`nav-item ${clsx(style.headerItem)}`}>
                    <Link to={link[index]} className={`nav-link ${clsx(style.link)}`}>
                        {v}
                    </Link>
                </li>
            ))}
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <Link to="/login" className={`nav-link ${clsx(style.login)}`}>
                    Đăng nhập
                </Link>
            </li>
            <li className={`nav-item ${clsx(style.headerItem)}`}>
                <Link to="/signup" className={`nav-link ${clsx(style.signup)}`}>
                    Đăng ký
                </Link>
            </li>
        </React.Fragment>
    );
};

const ProfessionalAdmin = () => {
    const proadmin = ['Trang chủ', 'Duyệt gia sư', 'Duyệt lớp'];
    const link = ['/', 'verifyTutorAccount', 'verifyClass'];
    return (
        <React.Fragment>
            {proadmin.map((v, index) => (
                <li key={index} className={`nav-item ${clsx(style.headerItem)}`}>
                    <Link to={link[index]} className={`nav-link ${clsx(style.link)}`}>
                        {v}
                    </Link>
                </li>
            ))}
            <li className={`nav-item dropdown ${style.dropdown}`}>
                <Link className={`nav-link dropdown-toggle ${style.dropdownBtn}`} to="#">
                    Quản lý chuyên môn
                </Link>
                <ul className={`dropdown-menu ${style.dropdownContent}`}>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Thông tin cá nhân
                        </Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Xác nhận thanh toán
                        </Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Đăng xuất
                        </Link>
                    </li>
                </ul>
            </li>
        </React.Fragment>
    );
};

const SystemAdmin = () => {
    const sysadmin = ['Trang chủ', 'Danh sách user'];
    const link = ['/', '/userlist'];
    return (
        <React.Fragment>
            {sysadmin.map((v, index) => (
                <li key={index} className={`nav-item ${clsx(style.headerItem)}`}>
                    <Link to={link[index]} className={`nav-link ${clsx(style.link)}`}>
                        {v}
                    </Link>
                </li>
            ))}
            <li className={`nav-item dropdown ${style.dropdown}`}>
                <Link className={`nav-link dropdown-toggle ${style.dropdownBtn}`} to="#">
                    Quản lý hệ thống
                </Link>
                <ul className={`dropdown-menu ${style.dropdownContent}`}>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Thông tin cá nhân
                        </Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Thống kê
                        </Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Đăng xuất
                        </Link>
                    </li>
                </ul>
            </li>
        </React.Fragment>
    );
};

const Student = () => {
    const student = ['Trang chủ', 'Lớp học', 'Tạo lớp'];
    const link = ['/', '/classlist', '/createclass'];
    return (
        <React.Fragment>
            {student.map((v, index) => (
                <li key={index} className={`nav-item ${clsx(style.headerItem)}`}>
                    <Link to={link[index]} className={`nav-link ${clsx(style.link)}`}>
                        {v}
                    </Link>
                </li>
            ))}
            <li className={`nav-item dropdown ${style.dropdown}`}>
                <Link className={`nav-link dropdown-toggle ${style.dropdownBtn}`} to="#">
                    Học viên chăm chỉ
                </Link>
                <ul className={`dropdown-menu ${style.dropdownContent}`}>
                    <li className={`nav-item`}>
                        <Link className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} to="#">
                            Thông tin cá nhân
                        </Link>
                    </li>
                    <li className={`nav-item`}>
                        <button className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`}>
                            Đăng xuất
                        </button>
                    </li>
                </ul>
            </li>
        </React.Fragment>
    );
};

function Header() {
    const context = useContext(AppContext);

    return (
        <nav id="mainNavbar" className={`navbar navbar-light navbar-expand-lg sticky-top ${clsx(style.navbar)}`}>
            <Link className={`navbar-brand ${style.logo}`} to="/">
                <img src=".././logo.png" height="50"></img>
            </Link>
            <button 
                className={`navbar-toggler ${style.togglerBut}`}
                data-bs-toggle="collapse"
                data-bs-target="#navLinks"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${style.grbut}`} id="navLinks">
                <ul className={`navbar-nav ms-auto`}>
                    {
                        context.role === '0' &&  <Guest />
                    }
                    {
                        context.role === '1' &&  <SystemAdmin /> 
                    }
                    {
                        context.role === '2' &&  <ProfessionalAdmin />
                    }
                    {/* {
                        context.role === '3' &&  <Guest />
                    } */}
                    {
                        context.role === '4' &&  <Student />
                    }
                
                </ul>
            </div>
        </nav>
    );
}

export default Header;
