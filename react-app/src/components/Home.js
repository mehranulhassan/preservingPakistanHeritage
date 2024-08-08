import React from 'react';
import "../homepage.css";
import {useLocation, useNavigate} from 'react-router-dom';
import Sidebar from './sidebar';

import img1 from '../images/bag.jpg'
import img2 from '../images/cabinet.png';
import img3 from '../images/camellamp.jpg';
import img4 from '../images/woodenclock.webp'
import img5 from '../images/shoes.jpg';
import img6 from '../images/mug.jpg';
import img7 from '../images/lehenga.jpg'
import img8 from '../images/khusa.png';
import img9 from '../images/decoration.jpg';
import img10 from '../images/jweller box.webp'
import img11 from '../images/039-kids-kotis.jpg'
import img12 from '../images/topi.jpeg'
import img13 from '../images/waist cot.jpg'
import img14 from '../images/039-kids-kotis.jpg'
import img15 from '../images/cabinet.png'
// Import images for other products

const Home = () => {
  const location=useLocation()

  return (
    <div className="homepage">
      <div className="banner">
        <h1>Preserving Pakistan's Heritage: Empowering Local Artisans and Celebrating Cultural Traditions</h1>
        
      </div>
      <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the home</h1>

        </div>

      <Sidebar />

      <div className="product-grid">
        <div className="product-item">
          <img src={img1} alt="Caterpillar cake" />
          <div className="product-info">
            <h3>Bag</h3>
            <p>Rs:850</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img2} alt="Charlotte (cake)" />
          <div className="product-info">
            <h3>Hand made Cabinet</h3>
            <p>Rs:4500</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img3} alt="Cheesecake" />
          <div className="product-info">
            <h3>Camel lamp</h3>
            <p>Rs:2000</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img4} alt="Cheesecake" />
          <div className="product-info">
            <h3>Hand made Clock</h3>
            <p>Rs:900</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img5} alt="Cheesecake" />
          <div className="product-info">
            <h3>pishawari shoes</h3>
            <p>Rs:3999</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img6} alt="Cheesecake" />
          <div className="product-info">
            <h3>box for stationary</h3>
            <p>250</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img7} alt="Cheesecake" />
          <div className="product-info">
            <h3>Bridal dress</h3>
            <p>Rs:25000</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img8} alt="Cheesecake" />
          <div className="product-info">
            <h3>Khusa</h3>
            <p>Rs:750</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img9} alt="Cheesecake" />
          <div className="product-info">
            <h3>Decoration piece for flower</h3>
            <p>Rs:500</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img10} alt="Cheesecake" />
          <div className="product-info">
            <h3>jewellery box</h3>
            <p>Rs:350</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img11} alt="Cheesecake" />
          <div className="product-info">
            <h3>Waist coat with topi</h3>
            <p>Rs:1000</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img12} alt="Cheesecake" />
          <div className="product-info">
            <h3>Sindhi Topi</h3>
            <p>Rs:200</p>
            <p>Availability: Yes</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img13} alt="Cheesecake" />
          <div className="product-info">
            <h3>Waist Coat</h3>
            <p>Rs:789.99</p>
            <p>Availability: Yes</p>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Home;
