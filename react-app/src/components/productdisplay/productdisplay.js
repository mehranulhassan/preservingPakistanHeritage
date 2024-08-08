import React, { useContext, useState } from 'react';
import './productdisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../context/context';

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('M'); // Default size selection

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='product-display'>
            <div className='product-display-left'>
                <div className='product-display-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='product-display-img'>
                    <img className='product-display-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className='product-display-right'>
                <h1>{product.name}</h1>
                <h2>{product.name}</h2>
                <div className='product-display-star'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>122</p>
                </div>
                <div className='product-display-prices'>
                    <div className='product-display-price-old'>${product.old_price}</div>
                    <div className='product-display-price-new'>${product.new_price}</div>
                </div>
                <div className='product-display-description'>
                    A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.
                </div>
                <div className='product-display-size'>
                    <h1>Select Size</h1>
                    <div className={`product-size-button ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeSelect('S')}>S</div>
                    <div className={`product-size-button ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeSelect('M')}>M</div>
                    <div className={`product-size-button ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeSelect('L')}>L</div>
                    <div className={`product-size-button ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('XL')}>XL</div>
                    <div className={`product-size-button ${selectedSize === 'XXL' ? 'selected' : ''}`} onClick={() => handleSizeSelect('XXL')}>XXL</div>
                </div>
                <button onClick={() => { addToCart(product.id) }} className='product-display-add-to-cart'>ADD TO CART</button>
                <p className='product-display-category'><span>Category:</span> Women, T-shirt, Crop Top</p>
                <p className='product-display-tags'><span>Tags:</span> Modern, latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
