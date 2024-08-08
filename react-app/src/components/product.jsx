import React, { useContext } from 'react';
import { ShopContext } from './context/context';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Assets/Breadcums/Breadcums';
import ProductDisplay from "../components/productdisplay/productdisplay";
import ReleatedProduct from './releatedproduct';

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();

  // Find the product with the matching productId
  const product = allProducts.find((e) => e.id === Number(productId));

  // If product is not found, handle this case
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <ReleatedProduct />
    </div>
  );
};

export default Product;
