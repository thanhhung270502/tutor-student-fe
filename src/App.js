import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js'
import ClassList from './pages/ClassList/ClassList'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Personal_info from './pages/personal_info/index.js';
import ListTutor from './pages/ListTutor/index.js';
<<<<<<< Updated upstream
=======
import PendingClass from './pages/PendingClass/PendingClass';
import Payment from './pages/Payment/index.js';
>>>>>>> Stashed changes

function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classlist" element={<ClassList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
<<<<<<< Updated upstream
                <Route path="/personal_info" element={<Personal_info />} />
                <Route path="/tutorlist" element={<ListTutor />} />
=======
                <Route path="/createclass" element={<Createclass />} />
                <Route path="/personalinfo" element={<Personal_info />} />
                <Route path="/tutorlist" element={<ListTutor />} />
                <Route path="/pendingClass" element={<PendingClass />} />
                <Route path="/payment" element={<Payment />} />
>>>>>>> Stashed changes
            </Routes>
        </Layout >

    );
}

export default App;
