import React from 'react'
import Lottie from 'lottie-react'
import animationData from './48979-product-loader.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Lottie animationData={animationData} width={300} height={300} />
    </div>
  )
}

export default Loader