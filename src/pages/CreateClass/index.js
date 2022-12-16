import { useState } from 'react'
import './create_class.scss';
import { createClass } from '~/api/api';

function Createclass() {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prev => ({
            ...prev,
            [name]: value.toUpperCase(),
        }));
        console.log(data.rank)
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
                                    <select onChange={handleChange} name="rank" className="form-select" defaultValue="KHÁC">
                                        <option value="Khác">Khác</option>
                                        <option value="Tiểu học">Tiểu học</option>
                                        <option value="Trung học">Trung học cơ sở</option>
                                        <option value="Trung học phổ thông">Trung học phổ thông</option>
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
                                                {
                                                    data.rank === "TIỂU HỌC" ?
                                                        <>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </> : (data.rank === "TRUNG HỌC" ? <>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </> : (data.rank === "TRUNG HỌC PHỔ THÔNG" ?
                                                            <>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>
                                                            </> :
                                                            <option value="Khác">Khác</option>))


                                                }
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
                                                <option value="Ngữ văn">Ngữ văn</option>
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
                                    <textarea onChange={handleChange} name="time" className="form-control" placeholder="19:00-21:00 Thứ 2, 4, 6..." rows="1"></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Số điện thoại
                                    </label>
                                    <input
                                        name="phone"
                                        type="phone"
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
                                                type="date"
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
                                                type="date"
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
