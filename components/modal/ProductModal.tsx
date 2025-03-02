'use client'
import { useState, useEffect } from 'react';
import SeeStarRatings from './SeeStarRatings';
import SeeComments from './SeeComments';
import RateProduct from './RateProduct';
import Image from 'next/image';
import EmptyImage from '../../public/product-images/Empty-Image.png';
import SmallStar from '../../public/stars/Small-Star.png'
import Link from 'next/link';
import ArrowLeft from '../../public/Arrow-Left-Icon.png'
import type { productInfo, productReview } from '../../app/types/common';

export default function ProductModal({ 
  productInfo,
  myReviewData,
}: {
  productInfo: productInfo
  myReviewData: productReview[]
}) {
  
  const [reviewData, setReviewData] = useState<productReview[]>()
  const [totalRating, setTotal ] = useState<number>()

  const [openComponent, setOpenComponent] = useState<string>('rate');

  function toggleComponent(componentName: string) {
    if (openComponent !== componentName) {
      setOpenComponent(componentName);
    }
  }
  
  function getMostCommonStarRating(reviews: productReview[]): number {
    if (reviews.length === 0) return 0; // Default if there are no reviews
  
    const starCount: Record<number, number> = {};
  
    // Count occurrences of each star rating
    reviews.forEach(({ star_rating }) => {
      starCount[star_rating] = (starCount[star_rating] || 0) + 1;
    });
  
    // Find the most common star rating
    return Object.entries(starCount)
      .sort((a, b) => b[1] - a[1]) // Sort by frequency (descending)
      .map(([star]) => Number(star))[0]; // Return the most common rating
    }

  useEffect(() => {
    setReviewData(myReviewData)
    
    if(myReviewData.length > 0) {
      const mostCommonRating = getMostCommonStarRating(myReviewData);
      setTotal(mostCommonRating);
    }

  }, [myReviewData])

  if (productInfo === undefined) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-end justify-center">
      <div className="pb-24 p-8 border w-full shadow-lg rounded-t-[3vw] bg-[#FFFFFF]">
        <Link href='/'>
          <Image src={ArrowLeft} alt='X'></Image>
        </Link>
        <div className='flex justify-center items-center'>
          <Image src={EmptyImage} alt={'Product Image'} />
        </div>
        <div className='flex flex-col justify-center bg-[#FFFFFF]'>
          <h5 className='mt-10 text-10'>{productInfo.vender_name}</h5>
          <h4 className='font-bold mt-1 mb-1 text-xl'>{productInfo.product_name}</h4>
          <div className='flex flex-row items-center gap-1'>
            <Image className='h-5 w-5' src={SmallStar} alt='Stars' />
            <p className='font-bold'>{`${totalRating}`}</p>
            <p className='text-[#BBB7C6]'>{`(${reviewData?.length} reviews)`}</p>
          </div>
          <SeeStarRatings
            revData={reviewData ?? []}
            isOpen={openComponent === 'ratings'}
            toggleOpen={() => toggleComponent('ratings')}
          />
          <SeeComments
            revData={reviewData ?? []}
            isOpen={openComponent === 'comments'}
            toggleOpen={() => toggleComponent('comments')}
          />
          <RateProduct
            isOpen={openComponent === 'rate'}
            toggleOpen={() => toggleComponent('rate')}
            productData={productInfo.product_name}
            productId={productInfo.id}
          />
        </div>
      </div>
    </div>
  )
}