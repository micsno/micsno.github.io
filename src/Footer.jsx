// Footer.js
import React from 'react';
import '/src/Footer.css';
import logo from '/src/assets/logo.svg'; // Adjust the path as needed
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="Tomi Kouvala Logo" className="footer-logo" />
                <div className="footer-text">
                    <p>&copy; 2024 Tomi Kouvala</p>
                    <ul className="footer-links">
                        <li><SocialIcon url="mailto:tomi.kouvala@pm.me" network="email" style={{ height: 30, width: 30 }} bgColor='#000' target='_blank' /></li>
                        <li><SocialIcon url="https://www.github.com/micsno" network="github" style={{ height: 30, width: 30 }} bgColor='#000' target='_blank' /></li>
                        <li><SocialIcon url="https://www.linkedin.com/in/tomikouvala" network="linkedin" style={{ height: 30, width: 30 }} bgColor='#000' target='_blank' /></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
