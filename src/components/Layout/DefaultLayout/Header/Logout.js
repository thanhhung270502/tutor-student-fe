import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import clsx from 'clsx';
import style from './Header.module.css';
import axios from 'axios';
import { setCookie } from '~/api/cookie';
import { logout } from '~/api/api';

const LogOutBtn = () => {
    const handleClick = async (event) => {
        event.preventDefault();
        const res = await logout();
        //delete current cookies
        setCookie("user_id", '', 0);
        setCookie("role", '', 0);
        window.location.href = "../"
    }
    return (
        <button className={`nav-link dropdown-item ${clsx(style.dropdownItem)}`} onClick={handleClick}>
            Đăng xuất
        </button>
    )
}

export default LogOutBtn;