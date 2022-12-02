// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement,
    LineElement, Title } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import style from './'
import { useState} from 'react';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement,
    LineElement,);

export const data1 = {
    labels: ['Gia sư', 'Học viên'],
    datasets: [
        {
            label: 'of registration',
            data: [434, 800],
            backgroundColor: ['rgba(255, 114, 125, 1)', 'rgba(243, 172, 70, 1)'],
            borderColor: ['white'],
            borderWidth: 1,
        },
    ],
};


function Thongke() {
    ////useState
    const [year, setYear] = useState('2019');
    const [tp, setTp] = useState('income');
    const [prd,setPrd] = useState('month');

    ////////dataset///////////////////////
    const labels1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const labels2 = ['I', 'II', 'III', 'IV'];
    const data2 = [
    {   
        key: '2019',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Doanh thu',
                data: prd ==='month'? [426, 731 ,600 ,695, 766 ,372, 339, 385, 690, 470, 631, 392] : [1757,1833,1414,1493],
                backgroundColor: ['rgba(243, 172, 70, 1)'],
              
            },
        ],
    },
    {   
        key: '2020',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Doanh thu',
                data: prd ==='month'? [568 ,603, 398, 691, 543, 528, 662, 646, 724, 535, 755, 458] : [1569, 1762, 2032, 1748],
                backgroundColor: ['rgba(243, 172, 70, 1)'],
               
            },
        ],
        
    },
    {   
        key: '2021',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Doanh thu',
                data:prd ==='month'? [332,745,784,720,770,627,765,459,467,482,573,394]: [1861, 2117, 1691, 1449],
                backgroundColor: ['rgba(243, 172, 70, 1)'],
            },
        ],
        
            
    },
    {   
        key: '2022',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Doanh thu',
                data:prd ==='month'? [374, 318,771,697,526,760,758,758,367,740,512,759] : [1463, 1983, 1883, 2011],
                backgroundColor: ['rgba(243, 172, 70, 1)'],
            },
        ],
    }
]
    const data3 = [
    {   
        key: '2019',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Lượng truy cập',
                data: prd ==='month'? [426, 731 ,600 ,695, 766 ,372, 339, 385, 690, 470, 631, 392] : [1757,1833,1414,1493],
                backgroundColor: ['rgba(255, 114, 125, 1)'],
                borderColor :['rgba(255, 114, 125, 1)']
            },
        ],
    },
    {   
        key: '2020',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Lượng truy cập',
                data: prd ==='month'? [568 ,603, 398, 691, 543, 528, 662, 646, 724, 535, 755, 458] : [1569, 1762, 2032, 1748],
                backgroundColor: ['rgba(255, 114, 125, 1)'],
                borderColor :['rgba(255, 114, 125, 1)']
            },
        ],
        
    },
    {   
        key: '2021',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Lượng truy cập',
                data:prd ==='month'? [332,745,784,720,770,627,765,459,467,482,573,394]: [1861, 2117, 1691, 1449],
                backgroundColor: ['rgba(255, 114, 125, 1)'],
                borderColor :['rgba(255, 114, 125, 1)']
            },
        ],
        
            
    },
    {   
        key: '2022',
        labels: prd ==='month' ? labels1: labels2,
        datasets: [
            {
                label: 'Lượng truy cập',
                data:prd ==='month'? [374, 318,771,697,526,760,758,758,367,740,512,759] : [1463, 1983, 1883, 2011],
                backgroundColor: ['rgba(255, 114, 125, 1)'],
                borderColor :['rgba(255, 114, 125, 1)']
            },
        ],
    }
]
const tempData = tp === 'income'? data2.find(data => data.key === year) : data3.find(data => data.key === year) ;
const tempT =  tp === 'income'? Bar : Line;
    return (
        <div className="p-3 pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-3" id="colLeft">
                        <h3 style={{ fontWeight: 700 }}>
                            {' '}
                            Số tài khoản được tạo <br />{' '}
                        </h3>
                        <h1 style={{ color: '#7D73C1', fontWeight: 700 }}> 1234 </h1>
                        <div className="pie-wrapper">
                            <Pie options={{ maintainAspectRatio: false }} className="pie-chart" data={data1} />
                        </div>
                        <br />
                        <br />
                        <h3 style={{ fontWeight: 700 }}>Số lớp học đã kết nối</h3>
                        <h1 style={{ color: '#7D73C1', fontWeight: 700 }}> 590 </h1>
                    </div>
                    <div className="col-9">
                        
                        <div className="row">
                            <div className="col-3">
                                <button className="btn btn-secondary" id = 'Xuat' >Xuất kết quả </button>
                            </div>
                            <div className="col-3">
                                <select class="form-select" aria-label="Default select example" id = 'year' value = {year} onChange = {e=>setYear(e.target.value)}>
                                    <option selected >Chọn năm</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select class="form-select" aria-label="Default select example" id = 'type' value = {tp} onChange = {e=>setTp(e.target.value)}>
                                    <option selected>Chọn kiểu dữ liệu </option>
                                    <option value="income">Doanh thu</option>
                                    <option value="interact">Lượng truy cập</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    value = {prd} onChange = {e=>setPrd(e.target.value)}
                                    id = 'often'
                                    datatype='btn-default'
                                >
                                    <option selected>
                                        Chọn chu kì
                                    </option>
                                    <option value="month">Theo tháng</option>
                                    <option value="period">Theo quý</option>
                                </select>
                            </div>
                        </div>
                        {
                            (tp === 'income') ? <Bar data = {tempData}/>: <Line data={tempData} />
                        }
                    </div>
                </div>
                <div className="row"></div>
            </div>
        </div>
    );
}
export default Thongke;
