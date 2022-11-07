import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <React.Fragment>
                {/* <h1>Content</h1> */}
                <div className="content">{children}</div>
            </React.Fragment>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
