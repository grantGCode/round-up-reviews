import Image from 'next/image';
import BreakLine from '../public/brakeLineHome.png';
import ProductsList from '../components/ProductsList';
import type { productInfo } from './types/common'

export default async function Home({ 
  searchParams, 
}: {
  searchParams: { show?: string; productId?: string };
}) {  
  const res = await fetch('http://localhost:3000/api/Products', {
    next: {
      revalidate: 30
    }
  });
  const data: productInfo[] = await res.json();
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
      <ProductsList list={data} searchParams={searchParams} />
    </div>
  )
}