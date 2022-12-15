import { useState } from 'react'
import './create_class.scss';
import axios from 'axios';

function Createclass() {
    const URL = "http://localhost:3000";

    const [data, setData] = useState({
        rank: null,
        formality: '',
        grade: null,
        subject: '',
        address: '',
        time: '',
        phone: '',
        time_to_start: '',
        time_to_end: '',
        level: '',
        salary: '',
        other: '',
        status: ''
    })

    const createClass = async (formdata) => {
        console.log(data)
        const res = await axios.post(`${URL}/api/v1/classrooms`, formdata)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prev => ({
            ...prev,
            [name]: value.toUpperCase(),
        }));
        console.log('hi')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // await createClass(data);
        const res = await createClass(data);
        console.log(res);
    }

    return (
        <div className="p-3 pt-5 pb-4">
            <div className="container">
                <div className="create_class__container">
                    <form onSubmit={handleSubmit.bind(this)}>
                        <h3>Tạo lớp</h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Cấp bậc
                                    </label>
                                    <select onChange={handleChange} name="rank" className="form-select" aria-label="Default select example">
                                        <option value="1">
                                            Tiểu học
                                        </option>
                                        <option value="2">Trung học cơ sở</option>
                                        <option value="3">Trung học phổ thông</option>
                                        <option value="4">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Hình thức
                                    </label>
                                    <select onChange={handleChange} name="formality" className="form-select" aria-label="Default select example">
                                        <option value="1">
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
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                Khối lớp
                                            </label>
                                            <select onChange={handleChange} name="grade" className="form-select" aria-label="Default select example">
                                                <option value="1">
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
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                Môn học
                                            </label>
                                            <select onChange={handleChange} name="subject" className="form-select" aria-label="Default select example">
                                                <option value="Toán">
                                                    Toán
                                                </option>
                                                <option value="Tiếng Việt">Tiếng Việt</option>
                                                <option value="Vật Lý">Vật Lý</option>
                                                <option value="Hóa Học">Hóa Học</option>
                                                <option value="Sinh Học">Sinh Học</option>
                                                <option value="Ngữ Văn">Ngữ Văn</option>
                                                <option value="Anh Văn">Anh Văn</option>
                                                <option value="Địa Lý">Địa Lý</option>
                                                <option value="Lịch Sử">Lịch Sử</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Địa chỉ
                                    </label>
                                    <textarea onChange={handleChange} name="address" className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Thời gian
                                    </label>
                                    <textarea onChange={handleChange} name="time" className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Số điện thoại
                                    </label>
                                    <input
                                        name="phone"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="0923 123 123"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Độ dài khóa học
                                </label>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <input
                                                name="time_to_start"
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Từ..."
                                                onChange={handleChange}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <input
                                                name="time_to_end"
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Đến..."
                                                onChange={handleChange}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Trình độ gia sư
                                    </label>
                                    <input
                                        name="level"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="0923 123 123"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Lương
                                    </label>
                                    <input
                                        name="salary"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="2.000.000đ"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Yêu cầu khác
                                    </label>
                                    <input
                                        name="other"
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="E.g: Gia sư nữ,..."
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        {/* <div className="text-end"> */}
                        <button className="text-end btn btn-danger btn-create" type="submit">Tạo</button>
                        {/* </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Createclass;
