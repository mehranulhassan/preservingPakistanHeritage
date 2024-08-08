import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} className='item-link'>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt='' className='item-image' />
        <p className='item-name'>{props.name}</p>
      </Link>
      <div className='item-prices'>
        <div className='item-price-new'>
          Pkr:{props.new_price}/=
        </div>
        <div className='item-price-old'>
          Pkr:{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
