import React from 'react';
import './App.css';
import './index.css';
import Product from './components/product';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Calendar from './components/calendar';
import Services from './components/Services';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Addnewproduct from './components/addnewproduct';
import Signup from './components/Signup';
import Payment from './components/payment';
import Event from './components/events';
import ShopCategory from './components/shopCategory';
import Shop from './components/shop';
import menBanner from './components/Assets/banner_mens.png';
import electronicBanner from './components/Assets/electronic2.JPG';
import bookBanner from './components/Assets/book1.JPG'

import beautyBanner from './components/Assets/beauty1.JPG'

import womenBanner from './components/Assets/banner_women.png';
import kidBanner from './components/Assets/banner_kids.png';
import ShopContextProvider from './components/context/context';
import LoginSignupuser from './components/LoginSignup';


const App = () => {
  return (
    <div className="app-container">
      <ShopContextProvider>
        <BrowserRouter>
         
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Shop />} />
              <Route exact path="/mens" element={<ShopCategory banner={menBanner} category="men" />} />
              <Route exact path="/kids" element={<ShopCategory banner={kidBanner} category="kid" />} />
              <Route exact path="/womens" element={<ShopCategory banner={womenBanner} category="women" />} />
              <Route exact path="/electronics" element={<ShopCategory banner={electronicBanner} category="elecronic" />} />
              <Route exact path="/books" element={<ShopCategory banner={bookBanner} category="book" />} />
              <Route exact path="/beauty" element={<ShopCategory banner={beautyBanner} category="beauty" />} />
              <Route exact path="/login" element={<LoginSignupuser />} />
              <Route exact path="/chat" element={<Chat />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/addnewproduct" element={<Addnewproduct />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/calendar" element={<Calendar />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/event" element={<Event />} />
              <Route exact path="/Cart" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
};

export default App;
