import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../components/context/context';
import remove_icon from '../components/Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (CartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className='cartitems-format'>
                                <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>{product.new_price}</p>
                                <p>{CartItems[product.id]}</p>
                                <p>{product.new_price * CartItems[product.id]}</p>
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
        </div>
    );
}

export default CartItems;
