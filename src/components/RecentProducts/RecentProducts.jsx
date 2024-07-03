import { useContext, useEffect, useState } from "react";
// import Style from './RecentProducts.module.css'
import axios from "axios";
// import Products from '../Products/Products';
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function RecentProducts() {
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

  // const [recentProducts, setRecentProducts] = useState([]);

  // function getRecentProducts(){
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   .then(({data})=>{
  //     setRecentProducts(data.data);
  //   })
  //   .catch((error)=>{
  //     console.log(error);

  //   })
  // }

  // useEffect(() => {
  // getRecentProducts();
  //  }, [])

  //////////////////////////////

  //   function getRecent(){
  //     return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  //   }

  //  let {data ,isError,error,isLoading,isFetched}=  useQuery({
  //     queryKey:['recentProducts'],
  //     queryFn:getRecent,
  //     staleTime:0,           // after 5 second data be stale before 5 second data be fresh
  //     // retry:6,               // didn't return error until refitch 6 times
  //     // retryDelay:3000,        // do retry after 3s
  //     // refetchInterval:2000 ,
  //     // refetchIntervalInBackground:true,
  //     // refetchOnWindowFocus:true,      //after exit from tab stop (inactive)
  //     // gcTime:4000           //after exit from tab delete all after 4s
  //     // select:(data)=>data.data.data     // instead write data.data.data in map
  //   })

  let { data, isError, error, isLoading, isFetched } = useProducts();

  if (isLoading) {
    return (
      <div className="py-8 w-full flex justify-center">
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <div className="py-8 w-full flex justify-center">{error}</div>;
  }
  return (
    <>
      <div className="">
        <div className="row ">
          {data.map((product) => (
            <div className="lg:w-1/6  md:w-1/4 w-1/2 p-2 " key={product.id}>
              <div className="product px-4">
                <Link
                  to={`/productdetails/${product.id}/${product.category.name}`}
                >
                  <img
                    className="w-full"
                    src={product.imageCover}
                    alt={product.title}
                  />
                  <span className="text-green-500 ">
                    {product.category.name}
                  </span>
                  <h3 className="text-gray-800 mt-2">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <div className="row justify-between">
                    <span className="block ">{product.price} EGP </span>
                    <span className="block">
                      {product.ratingsAverage}{" "}
                      <i className="text-yellow-400 fas fa-star"></i>
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => addToCartBridge(product.id)}
                  className="btn w-full bg-green-600 text-white p-2 rounded-lg"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
