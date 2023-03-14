import React, { useState, useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../store/counterSlice'
const Navbar = () => {
  const selector = useSelector(state => state.counter)
  const select = useSelector(state => state.counter)

  const dispatch = useDispatch()
  const [sidebar, setSidebar] = useState(false)
  const cartref = useRef();
  const toggle = () => {
    setSidebar(!sidebar)
  }

  return (
    // <div>
    //     <nav style={{background: "radial-gradient(circle, rgba(194,65,12,0.9500175070028011) 1%, rgba(15,23,42,0.9472163865546218) 58%, rgba(15,23,42,1) 97%)"}} className={`flex p-4 fixed top-0 left-0 right-0 text-slate-200 top-0 `} >
    //         <div className=''><h3 className='text-2xl'>ECOMMERCE</h3></div>
    //         <div className='text-base font-medium space-x-12 p-2' style={{ margin: '0 auto' }}>     
    //             <Link className="hover:border-b-4 border-gray-800" to={'/'} >Home</Link>
    //             <Link className="hover:border-b-4 border-gray-800" to={'/products'} >Product</Link>
    //             <Link className="hover:border-b-4 border-gray-800" to={'/about'} >About</Link>
    //         </div>
    //         <div className='space-x-6 flex'>
    //             <button className='rounded-md bg-orange-700 text-orange-100 px-4 py-[6px] hover:bg-orange-600'>Login</button>
    //             {/* <button className='rounded-md bg-orange-700 text-orange-100 px-4 py-[6px] hover:bg-orange-600'>Sign Up</button> */}
    //             <button onClick={toggle} className='rounded-md bg-orange-700 text-orange-100 px-2 py-[6px] hover:bg-orange-600 flex justify-center items-center'><AiOutlineShoppingCart className='ml-1' /><span className="bg-slate-900 text-slate-100 text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-1 mb-3">{selector.length}</span></button>
    //         </div>
    //     </nav>
    //     {/* <div className={`${sidebar===false?"none":"w-[100%] sm:w-[40%] h-[75vh] md:h-[100vh]  bg-slate-900 mt-[76px] absolute top-0 px-8 py-10  transition-all right-0"}`}>
    //             <h2 className='text-white'>Shopping cart</h2>
    //         </div> */}
    //     <div ref={cartref} className={`sidecart w-[100%] sm:w-[40%] h-[75vh] md:h-[100vh]  bg-slate-900  absolute top-0 px-8 py-10  transition-all  ${sidebar ? 'right-0' : '-right-[40rem]'}`}>
    //             <h2 className='text-white'>Shopping cart</h2>
    //     <span onClick={toggle} className="absolute text-orange-700 top-4 cursor-pointer text-2xl right-2"><AiFillCloseCircle /></span>
    //     </div>
    // </div>
    <>
      <div style={{ background: "radial-gradient(circle, rgba(194,65,12,0.9500175070028011) 1%, rgba(15,23,42,0.9472163865546218) 58%, rgba(15,23,42,1) 97%)" }} className={`flex text-slate-200 flex-col md:flex-row h-20 md:justify-start justify-center items-center  shadow-md sticky z-10 top-0 ${!sidebar && 'overflow-hidden'}`}>

        <div className="mx-3">
          <h3 className='text-2xl'>ECOMMERCE</h3>
        </div>
        <div className='text-base font-medium space-x-12 p-2' style={{ margin: '0 auto' }}>
          <Link className="hover:border-b-4 border-gray-800" to={'/'} >Home</Link>
          <Link className="hover:border-b-4 border-gray-800" to={'/products'} >Product</Link>
          <Link className="hover:border-b-4 border-gray-800" to={'/about'} >About</Link>
        </div>
        <div className="cart my-3 md:m-auto items-center flex md:absolute md:right-0 md:top-5 md:mx-5">
          <div className='space-x-6 flex'>
            <button className='rounded-md bg-orange-700 text-orange-100 px-4 py-[6px] hover:bg-orange-600'>Login</button>
            {/* <button className='rounded-md bg-orange-700 text-orange-100 px-4 py-[6px] hover:bg-orange-600'>Sign Up</button> */}
            <button onClick={toggle} className='rounded-md bg-orange-700 text-orange-100 px-2 py-[6px] hover:bg-orange-600 flex justify-center items-center'><AiOutlineShoppingCart className='ml-1' /><span className="bg-slate-900 text-slate-100 text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-1 mb-3">{select.length}</span></button>
          </div>
        </div>
        <div ref={cartref} className={`sidecart w-[100%] sm:w-[40%] h-[75vh] md:h-[100vh] bg-slate-900 absolute top-0 px-8 py-10  transition-all  ${sidebar ? 'right-0' : '-right-[40rem]'} z-10`}>
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span onClick={toggle} className="absolute text-orange-600 top-4 cursor-pointer text-2xl right-2"><AiFillCloseCircle /></span>
          <div className='mt-6'>
            {selector.map((product) => (
              <div key={product.id} className="flex items-center p-2">
                <img className='rounded' height={60} width={80} src={product.image} alt={product.title} />
                <h5 className='ml-4'>{product.title.substring(0, 18)}...</h5>
                <div className='m-auto flex items-center'>
                  {product.qty === 1 ? (<button disabled className='mx-2 text-orange-600'><AiFillMinusCircle /></button>) : (<button className='mx-2 text-orange-600' onClick={() => dispatch(decrement(product))}><AiFillMinusCircle /></button>)
                  }
                  <h2>{product.qty}</h2>
                  <button className='mx-2 text-orange-600' onClick={() => dispatch(increment(product))}><AiFillPlusCircle /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar