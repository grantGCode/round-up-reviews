'use client'
import { useState, useEffect } from 'react';
import SeeStarRatings from './SeeStarRatings';
import SeeComments from './SeeComments';
import RateProduct from './RateProduct';
import Image from 'next/image';
import Link from 'next/link';
import ArrowLeft from '../../public/Arrow-Left-Icon.png'
import type { productInfo } from '../../app/types/common';

export default function ProductModal({ 
  params,
}: {
  params: { id: number }
}) {
  
  const [productMetaData, setProductMetaData] = useState<productInfo>()
  const [productID] = useState(params.id);
  
  useEffect(() => {
    async function GetProductInfo() {
      const res = await fetch('http://localhost:3000/api/Products', {
        // cache data
        cache: 'force-cache' 
        
        //Revalidate in 30 sec
        // next: {
        //   revalidate: 30
        // }
      });
      const data: productInfo[] = await res.json();
      const singleProduct = data.find((product: productInfo) => {
        if(product.id === productID){
          return {product}
        }
      });
      setProductMetaData(singleProduct)
    };
    GetProductInfo()
  }, [productID])

  if (productMetaData === undefined) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg bg-[#E5E5E5]">
          <Link href='/'>
            <Image src={ArrowLeft} alt='X'></Image>
          </Link>
          <div className='flex flex-col justify-center'>
            <h5 className='mt-10'>{productMetaData.vender_name}</h5>
            <h4 className='mt-10'>{productMetaData.product_name}</h4>
            <h4>Over All Star Rating</h4>
            <SeeStarRatings />
            <SeeComments />
            <RateProduct />
          </div>
        </div>
    </div>
  )
}