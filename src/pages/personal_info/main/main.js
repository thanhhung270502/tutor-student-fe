import { useState } from "react";
import className from 'classnames/bind';
import styles from './main.module.scss'
import Popup from './popup';

const cx = className.bind(styles);

function Main () {

    const [name, setName] = useState('Nguyen Van A')
    const [email, setEmail] = useState('anv@gmail.com')
    const [address, setaddress] = useState('KTX Khu A, DHQG HCM')
    const [phone, setphone] = useState('091213145')
    const [date, setDate] = useState('19/01/2002')
    const [CCCD, setCCCD] = useState('012345678910')
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <aside className={cx('wrapper')}>
            <p className={cx("title")}>Thông tin cá nhân</p>
            <div className={cx('input')}>
                <div>
                    <span className={cx('fieldName')}>Họ và tên</span>
                </div>
                <input 
                    className={cx('inputField')}
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    disabled
                />
                <div>
                    <span className={cx('fieldName')}>Email</span>
                </div>
                <input 
                    className={cx('inputField')}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <div>
                    <span className={cx('fieldName')}>Ngày sinh</span>
                </div>
                <input
                    className={cx('inputField')} 
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                    disabled
                />
                <div>
                    <span className={cx('fieldName')}>Số điện thoại</span>
                </div>
                <input  
                    className={cx('inputField')}
                    value={phone}
                    onChange={e=>setphone(e.target.value)}
                />
                <div>
                    <span className={cx('fieldName')}>Số CCCD</span>
                </div>
                <input  
                    className={cx('inputField')}
                    value={CCCD}
                    onChange={e=>setCCCD(e.target.value)}
                    disabled
                />
                <div>
                    <span className={cx('fieldName')}>Địa chỉ</span>
                </div>
                <input  
                    className={cx('inputField')}
                    value={address}
                    onChange={e=>setaddress(e.target.value)}
                />
            </div>
            
            <div>   
                <button className={cx('save')}
                    //onClick={e => setUserInput(e.target.value)}
                    onClick={() => setOpenPopup(true)}
                >Lưu</button>
            </div>
            <Popup 
                trigger={openPopup}
                setTrigger={setOpenPopup}>
            </Popup>
        </aside>
    )
}

export default Main;