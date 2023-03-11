import React,{} from 'react'

import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'
import img6 from '../image/6.jpg'
import Product from './Product'

const Home = () => {

  return (
    // starting div
    <div>
      {/* this is a hero section */}
    <div className='flex'>
      <div className='flex flex-col w-1/4'>
        <img className='h-2/3' src={img1} alt="img1"></img>
        <img className='h-1/3' src={img5} alt="img1"></img>
      </div>
      <div className='w-1/4'>
        <img className='' src={img2} alt="img1"></img>
        <img className='' src={img3} alt="img1"></img>
      </div>
      <img className='w-1/4' src={img4} alt="img1"></img>
      <img className='w-1/4' src={img6} alt="img1"></img>
    </div>
    {/* end of hero section */}
    {/* start of product section */}
      <Product/>
    {/* ending div */}

    
    </div>

  )
}

export default Home