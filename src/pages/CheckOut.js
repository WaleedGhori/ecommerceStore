import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { increment , decrement } from '../store/counterSlice'
const CheckOut = () => {

  const select = useSelector(state =>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="mx-4 my-9 ">
      {/* <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_HOST}/merchantpgpui/checkoutjs/merchants/${process.env_NEXT_PUBLIC_PAYTM_MID}.js `} crossorigin="anonymous" /> */}

      <h1 className='text-3xl text-center text-orange-700 font-bold mt-8'>CheckOut</h1>
      <hr className='m-auto h-2 w-24 bg-slate-900'></hr>
      <h1 className="font-semibold text-xl text-slate-900">1. Delivery Details</h1>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-slate-900">
              Name
            </label>
            <input
              value="name"
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-orange-600 focus:border-orange-500  focus:ring-2 focus:ring-orange-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-slate-900">
              Email
            </label>

            <input
              value="email"
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-orange-600 focus:ring-2 focus:ring-orange-300 focus:border-orange-500 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            {/* here i am chane value from token */}
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-slate-900">
            Address
          </label>
          <textarea

            value="address"
            type="email"
            name="address"
            className="w-full bg-white rounded border border-orange-600 focus:border-orange-500  focus:ring-2 focus:ring-orange-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-slate-900">
              Phone
            </label>
            <input
              placeholder="Enter your valid phone number"

              value="phone"
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-orange-600 focus:border-orange-500  focus:ring-2 focus:ring-orange-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-slate-900"
            >
              PinCode
            </label>
            <input

              value="pincode"
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-orange-600 focus:border-orange-500  focus:ring-2 focus:ring-orange-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-slate-900">
              State
            </label>
            <input
              value="state"
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-orange-600 focus:border-orange-500  focus:ring-2 focus:ring-orange-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-slate-900">
              City
            </label>
            <input
              value="city"
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-orange-600 focus:border-orange-500  focus:ring-2 focus:ring-orange-300 text-base outline-none text-slate-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-xl text-slate-900">2. Review Cart Items</h1>
      <div className="sidecart w-[100%] text-orange-600 bg-slate-900 p-6 my-4 z-10 rounded">
      {select.map((product) => (
              <div key={product.id} className="flex flex-col md:flex-row  items-center p-2">
                <img className='rounded mt-2 mb-2' height={40} width={100} src={product.image} alt={product.title} />
                <h5 className='ml-4'>{product.title.substring(0, 18)}...</h5>
                <h2 className='m-auto'>Price: ${product.price}</h2>
                <div className='m-auto flex items-center'>
                  {product.qty === 1 ? (<button disabled className='mx-2 text-orange-600'><AiFillMinusCircle /></button>):(<button className='mx-2 text-orange-600' onClick={() => dispatch(decrement(product))}><AiFillMinusCircle /></button>)}
                  <h2>{product.qty}</h2>
                  <button className='mx-2 text-orange-600' onClick={() => dispatch(increment(product))}><AiFillPlusCircle /></button>
                </div>
                <h2>Total Price: ${product.qty*product.price}</h2>
              </div>
            ))}
        {/* <ol className="list-decimal">
          <div className="my-4 font-semibold">You Cart is empty!</div>
        </ol> */}
      </div>
      <div className="mx-4">
      <button className='bg-slate-900 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' >Pay Now!</button>


      </div>
    </div>
  )
}

export default CheckOut