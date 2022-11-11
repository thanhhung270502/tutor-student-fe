import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './Footer.module.css'
import clsx from 'clsx'

const Footer = () => {
    return (
        <footer className={clsx(style.footer)}>
            <h6> GET TO KNOW US </h6>
            <a href="#" className={`nav-link ${clsx(style.content)}`}>About us</a>
            <a href="#" className={`nav-link ${clsx(style.content)}`}>FAQs</a>
            <div className={`${clsx(style.content)}`}>Email: moigioigiasu@gmail.com</div>
            <div className={`${clsx(style.content)}`}>Phone: +84 123 4567</div>
        </footer>
    );
}
export default Footer;

