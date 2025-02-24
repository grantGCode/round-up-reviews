import Image from 'next/image';
import BreakLine from '../public/brakeLineHome.png';
import ProductsList from '../components/ProductsList';
import type { productInfo, /*productReview*/ } from './types/common'

export default async function Home({ 
  searchParams, 
}: {
  searchParams: { show?: string; productId?: string };
}) {  
  const res = await fetch('http://localhost:3000/api/Products', {
    
    // cache data
    cache: 'force-cache' 
    
    //Revalidate in 30 sec
    // next: {
    //   revalidate: 30
    // }
  });
  
  const productData: productInfo[] = await res.json();

  // const res2 = await fetch('http://localhost:3000/api/ReviewData', {
  //   // cache data
  //   // cache: 'force-cache' 
          
  //   //Revalidate in 30 sec
  //   next: {
  //     revalidate: 30
  //   }
  // });
  // const reviewsData: productReview[] = await res2.json();
  // const Reviews = reviewsData.map((reviews: productReview) => reviews)

  return (
    <div className='flex flex-col justify-center items-center'>
      <div 
        className='pt-20 font-bold' id='hero'>
        <p>Hi Janet,</p>
        <p>Please Let Us Know</p>
        <p>What You Think of Your Jacket.</p>
        <p>We Appreciate Your Feedback!</p>
      </div>
      <Image className='py-20' src={BreakLine} alt='break line' />
      <ProductsList 
        list={productData} 
        // allReviews={Reviews} 
        searchParams={searchParams} 
      />
    </div>
  )
}