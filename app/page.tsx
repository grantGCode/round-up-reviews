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
      <div>
         {/*Add Search bar filter via vendor or product name */}
      </div>
      <ProductsList 
        list={productData} 
        searchParams={searchParams} 
      />
    </div>
  )
}