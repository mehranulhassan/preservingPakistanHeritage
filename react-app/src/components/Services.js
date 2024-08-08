import React from 'react';
import '../services.css'; // Import the CSS file
import service1 from '../images/cake1.jpg';
import service2 from '../images/cake31.jpg';
import service3 from '../images/cake30.jpg';
import service4 from '../images/cake33.jpg';
import service5 from '../images/cake34.jpg';
import service6 from '../images/cake35.jpg';
import service7 from '../images/cake1.jpg';
import Team from "./Chat";
import service8 from '../images/cake1.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-description">
        Explore our wide range of services to meet your cake needs.
      </p>

      <div className="service">
        <img src={service1} alt="Service 1" className="service-image" />
        <h3 className="service-title">Birthday Cakes</h3>
        <p className="service-description">
          We specialize in creating delicious and visually stunning birthday cakes for all ages.
        </p>
      </div>

      <div className="service">
        <img src={service2} alt="Service 2" className="service-image" />
        <h3 className="service-title">Wedding Cakes</h3>
        <p className="service-description">
          Make your wedding day memorable with our elegant and customized wedding cakes.
        </p>
      </div>

      <div className="service">
        <img src={service3} alt="Service 3" className="service-image" />
        <h3 className="service-title">Anniversary Cakes</h3>
        <p className="service-description">
          Celebrate your special milestones with our beautifully crafted anniversary cakes.
        </p>
      </div>

      <div className="service">
        <img src={service4} alt="Service 4" className="service-image" />
        <h3 className="service-title">Custom Cakes</h3>
        <p className="service-description">
          Let your imagination run wild and create a custom cake that perfectly suits your theme or design.
        </p>
      </div>

      <div className="service">
        <img src={service5} alt="Service 5" className="service-image" />
        <h3 className="service-title">Cupcakes</h3>
        <p className="service-description">
          Enjoy our delicious assortment of cupcakes in various flavors and decorative designs.
        </p>
      </div>
      <Team>
        
      </Team>

      <div className="service">
        <img src={service6} alt="Service 6" className="service-image" />
        <h3 className="service-title">Cake Delivery</h3>
        <p className="service-description">
          We offer reliable and timely cake delivery services to ensure your cake arrives fresh and on time.
        </p>
      </div>

      <div className="service">
        <img src={service7} alt="Service 7" className="service-image" />
        <h3 className="service-title">Special Occasion Cakes</h3>
        <p className="service-description">
          Make every special occasion memorable with our delectable and eye-catching specialty cakes.
        </p>
      </div>
    </div>
  );
};

export default Services;
