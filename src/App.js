import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Layout from '~/components/Layout/DefaultLayout/Layout';

import Home from './pages/Home/Home.js'
import ClassList from './pages/ClassList/ClassList'
import Personal_info from './pages/personal_info/index.js';

function App() {
    return (

        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classlist" element={<ClassList />} />
                <Route path="/personal_info" element={<Personal_info />} />

            </Routes>
        </Layout >

    );
}

export default App;
