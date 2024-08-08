import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newProduct = {
                id: parseInt(id),
                name,
                category,
                new_price: parseFloat(newPrice),
                old_price: parseFloat(oldPrice),
                image
            };

            const response = await axios.post('http://localhost:4000/add-new-product', newProduct);

            if (response.data === 'Your product is listed') {
                setMessage('Product added successfully');
                // Clear form fields after successful submission
                setId('');
                setName('');
                setCategory('');
                setNewPrice('');
                setOldPrice('');
                setImage('');
            } else if (response.data === 'exist') {
                setMessage('Product already exists');
            } else {
                setMessage('Error adding product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('Error adding product');
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add New Product</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>New Price:</label>
                    <input type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Old Price:</label>
                    <input type="text" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductForm;
