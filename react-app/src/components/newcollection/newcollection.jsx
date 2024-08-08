import React, { useState, useEffect } from 'react';
import './newcollection.css';
import Item from '../item/Item'; // Ensure correct path and file name for Item component

const NewCollection = () => {
    const [newCollections, setNewCollections] = useState([]);

    useEffect(() => {
        const fetchNewCollections = async () => {
            try {
                const response = await fetch('http://localhost:4000/newcollections');
                if (!response.ok) {
                    throw new Error('Failed to fetch new collections');
                }
                const data = await response.json();
                setNewCollections(data);
            } catch (error) {
                console.error('Error fetching new collections:', error);
            }
        };

        fetchNewCollections();
    }, []);

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                {newCollections.map((item) => (
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

export default NewCollection;
