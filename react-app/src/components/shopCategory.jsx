import React, { useContext } from 'react';
import './shopCategory.css';
import { ShopContext } from './context/context';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/item/Item';

const ShopCategory = (props) => {
    const { allProducts } = useContext(ShopContext);

    if (!allProducts) {
        return <div>Loading...</div>;
    }

    const filteredProducts = allProducts.filter(item => item.category === props.category);

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt='Banner' />
            <div className='shopcategory-indexsort'>
                <p>
                    <span>Showing 1-12</span>
                    out of {filteredProducts.length} products
                </p>
                <div className='shopcategory-sort'>
                    sort by <img src={dropdown_icon} alt='Dropdown Icon' />
                </div>
            </div>
            <div className='shopcategory-products'>
                {filteredProducts.map((item, i) => (
                    <div className="item" key={i}>
                        <Item 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price} 
                        />
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default ShopCategory;
