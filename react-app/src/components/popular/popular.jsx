import React, { useState, useEffect } from 'react';
import './popular.css';
import Item from '../item/Item'; // Ensure correct path and file name for Item component

const Popular = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        const fetchPopularItems = async () => {
            try {
                const response = await fetch('http://localhost:4000/popularinwomen');
                if (!response.ok) {
                    throw new Error('Failed to fetch popular items');
                }
                const data = await response.json();
                setPopularItems(data);
            } catch (error) {
                console.error('Error fetching popular items:', error);
            }
        };

        fetchPopularItems();
    }, []);

    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-item'>
                {popularItems.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Popular;
