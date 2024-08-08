import React from 'react'
import './offer.css'
import exclusive_image from '../Assets/pakistan.JPG'

const offer = () => {
  return (
    <div className='offer'>
    <div className='offer-left'>
        <h1> Exclusive</h1>
        <h1>OFFER FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>
        Check Now
        </button>
    </div>
    <div className='offer-right'>
        <img src={exclusive_image} alt=' '>

        </img>
    </div>
    
    
    </div>
  )
}

export default offer