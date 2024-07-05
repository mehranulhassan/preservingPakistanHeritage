import React, { useState, useEffect } from 'react';
import './listproduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeProduct = async (productId) => {
    try {
      console.log('Removing product with id:', productId);  // Log the product ID
      const response = await fetch(`http://localhost:4000/removeproduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: productId }),  // Ensure the correct product ID is sent
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      console.log('Product removed successfully');  // Log successful removal
      // Update the list of products after successful deletion
      await fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);  // Log any errors
    }
  };

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className='listproduct-container'>
        <div className='listproduct-header'>
          <div className='listproduct-column'>Image</div>
          <div className='listproduct-column'>Product</div>
          <div className='listproduct-column'>Title</div>
          <div className='listproduct-column'>Price</div>
          <div className='listproduct-column'>Category</div>
          <div className='listproduct-column'>Actions</div>
        </div>
        <div className='listproduct-body'>
          {allProducts.map((product, index) => (
            <div key={index} className='listproduct-row'>
              <div className='listproduct-column'>
                <img
                  src={product.image} // Ensure product.image points to the correct image URL
                  alt={product.name}
                  className='listproduct-product-image'
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'default_image_path'; // Replace with actual path or placeholder
                  }}
                />
              </div>
              <div className='listproduct-column'>
                <p>{product.name}</p>
              </div>
              <div className='listproduct-column'>
                <p>{product.title}</p>
              </div>
              <div className='listproduct-column'>
                <p>Old: ${product.old_price}</p>
                <p>New: ${product.new_price}</p>
              </div>
              <div className='listproduct-column'>
                <p>{product.category}</p>
              </div>
              <div className='listproduct-column'>
                <button className='listproduct-remove-btn' onClick={() => removeProduct(product.id)}>
                  <img className='listproduct-remove-icon' src={cross_icon} alt='Remove' />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
