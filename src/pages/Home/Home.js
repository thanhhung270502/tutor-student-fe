import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import HomePage1 from './HomePage1'
import HomePage2 from './HomePage2'
import HomePage3 from './HomePage3'


function Home() {
    return (
        <React.Fragment>
            <HomePage1 />
            <HomePage2 />
            <HomePage3 />
        </React.Fragment>
    );
}
export default Home;
