import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js';
import ClassList from './pages/ClassList/ClassList';
import SignUp from './pages/SignUp/index.js';
import Createclass from './pages/CreateClass/index.js';

import Login from './pages/Login';
import Personal_info from './pages/personal_info/index.js';
import ListTutor from './pages/ListTutor/index.js';
import PendingClass from './pages/PendingClass/PendingClass';
import PaymentStatus from './pages/payment_status//PaymentStatus'
import UserAccounts from './pages/userAccounts/userAccounts.js';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classlist" element={<ClassList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/create_class" element={<Createclass />} />
                <Route path="/personal_info" element={<Personal_info />} />
                <Route path="/tutorlist" element={<ListTutor />} />

                <Route path="/pendingClass" element={<PendingClass />} />

                <Route path="/paymentStatus" element={<PaymentStatus />}/>
                <Route path="/userAccounts" element={<UserAccounts />}/>

            </Routes>
        </Layout>
    );
}

export default App;
