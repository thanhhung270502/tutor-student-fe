import className from "classnames/bind";
import Sidebar, {bID} from "./sidebar";
import Main from "./main";
import Table from "./table/table";
import styles from "./personal_info.module.scss";
import button from "./sidebar/button";
import React, {useState, useEffect, useContext} from "react";
import { AppContext } from 'src/store/appContext';
import image from '~/image/backG.png'
//import Button, { buttonID } from "./sidebar/button";

const cx = className.bind(styles);
var ID;
function Personal_info({children}) {
    const [buttonID, setButtonID] = useState(0);

    ID = buttonID;

    if(buttonID == 0) button.style = 'red';

    const handleClickButton0 = (e) => {
        setButtonID(0);
    };

    const handleClickButton1 = () => {
        setButtonID(1);
    };

    const context = useContext(AppContext);

    // const context = 1;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar>
                    {context.role != 1 && context.role != 2 ? 
                        <aside className={cx('buttonWrapper')}>
                                <button 
                                    onClick={handleClickButton0}
                                    style={{ backgroundColor: buttonID ? "" : "#FF727D" }}
                                    className={cx('button')}>Thông tin</button>
                                <button 
                                    onClick={handleClickButton1}
                                    style={{ backgroundColor: buttonID == 0 ? "" : "#FF727D" }}
                                    className={cx('button')}>Lớp học</button>
                        </aside> : " "}
                </Sidebar>
                <div className={cx('content')}>
                    {
                        ID == 1 ? (context.role == 3 ? <p className={cx('title')}>CÁC LỚP ĐANG DẠY</p> : <p className={cx('title')}>CÁC LỚP ĐÃ TẠO</p>)
                        : <p className={cx('title')}>THÔNG TIN CÁ NHÂN</p>
                    }
                    {
                        // context.role !== 1 ? <Main/> : 
                        ID === 1 ? <Table/> : <Main/>
                    }

                </div>
            </div>
        </div>
    )
}
export default Personal_info;
