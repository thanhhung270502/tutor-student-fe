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
import PendingClass from './pages/PendingClass/PendingClass';

import AboutUs from './pages/AboutUs/AboutUs'

// IMPORT CONTEXT
import { AppContext } from './store/appContext';

function App() {
    const context = useContext(AppContext);
    return (
        <Layout>
            <Routes>
                /*************  all user *************/
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/classlist" element={<ClassList />} />

                /*************  only REGISTERED USER *************/
                {(context.role !== '0') &&
                    <>
                        <Route path="/personal_info" element={<Personal_info />} />
                    </>
                }
                /*************  only guest *************/
                {context.role === '0' &&
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </>
                }
                /*************  only system admin *************/
                {context.role === '1' &&
                    <>

                    </>
                }
                /*************  only professional admin *************/
                {context.role === 'QuanLyChuyenMon' &&
                    <>
                        <Route path="/tutorlist" element={<ListTutor />} />
                        <Route path="/pendingclass" element={<PendingClass />} />
                    </>
                }
                /*************  only tutor *************/
                {context.role === '3' &&
                    <>

                    </>
                }
                /*************  only student *************/
                {context.role === '4' &&
                    <>
                        <Route path="/createclass" element={<Createclass />} />
                    </>
                }
            </Routes>
        </Layout>
    );
}

export default App;
