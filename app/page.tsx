import Hero from '../components/Clusters/Hero';
import ProductsList from '../components/Sections/ProductsList-Section';
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
    const res = await fetch(`${API_URL}/api/Products`, { next: { tags: [`Products`] } });
    if (!res.ok) {
      console.error("Failed to fetch products:", await res.text());
      throw new Error("Failed to fetch products");
    }
    productData = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[20px]'>
      <Hero />
      <ProductsList 
        list={productData} 
        searchParams={searchParams} 
      />
    </div>
  )
}