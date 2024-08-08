import React from 'react';
import '../App.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan tincidunt ante vitae gravida.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Office no#5 street 3 Township Lahore</p>
          <p>Email: mehranhashmi618@gmail.com</p>
          <p>Phone: +923037190868</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a href="www.facebook.com"><i className="fab fa-facebook">Facebook</i></a>
            <a href="#"><i className="fab fa-instagram">Instagram</i></a>
            <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      <p>Designed by Mehran ul hassan</p>
        <p>&copy; 2023 Your Cake Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
