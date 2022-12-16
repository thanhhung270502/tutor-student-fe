import className from 'classnames/bind';
import styles from './info.module.scss';
import image from '~/image/pic.png';
import { AppContext } from 'src/store/appContext';
// import { useContext } from 'react';
import React, {useState, useEffect, useContext} from "react";
import { queryByPlaceholderText } from '@testing-library/react';

const cx = className.bind(styles);


function Info () {
    const context = useContext(AppContext);

    var roles = "none";

    // console.log(context.role);

    function handleRoles () {
        if(context.role == "QuanLyHeThong") return "Quản lí hệ thống";
        else if(context.role == "QuanLyChuyenMon") return "Quản lí chuyên môn";
        else if(context.role == "GiaSu") return "Gia sư"
        else if(context.role == "NguoiCanTimGiaSu") return "Học viên";
    }

    roles = handleRoles();

    return (
        <div className={cx('infoWrapper')}>
            <div className={(context.role !== "QuanLyHeThong" && context.role !== "QuanLyChuyenMon") ? cx('info1') : cx("info2")}>
                <img src={image} /*style={{ width: "50%", height: "50%" }}*/ className={cx('image')}/>
                <p className={cx('name')}>Nguyễn Văn A</p>
                <p className={cx('role')}>{roles}</p>
            </div>
        </div>
    )
}

export default Info;