import React from 'react'
import my from '../image/my.jpg'
const About = () => {
  return (
    <div className='min-h-screen'>
       <img  src="/my.jpg" alt='this' />
        <img src={my} alt='image'/>
    </div>
  )
}

export default About