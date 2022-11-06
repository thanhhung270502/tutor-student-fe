import Header from './Header/Header';
import Footer from './Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Content</h1>
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
