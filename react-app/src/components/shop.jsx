import React from 'react'
import Hero from './Hero/Hero'
import Popular from './popular/popular'
import Offer from './offer/offer';
import Newcollection from './newcollection/newcollection'
import Sidebar from '../components/sidebar'

const shop = () => {
  return (
    <div>
   

        <Hero/>
        <Popular/>
       
        <Offer/>
        <Newcollection></Newcollection>
    </div>
  )
}

export default shop