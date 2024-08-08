import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <h2>About Us</h2>
                    <p>
                        We are a leading e-commerce platform providing a wide range of products
                        and excellent customer service. Our mission is to make online shopping
                        easy and accessible for everyone.
                    </p>
                </div>
                <div className='footer-section'>
                    <h2>Contact Us</h2>
                    <p>Email: support@example.com</p>
                    <p>Phone: +1234567890</p>
                    <p>Address: 123, Main Street, City, Country</p>
                </div>
                <div className='footer-section'>
                    <h2>Follow Us</h2>
                    <div className='social-icons'>
                        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
