import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { useState } from 'react'
import './signup.scss';
import '~/pages/Login/login.scss';
import images from '~/assets/images';
import { signup } from '~/api/api';

const cx = classNames.bind(styles);

// const choose = document.getElementById("inputGroupSelect01");
// console.log(choose.value);

function SignUp() {
    const [upload, setUpload] = useState(false);
    const [data, setData] = useState({
        email: null,
        fullname: null,
        address: null,
        password: null,
        phone: null,
        cccd: null,
        role: "NguoiCanTimGiaSu",
        cv: null,
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signup(data);
        // window.location.href = "../";
        // console.log(data);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        upload === true ? setData(prev => ({
            ...prev,
            role: "GiaSu",
        })) : setData(data);
        
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="sign__container">
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="inner__container">
                        <div className="row align-items-stretch">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="d-flex align-items-center flex-column justify-content-center h-100 sign__left">
                                    <h1 className="left__title pb-2">Xin chào!</h1>
                                    <img className="sign_up_img" src={images.sign_up_img}></img>
                                    <div className="p-4 pb-5">
                                        Nền tảng kết nối gia sư với học viên. <br />
                                        Đăng ký để bắt đầu buổi học của riêng bạn!
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 p-0">
                                <div className="sign__right">
                                    <div className={cx('sign__title')}>Đăng ký</div>
                                    <div className={cx('form-floating mb-3')}>
                                        <input
                                            name="fullname"
                                            onChange={handleChange}
                                            type="text"
                                            className={cx('form-control')}
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        ></input>
                                        <label htmlFor="floatingInput">Họ và tên</label>
                                    </div>
                                    <div className={cx('form-floating mb-3')}>
                                        <input
                                            name="email"
                                            onChange={handleChange}
                                            type="email"
                                            className={cx('form-control')}
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        ></input>
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className={cx('form-floating mb-3')}>
                                        <input
                                            name="password"
                                            onChange={handleChange}
                                            type="password"
                                            className={cx('form-control')}
                                            id="floatingPassword"
                                            placeholder="Password"
                                        ></input>
                                        <label htmlFor="floatingPassword">Mật khẩu</label>
                                    </div>
                                    <div className={cx('form-floating mb-3')}>
                                        <input
                                            name="confirm"
                                            onChange={handleChange}
                                            type="password"
                                            className={cx('form-control')}
                                            id="floatingPassword"
                                            placeholder="Password"
                                        ></input>
                                        <label htmlFor="floatingPassword">Xác nhận mật khẩu</label>
                                    </div>
                                    <div className
                                        ="form-floating mb-3">
                                        <textarea
                                            name="address"
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Leave a comment here"
                                            id="floatingTextarea"
                                        ></textarea>
                                        <label htmlFor="floatingTextarea">Địa chỉ</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className={cx('form-floating mb-3')}>
                                                <input
                                                    name="phone"
                                                    onChange={handleChange}
                                                    type="text"
                                                    className={cx('form-control')}
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                ></input>
                                                <label htmlFor="floatingInput">Số điện thoại</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className={cx('form-floating mb-3')}>
                                                <input
                                                    name="cccd"
                                                    onChange={handleChange}
                                                    type="text"
                                                    className={cx('form-control')}
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                ></input>
                                                <label htmlFor="floatingInput">CMND/CCCD</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="input-group mb-3">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">
                                                    Bạn là
                                                </label>
                                                <select className="form-select"
                                                    id="inputGroupSelect01"
                                                    name="role"
                                                    onChange={async (event) => {
                                                        event.target.value === "2" ? setUpload(true) : setUpload(false)
                                                    }}
                                                >
                                                    <option defaultValue="0">Choose...</option>
                                                    <option value="1">Học viên</option>
                                                    <option value="2">Gia sư</option>
                                                </select>
                                            </div>
                                        </div>
                                        {
                                            (upload &&
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text" htmlFor="inputGroupFile01">
                                                            Upload
                                                        </label>
                                                        <input type="file" className="form-control" id="inputGroupFile01"></input>
                                                    </div>
                                                </div>)
                                        }
                                    </div>
                                    <div className="text-center pt-3 pb-4">
                                        <button className="btn-purple" type="submit">
                                            Đăng ký
                                        </button>
                                    </div>
                                    <div className="text-center pt-2">
                                        <a className="btn-gray" href="/">
                                            Quay lại
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default SignUp;
