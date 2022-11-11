import className from 'classnames/bind';
import styles from './button.module.scss';
import { useState } from 'react';
import { createStore } from 'state-pool';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Table from '~/pages/personal_info/table'

const cx = className.bind(styles);
const store = createStore();
var ID = 0;
function Button () {
    const [buttonID, setButtonID] = useState(0);
    const navigate = useNavigate();

    ID = buttonID;

    const handleClickButton0 = () => {
        setButtonID(0);
    };

    const handleClickButton1 = () => {
        setButtonID(1);
    };


    return (
        <div className={cx('infoButton')} >
            {ID}
            <div>
                <button onClick={handleClickButton0}>thong tin ca nhan</button>
            </div>
            
            <div>
                <button onClick={handleClickButton1}>lop hoc da tao</button>
            </div>
        </div>
    )
}

export default Button;
export const buttonID = ID;