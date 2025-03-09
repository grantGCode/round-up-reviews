import Image from 'next/image';
import Hero from '../components/Hero';
import BrakeLine from '../public/brakeLineHome.png';
import ProductsList from '../components/ProductsList';
import type { productInfo } from './types/common';


export default async function Home({ 
  searchParams, 
}: {
  searchParams: { show?: string; productId?: string };
}) {  
  const res = await fetch('http://localhost:3000/api/Products', {
    
    // cache data
    // cache: 'force-cache' 
    
    //Revalidate in 30 sec
    next: {
      revalidate: 30
    }
  });
  
  const productData: productInfo[] = await res.json();

  return (
    <div className='flex flex-col justify-center items-center'>
      <Hero />
      <Image 
        className='py-20'
        src={BrakeLine} 
        alt='brake line' 
      />
      <ProductsList 
        list={productData} 
        searchParams={searchParams} 
      />
    </div>
  )
}