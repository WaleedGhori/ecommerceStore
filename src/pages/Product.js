import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  const [data, setData] = useState([])
  const [products, setProducts] = useState(data)
  let componentMounted = true

  useEffect(() => {
    const fetchFunction = async() =>{
      let res = await fetch(`https://fakestoreapi.com/products`)
      if(componentMounted){
        setData(await res.clone().json())
        let json = await res.json()
        setProducts(json)
        console.log(json);
      }
      return () =>{
        componentMounted = false
      }
    }
    fetchFunction()

 
  }, [])

  const setFilterProducts = (cat) =>{
      let updateProd  = data.filter((x)=>x.category === cat)
      setProducts(updateProd)
  }


  const productDetails = (id) =>{
    console.log(id);
  }
  return (
    <div  className='ml-16 mb-9'>
    <h2 className='font-bold text-3xl text-orange-700'>Our Product</h2>
    <hr className='h-[6px] w-40 bg-slate-900'></hr>
    <div className=''>
        <div className='flex flex-wrap'> 
        <button className='bg-slate-800 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' onClick={()=>setProducts(products)}>All Product</button>
        <button className='bg-slate-800 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' onClick={()=>setFilterProducts("men's clothing")}>Men`s Clothing</button>
        <button className='bg-slate-800 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' onClick={()=>setFilterProducts("women's clothing")}>Women`s Clothing</button>
        <button className='bg-slate-800 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' onClick={()=>setFilterProducts("electronics")}>Electronics</button>
        <button className='bg-slate-800 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' onClick={()=>setFilterProducts("jewelery")}>Jewelery</button>
        </div>
        <div  className='md:m-4 md:p-8 grid md:grid-cols-4 gap-8 grid-cols-2 m-3 p-6'>
          {products.map((item)=>{
              return(
                <div key={item.id} className="shadow-slate-300 shadow-sm bg-gray-50 justify-center text-center p-4 items-center">
                  <img src={item.image} alt={item.title} className="md:h-[250px] h-[220px]"></img>
                  <h2 className='text-lg font-semibold'>{item.title.substring(0,12)}...</h2>
                  <p className='font-bold mb-4'>${item.price}</p>
                  {/* <p>{item.description.length < 20 ?<p>{item.description}</p>:<p>{item.description.substring(0 , 120)}</p>}</p> */}
                  <NavLink to={`/products/${item.id}`} className='bg-slate-800 py-2 p-4 m-2 text-orange-700 rounded-md font-medium text-base hover:bg-orange-600 hover:text-gray-900' onClick={()=>productDetails(item.id)} >Buy Now</NavLink>
                </div>
              )
            })
          }
        </div>
    </div>
  </div>
  )
}

export default Product