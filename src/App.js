import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js'
import ClassList from './pages/ClassList/ClassList'
import Login from './pages/Login/index.js';
import SignUp from './pages/SignUp/index.js';
import Createclass from './pages/CreateClass/index.js';


function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classlist" element={<ClassList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/create_class" element={<Createclass />} />
            </Routes>
        </Layout >

    );
}

export default App;
