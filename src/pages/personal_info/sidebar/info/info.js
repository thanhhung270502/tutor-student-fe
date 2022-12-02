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
        if(context.role == 1) return "Quản lí hệ thống";
        else if(context.role == 2) return "Quản lí chuyên môn";
        else if(context.role == 3) return "Gia sư"
        else if(context.role == 4) return "Học viên";
    }

    roles = handleRoles();

    return (
        <div className={cx('infoWrapper')}>
            <div className={(context.role != 1 && context.role != 2) ? cx('info1') : cx("info2")}>
                <img src={image} /*style={{ width: "50%", height: "50%" }}*/ className={cx('image')}/>
                <p className={cx('name')}>Nguyễn Văn A</p>
                <p className={cx('role')}>{roles}</p>
            </div>
        </div>
    )
}

export default Info;