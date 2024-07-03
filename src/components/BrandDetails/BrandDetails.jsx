import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function BrandDetails() {

    const [brandDetails, setBrandDetails] = useState(null)
    let {id} =useParams()
      async function getBrandDetails(id) {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
      .then((response) =>setBrandDetails(response?.data?.data))
      .catch((error) => error);
    // console.log(res);
  }

  useEffect(() => {
    getBrandDetails(id)
  
   
  }, [id])
  // console.log(brandDetails);
  
  return (
    <div className='py-8 row bg-red-400'  >
        {brandDetails?.map((brand)=> <div key={brand?._id} className=' w-full' >
        <img className='w-full' src={brand?.image} alt="" />
        <h2>{brand?.name}</h2>
        </div>)}
       
 
   
    </div>
  )
}


