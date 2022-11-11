import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import './signup.scss';
import '~/pages/Login/login.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

// const choose = document.getElementById("inputGroupSelect01");
// console.log(choose.value);

function SignUp() {
    return (
        <div className="sign__container">
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
                                        type="text"
                                        className={cx('form-control')}
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    ></input>
                                    <label for="floatingInput">Họ và tên</label>
                                </div>
                                <div className={cx('form-floating mb-3')}>
                                    <input
                                        type="email"
                                        className={cx('form-control')}
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    ></input>
                                    <label for="floatingInput">Email</label>
                                </div>
                                <div className={cx('form-floating mb-3')}>
                                    <input
                                        type="password"
                                        className={cx('form-control')}
                                        id="floatingPassword"
                                        placeholder="Password"
                                    ></input>
                                    <label for="floatingPassword">Mật khẩu</label>
                                </div>
                                <div className={cx('form-floating mb-3')}>
                                    <input
                                        type="password"
                                        className={cx('form-control')}
                                        id="floatingPassword"
                                        placeholder="Password"
                                    ></input>
                                    <label for="floatingPassword">Xác nhận mật khẩu</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea"
                                    ></textarea>
                                    <label for="floatingTextarea">Địa chỉ</label>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className={cx('form-floating mb-3')}>
                                            <input
                                                type="text"
                                                className={cx('form-control')}
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            ></input>
                                            <label for="floatingInput">Số điện thoại</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className={cx('form-floating mb-3')}>
                                            <input
                                                type="text"
                                                className={cx('form-control')}
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            ></input>
                                            <label for="floatingInput">CMND/CCCD</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" for="inputGroupSelect01">
                                                Bạn là
                                            </label>
                                            <select className="form-select" id="inputGroupSelect01">
                                                <option selected>Choose...</option>
                                                <option value="1">Học viên</option>
                                                <option value="2">Gia sư</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" for="inputGroupFile01">
                                                Upload
                                            </label>
                                            <input type="file" className="form-control" id="inputGroupFile01"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center pt-3 pb-4">
                                    <a className="btn-purple" href="#">
                                        Đăng ký
                                    </a>
                                </div>
                                <div className="text-center pt-2">
                                    <a className="btn-gray" href="#">
                                        Quay lại
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
