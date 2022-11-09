import './login.scss';

function Login() {
    return (
        <div className="sign__container">
            <div className="container">
                <div className="inner__container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="login__left">
                                <div className="sign__title">Đăng nhập</div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    ></input>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    ></input>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="form-check mt-3">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    ></input>
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-center pt-3 forget_password">Quên mật khẩu</div>
                                <div className="text-center pt-2">
                                    <div className="btn btn-primary btn-purple">Đăng nhập</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">Right</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
