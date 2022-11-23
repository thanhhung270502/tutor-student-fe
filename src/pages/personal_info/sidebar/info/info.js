import className from 'classnames/bind';
import styles from './info.module.scss'
import image from '~/image/pic.png'

const cx = className.bind(styles);

function Info () {
    return (
        <div className={cx('infoWrapper')}>
            <div className={cx('info')}>
                <img src={image} /*style={{ width: "50%", height: "50%" }}*/ className={cx('image')}/>
                <p className={cx('name')}>Nguyễn Văn A</p>
                <p className={cx('role')}>Gia sư</p>
            </div>
        </div>
    )
}

export default Info;