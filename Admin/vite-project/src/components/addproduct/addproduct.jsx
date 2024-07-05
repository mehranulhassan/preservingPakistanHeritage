import React, { useState } from 'react';
import './addproduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    new_price: '',
    old_price: '',
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('product', image);

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setImageUrl(result.imageUrl);
        return result.imageUrl;
      } else {
        alert('Image upload failed');
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error uploading image');
      return null;
    }
  };

  const Add_Product = async (imageUrl) => {
    const productData = {
      name: productDetails.name,
      category: productDetails.category,
      new_price: productDetails.new_price,
      old_price: productDetails.old_price,
      image: imageUrl
    };

    try {
      const response = await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      const result = await response.json();

      if (result.success) {
        alert('Product added successfully');
        // Clear form after successful submission
        setProductDetails({
          name: "",
          category: "",
          new_price: '',
          old_price: '',
        });
        setImage(null);
        setImageUrl('');
      } else {
        alert('Product not added: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedImageUrl = await uploadImage();
    if (uploadedImageUrl) {
      Add_Product(uploadedImageUrl);
    }
  };

  return (
    <div className='addproduct'>
      <form onSubmit={handleSubmit}>
        <div className='addproduct-itemfield'>
          <p>Product Title</p>
          <input
            type="text"
            name='name'
            placeholder='Enter product title'
            value={productDetails.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div className='addproduct-price'>
          <div className='addproduct-itemfield'>
            <p>Price</p>
            <input
              type="text"
              name='old_price'
              placeholder='Enter price'
              value={productDetails.old_price}
              onChange={changeHandler}
              required
            />
          </div>
          <div className='addproduct-itemfield'>
            <p>Offer Price</p>
            <input
              type="text"
              name='new_price'
              placeholder='Enter price'
              value={productDetails.new_price}
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        <div className='addproduct-itemfield'>
          <p>Product Category</p>
          <select
            name="category"
            className="add-product-selector"
            value={productDetails.category}
            onChange={changeHandler}
            required
          >
            <option value="">Select category</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
            <option value="elecronic">Electronics</option>
            <option value="book">Book</option>
            <option value="beauty">Beauty&Health</option>
          </select>
        </div>
        <div className='addproduct-itemfield'>
          <label htmlFor='file-input'>
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className='addproduct-thumbnail-img'
              alt='upload area'
            />
          </label>
          <input onChange={imageHandler} type='file' name='image' id='file-input' required />
        </div>
        <button type="submit" className='addproduct-btn'>ADD</button>
      </form>
    </div>
  );
};

export default AddProduct;
