import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Style from './styles.module.scss'
import Image from './image.js'
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';

function byCashed() {

  return (
    <Card className={Style['custom-card']}>
      <div className='text-center'>THÔNG TIN THANH TOÁN</div>
      <div>Số tiền: 200.000 VND</div>
      <div>Mã thanh toán: 1234T011</div>
      <div>Địa chỉ trung tâm: 268 Lý Thường Kiệt, phường 12, quận 10, TP. Hồ Chí Minh</div>
      <div>SĐT trung tâm: 028 3865 4087</div>
      <Button className={Style['custom-payment-button']}>Thanh toán</Button>
    </Card>
  )
}

function byMomo() {

  return (
    <Card className={Style['custom-card']}>
      <div className='text-center'>THÔNG TIN THANH TOÁN</div>
      <div>Số tiền: 200.000 VND</div>
      <div>Mã thanh toán: 1234T011</div>
      <div>SĐT Momo: 093 333 4333</div>
      <div>Tên tài khoản: Công ty cổ phần giáo dục ABC</div>
      <div>Nội dung thanh toán: Thanh toan 1234T011</div>
      <Button className={Style['custom-payment-button']}>Thanh toán</Button>
    </Card>
  )
}

function byCreditCard() {

  return (
    <Card className={Style['custom-card']}>
      <div className='text-center'>THÔNG TIN THANH TOÁN</div>
      <div>Số tiền: 200.000 VND</div>
      <div>Mã thanh toán: 1234T011</div>
      <div>Tên ngân hàng: Ngân hàng Phương Đông - chi nhánh Thủ Đức (OCB)</div>
      <div>Số tài khoản: 123456789</div>
      <div>Tên tài khoản: Công ty cổ phần giáo dục ABC</div>
      <div>Nội dung thanh toán: Thanh toan 1234T011</div>
      <Button className={Style['custom-payment-button']}>Thanh toán</Button>
    </Card>
  )
}

function Columns() {
  const [payment, setPayment] = useState("");
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  function handleChange() {
    setChange(change => !change);
  }

  function handlePayment(paymentMethod) {
    setPayment(paymentMethod);
  }

  function handleClick(paymentMethod, changeState) {
    console.log("Trước khi thay đổi:", change, payment);
    handleChange();
    handlePayment(paymentMethod);
    if (payment ===  paymentMethod && changeState === true) {
      setShow(false);
    }
    else {
      setShow(true);
    }
    console.log("Sau khi thay đổi: ",changeState, payment);
  }

  return (
    <Container className='justify-content-center'>
      <Row>
        <Col className={Style['custom-col']}>
          <img src={Image.cash} width="150px" className={Style.img} onClick={() => handleClick("byCashed", change)}/>
          <br/>
          <h4 className={Style['custom-h4']}>TIỀN MẶT</h4>
        </Col>
        <Col className={Style['custom-col']}>
          <img src={Image.momo} width="150px" className={Style.img} onClick={() => handleClick("byMomo", change)}/>
          <h4 className={Style['custom-h4']}>MOMO</h4>
        </Col>
        <Col className={Style['custom-col']}>
          <img src={Image.credit_card} width="150px" className={Style.img} onClick={() => handleClick("byCreditCard", change)}/>
          <h4 className={Style['custom-h4']}>E-BANKING</h4>
        </Col>
      </Row>
      {payment === "byCashed" && show && byCashed()}
      {payment === "byMomo" && show && byMomo()}
      {payment === "byCreditCard" && show && byCreditCard()}
    </Container>
  )
}


function GridPaymentPage() {
  return (
    <div className={Style.payment}>
        <h1>Thanh toán</h1>
        {Columns()}
    </div>
  );
}

export default GridPaymentPage;