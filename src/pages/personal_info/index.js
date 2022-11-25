import className from "classnames/bind";
import Sidebar, {bID} from "./sidebar";
import Main from "./main";
import Table from "./table/table";
import styles from "./personal_info.module.scss";
import { useState } from "react";
import button from "./sidebar/button";
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


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar>
                    <aside className={cx('buttonWrapper')}>
                        <button 
                            onClick={handleClickButton0}
                            style={{ backgroundColor: buttonID ? "" : "#FF727D" }}
                            className={cx('button')}>Thông tin</button>
                        <button 
                            onClick={handleClickButton1}
                            style={{ backgroundColor: buttonID == 0 ? "" : "#FF727D" }}
                            className={cx('button')}>Lớp đã tạo</button>
                    </aside>
                </Sidebar>
                <div className={cx('content')}>
                    {
                        ID === 1 ? <Table/> : <Main/>
                    }

                </div>
            </div>
        </div>
    )
}
export default Personal_info;
