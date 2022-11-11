import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js'
import ClassList from './pages/ClassList/ClassList'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PendingClass from './pages/PendingClass/PendingClass'

function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classlist" element={<ClassList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                // Admin
                <Route path="/pendingClass" element={<PendingClass />} />
            </Routes>
        </Layout >

    );
}

export default App;
