import React from "react";
import classNames from "classnames/bind";
import styles from './popup.module.scss'

const cx = classNames.bind(styles);

function Popup(props) {
    return (props.trigger) ? (
        <div className={cx('popup')}>
            <div className={cx('popupInner')}>
                {props.children}
                <button 
                    className={cx('accept')}
                    onClick={() => props.setTrigger(false)}>
                        Xác nhận
                </button>
                <button 
                    className={cx('cancel')}
                    onClick={() => props.setTrigger(false)}>
                    Hủy
                </button>
            </div>
        </div>
    ): "";
}

export default Popup;