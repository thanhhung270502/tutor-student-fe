// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement,
    LineElement, Title
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import style from '../Thongke/Thongke.module.scss';
import { useState } from 'react';
import data from './Data.csv';
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
    const [year, setYear] = useState('2022');
    const [tp, setTp] = useState('income');
    const [prd, setPrd] = useState('all');
    const [tm, setTm] = useState('1');
    const [wk, setWk] = useState('1');
    ////////dataset///////////////////////
    const labels1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const labels2 = ['I', 'II', 'III', 'IV'];
    const month1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const month2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
    const month3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
    const labelWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật']
    const data2 = [
        {
            key: '2019',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Doanh thu',
                    data: prd === 'month' ? [426, 731, 600, 695, 766, 372, 339, 385, 690, 470, 631, 392] : [1757, 1833, 1414, 1493],
                    backgroundColor: ['rgba(243, 172, 70, 1)'],

                },
            ],
        },
        {
            key: '2020',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Doanh thu',
                    data: prd === 'month' ? [568, 603, 398, 691, 543, 528, 662, 646, 724, 535, 755, 458] : [1569, 1762, 2032, 1748],
                    backgroundColor: ['rgba(243, 172, 70, 1)'],

                },
            ],

        },
        {
            key: '2021',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Doanh thu',
                    data: prd === 'month' ? [332, 745, 784, 720, 770, 627, 765, 459, 467, 482, 573, 394] : [1861, 2117, 1691, 1449],
                    backgroundColor: ['rgba(243, 172, 70, 1)'],
                },
            ],


        },
        {
            key: '2022',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Doanh thu',
                    data: prd === 'month' ? [374, 318, 771, 697, 526, 760, 758, 758, 367, 740, 512, 759] : [1463, 1983, 1883, 2011],
                    backgroundColor: ['rgba(243, 172, 70, 1)'],
                },
            ],
        }
    ]
    const data3 = [
        {
            key: '2019',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Lượng truy cập',
                    data: prd === 'month' ? [426, 731, 600, 695, 766, 372, 339, 385, 690, 470, 631, 392] : [1757, 1833, 1414, 1493],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                },
            ],
        },
        {
            key: '2020',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Lượng truy cập',
                    data: prd === 'month' ? [568, 603, 398, 691, 543, 528, 662, 646, 724, 535, 755, 458] : [1569, 1762, 2032, 1748],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                },
            ],

        },
        {
            key: '2021',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Lượng truy cập',
                    data: prd === 'month' ? [332, 745, 784, 720, 770, 627, 765, 459, 467, 482, 573, 394] : [1861, 2117, 1691, 1449],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                },
            ],


        },
        {
            key: '2022',
            labels: prd === 'month' ? labels1 : labels2,
            datasets: [
                {
                    label: 'Lượng truy cập',
                    data: prd === 'month' ? [374, 318, 771, 697, 526, 760, 758, 758, 367, 740, 512, 759] : [1463, 1983, 1883, 2011],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                },
            ],
        }
    ]
    const dataYear1 /*12 months */ =
    {
        labels: labels1,
        datasets: [
            {
                label: 'Lượng truy cập',
                data: [1445, 1639, 1647, 1451, 1642, 1637, 1520, 1754, 1697, 1739, 1676, 1805],
                backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
            },
        ]
    };
    const dataPeriod1 /*4 period */ =
    {
        labels: labels2,
        datasets: [
            {
                label: 'Lượng truy cập',
                data: [4731,4730,4971,5220],
                backgroundColor: ['rgba(255, 114, 125, 1)'],
                borderColor: ['rgba(255, 114, 125, 1)']
            },
        ]
    };
    const dataMonth1 /* 31 days of a month*/ = [
        {   
            key : '1',
            labels: tm === '2'? month2: tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12' ? month1 : month3,
            datasets: [
                {   
                    label: 'Lượng truy cập',
                    data: [66,20,86,78,48,66,96,21,26,44,52,61,24,67,40,39,47,93,87,51,24,63,13,53,12,51,95,22,30,19,91],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        },
        {   
            key : '2',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                   
                    label: 'Lượng truy cập',
                    data: [14,35,55,34,63,87,96,41,99,24,48,89,77,62,98,75,94,42,89,55,81,15,28,81,80,26,48,62],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        },
        {   
            key : '3',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                  
                    label: 'Lượng truy cập',
                    data:[25,47,96,12,50,94,33,98,92,16,100,60,56,73,35,84,49,68,53,17,98,83,60,61,24,53,28,43,24,30,18],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        },
        {   
            key : '4',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    label: 'Lượng truy cập',
                    data:[93,46,83,92,94,62,15,15,99,33,84,31,35,42,74,83,66,36,78,64,22,28,33,93,92,21,70,49,29,83], 
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '5',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    label: 'Lượng truy cập',
                    data:[57,13,29,36,62,80,40,73,88,82,96,31,68,63,89,57,62,20,45,44,70,59,12,80,16,86,34,34,93,86,98],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '6',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                   
                    label: 'Lượng truy cập',
                    data:[94,93,24,26,95,49,79,42,42,45,63,63,63,70,11,42,43,95,12,20,24,22,74,17,45,41,84,62,56,51],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        },     
        {   
            key : '7',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Lượng truy cập',
                    data: 
                        [41, 99,85,64,34,73,84,20,92,54,52,78,62,42,43,89,42,63,32,83,84,92,70,20,31,85,49,68,73,76,78]
                      ,
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '8',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                   
                    label: 'Lượng truy cập',
                    data: 
                        [16,89,58,76,86,68,29,23,98,97,72,62,34,81,85,99,73,69,51,33,75,84,60,73,11,83,76,99,28,28,56]
                      ,
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '9',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Lượng truy cập',
                    data:
                        [35,56,91,55,20,12,90,38,48,88,27,16,80,85,68,100,61,72,77,55,28,45,62,51,43,79,70,61,80,48]
                      ,
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '10',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Lượng truy cập',
                    data: [68,13,50,43,99,100,78,80,51,99,96,100,41,48,10,89,45,62,21,49,69,22,35,51,42,100,90,69,17,68,67]
                    ,
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '11',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Lượng truy cập',
                    data: [55,98,47,92,43,89,63,93,68,60,52,88,42,89,75,76,10,61,58,92,70,50,93,100,14,69,88,33,97,78],
                      
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }, 
        {   
            key : '12',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    label: 'Lượng truy cập',
                    data: [60,11,26,34,83,59,78,48,80,72,55,59,73,55,18,55,24,45,79,45,59,65,96,56,38,15,40,97,15,52,24],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)']
                }
            ]
        }    
    ];
    const dataWeek1 = [
        {
            key : '1',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Lượng truy cập',
                    data: [66,20,86,78,48,66,96],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)'] ,

                }

            ]
        },
        {
            key : '2',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Lượng truy cập',
                    data: [21,26,44,52,61,24,67]
                      ,
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)'] ,

                }

            ]
        },
        {
            key : '3',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Lượng truy cập',
                    data: [40,39,47,93,87,51,24],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)'] ,

                }

            ]
        },
        {
            key : '4',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Lượng truy cập',
                    data: [63,13,53,12,51,95,22],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                    borderColor: ['rgba(255, 114, 125, 1)'] ,

                }

            ]
        }
    ];
    const dataYear2 /*12 months */ =
    {
        labels: labels1,
        datasets: [
            {
                label: 'Doanh thu',
                data: [1445, 1639, 1647, 1451, 1642, 1637, 1520, 1754, 1697, 1739, 1676, 1805],
                 backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
            },
        ]
    };
    const dataPeriod2 /*4 period */ =
    {
        labels: labels2,
        datasets: [
            {
                label: 'Doanh thu',
                data: [4731,4730,4971,5220],
                 backgroundColor: ['rgba(243, 172, 70, 1)'],
               
            },
        ]
    };
    const dataMonth2 /* 31 days of a month*/ = [
        {   
            key : '1',
            labels: tm === '2'? month2: tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12' ? month1 : month3,
            datasets: [
                {   
                    label: 'Doanh thu',
                    data: [66,20,86,78,48,66,96,21,26,44,52,61,24,67,40,39,47,93,87,51,24,63,13,53,12,51,95,22,30,19,91],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        },
        {   
            key : '2',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                   
                    label: 'Doanh thu',
                    data: [14,35,55,34,63,87,96,41,99,24,48,89,77,62,98,75,94,42,89,55,81,15,28,81,80,26,48,62],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        },
        {   
            key : '3',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                  
                    label: 'Doanh thu',
                    data:[25,47,96,12,50,94,33,98,92,16,100,60,56,73,35,84,49,68,53,17,98,83,60,61,24,53,28,43,24,30,18],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        },
        {   
            key : '4',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    label: 'Doanh thu',
                    data:[93,46,83,92,94,62,15,15,99,33,84,31,35,42,74,83,66,36,78,64,22,28,33,93,92,21,70,49,29,83], 
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '5',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    label: 'Doanh thu',
                    data:[57,13,29,36,62,80,40,73,88,82,96,31,68,63,89,57,62,20,45,44,70,59,12,80,16,86,34,34,93,86,98],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '6',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                   
                    label: 'Doanh thu',
                    data:[94,93,24,26,95,49,79,42,42,45,63,63,63,70,11,42,43,95,12,20,24,22,74,17,45,41,84,62,56,51],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        },     
        {   
            key : '7',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Doanh thu',
                    data: 
                        [41, 99,85,64,34,73,84,20,92,54,52,78,62,42,43,89,42,63,32,83,84,92,70,20,31,85,49,68,73,76,78]
                      ,
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '8',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                   
                    label: 'Doanh thu',
                    data: 
                        [16,89,58,76,86,68,29,23,98,97,72,62,34,81,85,99,73,69,51,33,75,84,60,73,11,83,76,99,28,28,56]
                      ,
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '9',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Doanh thu',
                    data:
                        [35,56,91,55,20,12,90,38,48,88,27,16,80,85,68,100,61,72,77,55,28,45,62,51,43,79,70,61,80,48]
                      ,
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '10',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Doanh thu',
                    data: [68,13,50,43,99,100,78,80,51,99,96,100,41,48,10,89,45,62,21,49,69,22,35,51,42,100,90,69,17,68,67]
                    ,
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '11',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    
                    label: 'Doanh thu',
                    data: [55,98,47,92,43,89,63,93,68,60,52,88,42,89,75,76,10,61,58,92,70,50,93,100,14,69,88,33,97,78],
                      
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }, 
        {   
            key : '12',
            labels: (tm === '2') ? month2: (tm === '1' || tm === '3' || tm ==='5'||tm === '7' || tm === '8' || tm ==='10' || tm === '12')? month1 : month3,
            datasets:[
                {   
                    label: 'Doanh thu',
                    data: [60,11,26,34,83,59,78,48,80,72,55,59,73,55,18,55,24,45,79,45,59,65,96,56,38,15,40,97,15,52,24],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                   
                }
            ]
        }    
    ];
    const dataWeek2 = [
        {
            key : '1',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Doanh thu',
                    data: [66,20,86,78,48,66,96],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                    

                }

            ]
        },
        {
            key : '2',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Doanh thu',
                    data: [21,26,44,52,61,24,67]
                      ,
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                    

                }

            ]
        },
        {
            key : '3',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Doanh thu',
                    data: [40,39,47,93,87,51,24],
                     backgroundColor: ['rgba(243, 172, 70, 1)'],
                    

                }

            ]
        },
        {
            key : '4',
            labels: labelWeek,
            datasets:[
                {
                    label: 'Doanh thu',
                    data: [63,13,53,12,51,95,22],
                    backgroundColor: ['rgba(255, 114, 125, 1)'],
                }

            ]
        }
    ];
    const tempData1 =   prd === 'all' ? dataYear1 : prd === 'period'? dataPeriod1 : prd ==='month' ? dataMonth1.find(data=>data.key === tm) : dataWeek1.find(data=>data.key === wk);
    
    const tempData2 = prd === 'all' ? dataYear2 : prd === 'period'? dataPeriod2 : prd ==='month' ? dataMonth2.find(data=>data.key === tm) : dataWeek2.find(data=>data.key === wk);
    const tempData = tp === 'income'?  tempData2 : tempData1;
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
                            <Pie options={{ maintainAspectRatio: false }} className="style.pie-chart" data={data1} />
                        </div>
                        <br />
                        <br />
                        <h3 style={{ fontWeight: 700 }}>Số lớp học đã kết nối</h3>
                        <h1 style={{ color: '#7D73C1', fontWeight: 700 }}> 590 </h1>
                    </div>
                    <div className={style['col-9']}>

                        <div className={style['row']}>
                            <span className={style['selects']}>
                                <a href= {data} download = "Dulieu.csv">
                                    <button className="btn btn-secondary" id={style['Xuat']} >Xuất kết quả </button>
                                </a>
                            </span>
                            <span className={style['selects']}>
                                <select id={style['type']} value={tp} onChange={e => setTp(e.target.value)}>
                                    <option selected>Chọn kiểu dữ liệu </option>
                                    <option value="income">Doanh thu</option>
                                    <option value="interact">Lượng truy cập</option>
                                </select>
                            </span>
                            <span className={style['selects']}>
                                <select id={style['year']} value={year} onChange={e => setYear(e.target.value)}>
                                    <option selected >Chọn năm</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                            </span>
                            <span className={style['selects']}>
                                <select
                                    value={prd} onChange={e => setPrd(e.target.value)}
                                    datatype='btn-default'
                                    id={style['often']}
                                >
                                    <option selected>
                                        Chọn chu kì
                                    </option>
                                    <option value="all">Cả năm</option>
                                    <option value="period">Theo quý</option>
                                    <option value="month">Theo tháng</option>
                                    <option value="week">Theo tuần</option>
                                </select>
                            </span>
                            {
                                (prd === 'month') ?
                                    <span className={style['selects']}>
                                        <select value={tm} onChange={e => setTm(e.target.value)} id={style['tm']}>
                                            <option value="1" >Tháng 1</option>
                                            <option value="2" >Tháng 2</option>
                                            <option value="3" >Tháng 3</option>
                                            <option value="4" >Tháng 4</option>
                                            <option value="5" >Tháng 5</option>
                                            <option value="6" >Tháng 6</option>
                                            <option value="7" >Tháng 7</option>
                                            <option value="8" >Tháng 8</option>
                                            <option value="9" >Tháng 9</option>
                                            <option value="10" >Tháng 10</option>
                                            <option value="11" >Tháng 11</option>
                                            <option value="12" >Tháng 12</option>
                                        </select>
                                    </span>
                                    : (prd === 'week') ?

                                        <span className={style['selects']}>
                                            <select value={wk} onChange={e => setWk(e.target.value)} id={style['wk']}>
                                                <option value="1" >Tuần 1</option>
                                                <option value="2" >Tuần 2</option>
                                                <option value="3" >Tuần 3</option>
                                                <option value="4" >Tuần 4</option>
                                            </select>
                                            <label> Của </label>
                                            <select value={tm} onChange={e => setTm(e.target.value)} id={style['tm']}>
                                                <option value="1" >Tháng 1</option>
                                                <option value="2" >Tháng 2</option>
                                                <option value="3" >Tháng 3</option>
                                                <option value="4" >Tháng 4</option>
                                                <option value="5" >Tháng 5</option>
                                                <option value="6" >Tháng 6</option>
                                                <option value="7" >Tháng 7</option>
                                                <option value="8" >Tháng 8</option>
                                                <option value="9" >Tháng 9</option>
                                                <option value="10" >Tháng 10</option>
                                                <option value="11" >Tháng 11</option>
                                                <option value="12" >Tháng 12</option>
                                            </select>
                                        </span>

                                   
                                        : <span />
                            }

                        </div>
                        {
                            (tp === 'income') ? <Bar data={tempData} /> : <Line data={tempData} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Thongke;
