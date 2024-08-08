import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../images/l11.jpg';
import cart from '../images/cartlogo.png';
import { ShopContext } from './context/context';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt='Logo' />
        </Link>
        <h1 className='navbar-heading'>Preserving Pakistan Heritage</h1>
      </div>
      <div className='navbar-right'>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link to='/mens' className='navbar-link'>Men</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/womens' className='navbar-link'>Women</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/kids' className='navbar-link'>Kids</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/electronics' className='navbar-link'>Electronics</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/' className='navbar-link'>Home & Shop</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/books' className='navbar-link'>Books</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/beauty' className='navbar-link'>Beauty & Health</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/chat' className='navbar-link'>Chat</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/calendar' className='navbar-link'>Calendar</Link>
          </li>
        </ul>
        <div className='navbar-auth'>
          {localStorage.getItem('auth-token') ? (
            <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>Logout</button>
          ) : (
            <Link to='/login' className='navbar-login'>Login</Link>
          )}
        </div>
        <div className='navbar-cart'>
          <Link to='/cart' className='navbar-cart-link'>
            <img src={cart} alt='Cart' />
            <span className='navbar-cart-count'>{getTotalCartItems()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
