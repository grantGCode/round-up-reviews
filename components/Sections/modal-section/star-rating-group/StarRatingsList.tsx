'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PercentIcon from '../../../../public/Percent-Icon.png';
import StarRatingPercentageBar from '../modal-widgets/StarRatingPercentageBar';
import type { productReview } from '../../../../app/types/common';
import { getAvgStarRating } from '../../../../lib/reviewStats';

function StarRatingsList({
  revData
}: {
  revData: productReview[]
}) {
  const [reviewData, setReviewData] = useState<productReview[]>(revData)
  const [totalRating, setTotal] = useState<number>(0)
 

  useEffect(() => {
    setReviewData(revData)

    if (revData.length > 0) {
      const mostCommonRating = getAvgStarRating(revData);
      setTotal(mostCommonRating);
    }
  }, [revData])

  return (
    <div className='flex flex-col bg-[#F3F3F3] rounded-lg my-12 lg:my-0 w-full md:max-w-[500px] mx-auto lg:border-2 lg:border-gray-900 lg:rounded-xl lg:bg-white lg:max-w-full lg:pr-2'>
      <div className='hidden lg:flex items-center gap-2 bg-[#E6E6E6] px-6 py-4 rounded-t-xl lg:-mr-2'>
        <Image src={PercentIcon} alt="Percent Icon" />
        <h3 className='text-lg font-bold'>Star Ratings</h3>
      </div>
      <div className='flex flex-row justify-between items-center gap-6 p-6'>
        <StarRatingPercentageBar reviews={reviewData} />
        <div className='flex items-center justify-center flex-shrink-0'>
          <div className='flex flex-col gap-1 text-center'>
            <h2 className='font-bold text-2xl'>{`${totalRating}/5`}</h2>
            <p className='text-[#BBB7C6] text-sm'>{`Based on ${reviewData?.length} reviews`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarRatingsList