import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { usePagination } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import myStyle from './styles.module.scss';
import { useState } from 'react';
import data from './ActivatedUser.json';
import TableStyle from '../../components/GlobalStyles/table.module.scss'



function RenderTutor(tutor) {
    const DetailStyle = {
        textAlign: "left",
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
                <td> {tutor.firstname + " " + tutor.lastname} </td>
                <td> {tutor.registionDay} </td>
                <td>
                    <Button className={myStyle['banned-btn']} onClick={() => handleClickActivate(tutor.ID)}>Cấm</Button>
                </td>
                    
            </tr>
            {
                showDetail &&
                <tr>
                    <td style={DetailStyle} colSpan={2}>
                        <p>Giới tính: {tutor.sex}</p>
                        <p>Số CCCD: {tutor.CCCD}</p>
                        <p>Ngày sinh: {tutor.DOB}</p>
                    </td>
                    <td style={DetailStyle} colSpan={3}>
                        <p>Địa chỉ: {tutor.address}</p>
                        <p>Email: {tutor.email}</p>
                        <p>Số điện thoại: {tutor.tel}</p>
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
        <Table className={TableStyle.table}>
            <thead>
                <tr>
                    <th onClick={() => sorting("ID")}>ID</th>
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