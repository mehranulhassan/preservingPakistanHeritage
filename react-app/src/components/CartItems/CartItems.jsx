import React, { useContext, useState, useRef } from 'react';
import './CartItems.css';
import { ShopContext } from '../context/context';
import remove_icon from '../Assets/cart_cross_icon.png';
import Payment from '../payment';

const CartItems = () => {
    const { allProducts, cartItems, removeFromCart } = useContext(ShopContext);
    const [checkout, setCheckout] = useState(false);
    const topRef = useRef(null);

    const calculateSubtotal = () => {
        return allProducts.reduce((acc, product) => {
            return acc + (cartItems[product.id] * product.new_price);
        }, 0).toFixed(2);
    };

    const handleCheckout = () => {
        setCheckout(true);
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const goBack = () => {
        setCheckout(false);
    };

    return (
        <div className='cartitems' ref={topRef}>
            {!checkout ? (
                <>
                    <div className='cartitems-format-main'>
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {allProducts.map((product) => {
                        if (cartItems[product.id] > 0) {
                            return (
                                <div key={product.id}>
                                    <div className='cartitems-format'>
                                        <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                        <p>{product.name}</p>
                                        <p>${product.new_price}</p>
                                        <p>{cartItems[product.id]}</p>
                                        <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                                        <img 
                                            src={remove_icon} 
                                            onClick={() => removeFromCart(product.id)} 
                                            alt='Remove icon' 
                                            className='cart-remove-icon'
                                        />
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className='cartitems-down'>
                        <h1>Cart Totals</h1>
                        <div>
                            <div className='cartitem-total-item'>
                                <p>Subtotal:</p>  
                                <p>${calculateSubtotal()}</p>
                            </div>
                            <hr/>
                            <div className='cartitem-total-item'>
                                <p>Shipping fee:</p>
                                <p>Free</p>
                            </div>
                            <hr/>
                            <button className='checkout-button' onClick={handleCheckout}>Proceed to Checkout</button>
                        </div>
                    </div>
                </>
            ) : (
                <Payment goBack={goBack} />
            )}
        </div>
    );
}

export default CartItems;
