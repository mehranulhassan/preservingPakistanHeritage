import React, { useState, useEffect } from 'react';

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <= 300; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
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

        fetchProducts();
    }, []);

    const addToCart = (itemId) => {
      setCartItems((prev) => ({
          ...prev,
          [itemId]: prev[itemId] + 1,
      }));
  
      if (localStorage.getItem('auth-token')) {
          fetch('http://localhost:4000/addtocart', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
              },
              body: JSON.stringify({ itemId }),
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to add item to cart');
              }
              // Handle success if needed
          })
          .catch(error => {
              console.error('Error adding item to cart:', error);
              // Handle error if needed
          });
      }
  };
  

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(prev[itemId] - 1, 0),
        }));
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
