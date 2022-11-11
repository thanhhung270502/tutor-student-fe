import './create_class.scss';

function Createclass() {
    return (
        <div className="p-3 pt-5 pb-4">
            <div className="container">
                <div className="create_class__container">
                    <h3>Tạo lớp</h3>
                    <div className="row">
                        <div className="col-6">
                            <div class="mb-3 mt-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Cấp bậc
                                </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">
                                        Tiểu học
                                    </option>
                                    <option value="2">Trung học cơ sở</option>
                                    <option value="3">Trung học phổ thông</option>
                                    <option value="4">Khác</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3 mt-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Hình thức
                                </label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected value="1">
                                        Online
                                    </option>
                                    <option value="2">Offline</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">
                                            Khối lớp
                                        </label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected value="1">
                                                1
                                            </option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">Khác</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">
                                            Môn học
                                        </label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected value="1">
                                                Toán
                                            </option>
                                            <option value="2">Tiếng Việt</option>
                                            <option value="3">Vật Lý</option>
                                            <option value="4">Hóa Học</option>
                                            <option value="5">Sinh Học</option>
                                            <option value="6">Ngữ Văn</option>
                                            <option value="7">Anh Văn</option>
                                            <option value="8">Địa Lý</option>
                                            <option value="9">Lịch Sử</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Địa chỉ
                                </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Thời gian
                                </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="0923 123 123"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label for="exampleFormControlInput1" className="form-label">
                                Độ dài khóa học
                            </label>
                            <div className="row">
                                <div className="col-6">
                                    <div class="mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Từ..."
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Đến..."
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Trình độ gia sư
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="0923 123 123"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Lương
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="2.000.000đ"
                                ></input>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Yêu cầu khác
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="E.g: Gia sư nữ,..."
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="text-end">
                        <div className="btn btn-danger btn-create">Tạo</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Createclass;
