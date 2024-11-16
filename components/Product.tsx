import type { /*InferGetServerSidePropsType,*/ GetStaticProps } from 'next'
// import { getStaticProps } from 'next/dist/build/templates/pages';
import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import JacketOne from '../public/JacketOne.jpg'

type Review = {
  id: number; 
  product_name: string; 
  vender_name: string;
  star_rating: number;
  written_comment: string;
}

export const getProductData = (async () => {
  const res = await fetch('localhost:3000/api');
  const reviews = await res.json();
  return { props: reviews }
}) satisfies GetStaticProps<{
  reviews: Review
}>

export default function Product(/*{
  reviews
}: InferGetServerSidePropsType<typeof getStaticProps>*/){
  return (
    <ul>
      {/* {reviews.map((review: Review) => (
        <li key={review.id} className='flex flex-col justify-center items-center'>
          <Image className='shadow' src={JacketOne} alt='Jacket One' />
          <h1 className='mt-10 font-bold'>{review.product_name}</h1>
          <h2>{review.star_rating}</h2>
          <Link 
            className='mt-5 px-4 py-2 bg-[#005FF6] text-white rounded hover:bg-blue-700'
            href='/?show=true'
          >
            Rate
          </Link>
        </li>
      ))} */}
    </ul>
  )
}
