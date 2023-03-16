import React from 'react'

const Footer = () => {


  return (
   
    <>
      <div style={{ background: "radial-gradient(circle, rgba(194,65,12,0.9500175070028011) 1%, rgba(15,23,42,0.9472163865546218) 58%, rgba(15,23,42,1) 97%)" }} className={`flex text-slate-200 flex-col md:flex-row h-20 md:justify-start justify-center items-center  shadow-md sticky z-10 top-0`}>

        <div className="mx-3">
          <h3 className='text-2xl'>ECOMMERCE</h3>
        </div>
        <div className="cart my-3 md:m-auto items-center flex md:absolute md:right-0 md:top-5 md:mx-5">
        </div>
      </div>
    </>
  )
}

export default Footer