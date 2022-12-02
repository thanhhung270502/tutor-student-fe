import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import AOS from 'aos'
import clsx from 'clsx'
import style from './AboutUs.module.css'

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <div className={`container ${style.container}`}>
            <div className={`row ${style.layout}`}>
                <div className="col-sm-6">
                    <h1 className={`${clsx(style.h1)}`}>What is</h1>
                    <h1 className={`${clsx(style.h1, style.bott, style.purple)}`}>TUTOR-STUDENT MATCHING SERVICE?</h1>
                    <span className={style.pink}>TUTOR-STUDENT MATCHING SERVICE </span>
                    <span className={style.p}>là dịch vụ nhằm mục tiêu tạo ra một môi trường tiện lợi, chuyên nghiệp cho việc tìm kiếm, và kết nối giữa học viên và gia sư</span>
                    <img data-aos="fade-right" src="./figure_3.png" alt="figure-3" className={`algin-center ${clsx(style.figure3)}`} />
                </div>
                <div className="col-sm-6">
                    <h1 className={`${clsx(style.h1, style.pink)}`}>Tại sao là</h1>
                    <h1 className={`${clsx(style.h1, style.bott)}`}>TUTOR-STUDENT MATCHING SERVICE?</h1>
                    <p className={style.p}>
                        Lớp học ở trường hay trung tâm giáo dục thường là nơi có số lượng học viên cao, với một giới hạn về thời gian giảng dạy cùng chương trình học khối lượng lớn, các giáo viên ở trường - dù đã cố cung cấp chất lượng giảng dạy tốt nhất song đôi khi không thể phát giác cũng như giải quyết hết tất cả vấn đề học tập mà học sinh của mình gặp phải. Nhiều học viên không thể hoà nhập với hệ thống trường lớp hiện đại, không có cơ hội thể hiện điểm mạnh của mình. Khác với việc học ở trường hay trung tâm, học gia sư là hình thức học 1 kèm 1, học viên được quan tâm, chú ý đến tiến độ học tập một cách kỹ càng. Ngoài ra, lịch học luôn được sắp xếp linh động giữa thầy và trò, người học có thể quản lý thời gian một cách hiệu quả.
                    </p>
                    <p className={style.p}>
                        Ở các thành phố lớn hiện nay, đa số các phụ huynh đều bận rộn với công việc hằng ngày, nhiều người cảm thấy mình không dành đủ thời gian để chăm lo chuyện học cho con cái. Do vậy, học gia sư là một trong các giải pháp được tin cậy và ngày càng trở nên phổ biến giúp phụ huynh nắm bắt tình hình học tập của con mình.
                    </p>
                    <img data-aos="fade-left" src="./bubs.png" alt="bubbles" className={`algin-center ${clsx(style.figure3)}`} />
                    <h1 className={`${clsx(style.h1, style.orange, style.bott)}`}>Sứ mạng và mục tiêu</h1>
                    <p className={style.p}>Vì những lý do trên, chúng tôi quyết định sẽ tạo ra một dịch vụ cung cấp một môi trường chuyên nghiệp và hiệu quả hơn nhằm tạo ra liên kết giữa gia sư và học viên với nhau.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;