// import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

// import Style from './Products.module.css'
export default function Products() {

  let {data ,isError,error,isLoading,isFetched} = useProducts()

  let { addToCart } = useContext(CartContext);

  async function addToCartBridge(productId) {
    let response = await addToCart(productId);

    if (response?.data?.status === "success") {
      toast.success("Successful adding to product");
    } else {
      toast.error("error to add product");
    }

    // console.log(response);
  }
  if (isLoading) {
    return (
      <div className="py-8 w-full flex justify-center">
        <Loader  />
      </div>
    );
  }

  return (
    <>
  <h2 className='text-green-700 text-center pt-6 text-4xl font-serif'>CHOOSE PRODUCTS</h2>

    <div className="">
    <div className="row ">

      {data?.map((product)=><div className="lg:w-1/6  md:w-1/4 w-1/2 p-2 " key={product.id}>
        <div className="product px-4">
          <Link to={`/productdetails/${product.id}/${product.category.name}`}> 
          <img className='w-full' src={product.imageCover} alt={product.title} />
          <span className='text-green-500 '>{product.category.name}</span>
          <h3 className='text-gray-800 mt-2'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
          <div className='row justify-between'>
            <span className='block '>{product.price} EGP </span>
            <span className='block'>{product.ratingsAverage} <i className='text-yellow-400 fas fa-star'></i></span>
            
          </div>
          </Link>
                    <button onClick={()=>addToCartBridge(product.id)}  className='btn w-full bg-green-600 text-white mb-2 p-2 rounded-lg'>Add To Cart</button>

        </div>
 
       </div>
      )}
    </div>
    </div>

    </>
  )

}
