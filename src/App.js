import { Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js';
import ClassList from './pages/ClassList/ClassList';
import SignUp from './pages/SignUp/index.js';
import Createclass from './pages/CreateClass/index.js';

import Login from './pages/Login';
import Personal_info from './pages/personal_info/index.js';
import ListTutor from './pages/ListTutor/index.js';
import Thongke from './pages/Thongke/index.js';
import PendingClass from './pages/PendingClass/PendingClass';
import PaymentStatus from './pages/payment_status//PaymentStatus';
import Payment from './pages/Payment/index.js';
import UserAccounts from './pages/userAccounts/userAccounts.js';

import AboutUs from './pages/AboutUs/AboutUs';

// IMPORT CONTEXT
import { AppContext } from './store/appContext';
import PaymentList from './pages/PaymentList/PaymentList.js';

function App() {
    const context = useContext(AppContext);
    return (
        <Layout>
            <Routes>
                /************* all user *************/
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/classlist" element={<ClassList />} />
                /************* only REGISTERED USER *************/
                {context.role !== '' && (
                    <>
                        <Route path="/personal_info" element={<Personal_info />} />
                    </>
                )}
                /************* only guest *************/
                {context.role === '' && (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </>
                )}
                /************* only system admin *************/
                {context.role === 'QuanLyHeThong' && (
                    <>
                        <Route path="/userAccounts" element={<UserAccounts />} />
                        <Route path="/thongke" element={<Thongke/>}/>
                    </>
                )}
                /************* only professional admin *************/
                {context.role === 'QuanLyChuyenMon' && (
                    <>
                        <Route path="/tutorlist" element={<ListTutor />} />
                        <Route path="/pendingclass" element={<PendingClass />} />
                        <Route path="/paymentStatus" element={<PaymentStatus />} />
                    </>
                )}
                /************* only tutor *************/
                {context.role === 'GiaSu' && (
                    <>
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/paymentList" element={<PaymentList />} />
                    </>
                )}
                /************* only student *************/
                {context.role === 'NguoiCanTimGiaSu' && (
                    <>
                        <Route path="/createclass" element={<Createclass />} />
                    </>
                )}
            </Routes>
        </Layout>
    );
}

export default App;
