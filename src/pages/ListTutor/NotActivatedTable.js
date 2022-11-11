// import { Button, Table, ThemeProvider } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';
import style from './styles.scss';
import { useState } from 'react';
import data from './NotActivatedUser.json';

function RenderTutor(tutor) {
    const DetailStyle = {
        textAlign: "left",
        paddingLeft: "100px",
        paddingTop: "20px",
        paddingBottom: "20px"
    }
    const [showDetail, setShowDetail] = useState(false);

    function handleClickDetail() {
        setShowDetail(showDetail => !showDetail);
    }
    
    function handleClickActivate(ID) {
        handleClickDetail();
        //removeTutor(ID);
    }

    return (
        <>
            <tr key={tutor.ID} onClick={handleClickDetail}>
                <td> {tutor.ID} </td>
                <td> {tutor.name} </td>
                <td> {tutor.registionDay} </td>
                <td>
                    <Button className='success-btn'onClick={() => handleClickActivate(tutor.ID)}>Đồng ý</Button>
                    <Button className='warning-btn'onClick={() => handleClickActivate(tutor.ID)}>Từ chối</Button>
                </td>
                    
            </tr>
            {
                showDetail &&
                <tr>
                    <td style={DetailStyle} colSpan={2}>
                        <p>{tutor.CCCD}</p>
                        <p>{tutor.DOB}</p>
                        <p>{tutor.address}</p>
                    </td>
                    <td style={DetailStyle} colSpan={3}>
                        <p>{tutor.CCCD}</p>
                        <p>{tutor.DOB}</p>
                        <p>{tutor.address}</p>
                    </td>
                </tr> 
            }
        </>    
    );
}

export default function Render() {
    const [myData, setData] = useState(data);
    const [order, setOrder] = useState("ASC");

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...myData].sort((a,b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...myData].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC");
        }
    }
    return (
        <Table className='shadow rounded-4' striped hover>
            <thead className='custom-thead'>
                <tr>
                    <th onClick={() => sorting("ID")}>
                        ID
                    </th>
                    <th onClick={() => sorting("name")}>Họ và tên</th>
                    <th onClick={() => sorting("registionDay")}>Ngày đăng kí</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {myData.map(RenderTutor)}
            </tbody>
        </Table>    
    )
}