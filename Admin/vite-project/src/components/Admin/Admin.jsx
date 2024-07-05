import React from 'react';
import './Admin.css';
import Sidebar from '../sidebar/sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../addproduct/addproduct';
import ListProduct from '../Listproduct/listproduct'
import Event from '../Event/Event'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <div className='main-content'>
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
          <Route path='/event' element={<Event />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
