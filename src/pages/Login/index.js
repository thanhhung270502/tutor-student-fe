import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import clsx from 'clsx';
import './login.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={styles.sign__container}>
            <div className="container">
                <div className={styles.inner__container}>
                    <div className="row align-items-stretch">
                        <div className="col-lg-7 col-md-12 p-0">
                            <div className={cx('login__left')}>
                                <div className={cx('sign__title')}>Đăng nhập</div>
                                <div className={cx('form-floating mb-3')}>
                                    <input
                                        type="email"
                                        className={cx('form-control')}
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    ></input>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className={cx('form-floating')}>
                                    <input
                                        type="password"
                                        className={cx('form-control')}
                                        id="floatingPassword"
                                        placeholder="Password"
                                    ></input>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-check mt-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    ></input>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        <div className={cx('forget__password')}>Remember me</div>
                                    </label>
                                </div>
                                <div className={cx('text-center pt-3')}>
                                    <div className={cx('forget__password')}>Quên mật khẩu</div>
                                </div>
                                <div className={cx('text-center pt-3 pb-4')}>
                                    <a className={cx('btn-purple')} href="#">
                                        Đăng nhập
                                    </a>
                                </div>
                                <div className={cx('text-center pt-2 pb-2')}>
                                    <a className={cx('btn-gray')} href="#">
                                        Quay lại
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-lg-5 col-md-12 p-0')}>
                            <div className="login__right d-flex align-items-center flex-column justify-content-center h-100">
                                <h1 className="left__title pb-3">Xin chào!</h1>
                                <div className="pb-2">
                                    "Học tập là điều cốt lõi của sự khiêm nhường – học từ vạn vật và từ mọi người"
                                </div>
                                <div className="text-end">- J. Krishnamurti</div>
                                <img className="book pb-5" src={images.book}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
