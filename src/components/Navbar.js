    import React from 'react'
    import { Link } from 'react-router-dom'
    import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'
    const Navbar = () => {
    const selector = useSelector(state =>state.cart)
       
        
    return (
        <div>
            <nav style={{background:"radial-gradient(circle, rgba(194,65,12,0.9500175070028011) 1%, rgba(15,23,42,0.9472163865546218) 58%, rgba(15,23,42,1) 97%)"}} className='flex p-4 text-slate-200 fixed top-0 left-0 right-0 z-[1000]' >
                <div className=''><h3 className='text-2xl'>ECOMMERCE</h3></div>
                <div className='text-base font-medium space-x-12 p-2' style={{ margin: '0 auto' }}>
                    <Link className="hover:border-b-4 border-gray-800" to={'/'} >Home</Link>
                    <Link className="hover:border-b-4 border-gray-800" to={'/products'} >Product</Link>
                    <Link className="hover:border-b-4 border-gray-800" to={'/about'} >About</Link>
                </div> 
                <div className='space-x-6 flex'>
                    <button className='rounded-md bg-orange-700 text-orange-100 px-4 py-[6px] hover:bg-orange-600'>Login</button>
                    {/* <button className='rounded-md bg-orange-700 text-orange-100 px-4 py-[6px] hover:bg-orange-600'>Sign Up</button> */}
                    <button className='rounded-md bg-orange-700 text-orange-100 px-2 py-[6px] hover:bg-orange-600 flex justify-center items-center'><AiOutlineShoppingCart className='ml-1'/><span className="bg-slate-900 text-slate-100 text-xs font-medium mr-1 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-1 mb-3">{selector.length}</span></button>
                </div>
            </nav>
        </div>
    )
    }

    export default Navbar