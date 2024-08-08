import React from 'react';
import './Breadcums.css';
import arrow_icon from '../arrow.png'; // Make sure to import arrow_icon from correct path

const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className='breadcrumbs'>
      <div className='breadcrumb-item'>
        Home <img src={arrow_icon} alt="Arrow Icon" className='arrow-icon'/>
      </div>
      <div className='breadcrumb-item'>
        SHOP <img src={arrow_icon} alt="Arrow Icon" className='arrow-icon'/>
      </div>
      <div className='breadcrumb-item'>
        {product.category} <img src={arrow_icon} alt="Arrow Icon" className='arrow-icon'/>
      </div>
      <div className='breadcrumb-item'>
        {product.name}
      </div>
    </div>
  );
};

export default Breadcrumbs;
