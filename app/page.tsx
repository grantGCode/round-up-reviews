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

  
  const API_URL = process.env.URL;
  
  if (!API_URL) {
    throw new Error("API_URL is not defined");
  }
  
  let productData: productInfo[] = []
  
  try{
    const res = await fetch(`${API_URL}/api/Products`, {
      cache: 'force-cache' 
    });
    if (!res.ok) {
      console.error("Failed to fetch products:", await res.text());
      throw new Error("Failed to fetch products");
    }
    productData = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <Hero />
      <Image 
        className='pt-5 pb-5'
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