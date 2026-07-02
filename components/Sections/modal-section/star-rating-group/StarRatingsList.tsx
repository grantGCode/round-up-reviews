'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PercentIcon from '../../../../public/Percent-Icon.png';
// import StarRatingProgressBar from '../modal-widgets/StarRatingProgressBar';
import type { productReview } from '../../../../app/types/common';

function StarRatingsList({
  revData
}: {
  revData: productReview[]
}) {
  const [reviewData, setReviewData] = useState<productReview[]>(revData)
  const [totalRating, setTotal] = useState<number>(0)
  // const [starCounts, setStarCounts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  function getMostCommonStarRating(reviews: productReview[]): number {
    if (reviews.length === 0) return 0;

    const starCount: Record<number, number> = {};

    reviews.forEach(({ star_rating }) => {
      starCount[star_rating] = (starCount[star_rating] || 0) + 1;
    });

    return Object.entries(starCount)
      .sort((a, b) => b[1] - a[1])
      .map(([star]) => Number(star))[0];
  }

  // function countStarRatings(reviews: productReview[]): Record<number, number> {
  //   const starCount: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  //   reviews.forEach(({ star_rating }) => {
  //     if (starCount[star_rating] !== undefined) {
  //       starCount[star_rating] += 1;
  //     }
  //   });

  //   return starCount;
  // }

  useEffect(() => {
    setReviewData(revData)
    // setStarCounts(countStarRatings(revData))

    if (revData.length > 0) {
      const mostCommonRating = getMostCommonStarRating(revData);
      setTotal(mostCommonRating);
    }
  }, [revData])

  return (
    <div className='flex flex-col bg-[#F3F3F3] rounded-lg my-12 lg:my-0 w-full md:max-w-[500px] mx-auto lg:border-2 lg:border-gray-900 lg:rounded-xl lg:bg-white lg:max-w-full lg:pr-2'>
      {/* Header - desktop only */}
      <div className='hidden lg:flex items-center gap-2 bg-[#E6E6E6] px-6 py-4 rounded-t-xl lg:-mr-2'>
        <Image src={PercentIcon} alt="Percent Icon" />
        <h3 className='text-lg font-bold'>Star Ratings</h3>
      </div>
      <div className='flex flex-row justify-between items-center gap-6 p-6'>
        <ul className='flex flex-col gap-4 flex-shrink-0'>
          <li className="font-bold text-sm">5 star</li>
          <li className="font-bold text-sm">4 star</li>
          <li className="font-bold text-sm">3 star</li>
          <li className="font-bold text-sm">2 star</li>
          <li className="font-bold text-sm">1 star</li>
        </ul>
        {/* <StarRatingProgressBar starCounts={starCounts} />
        <div className='flex flex-col gap-6 flex-grow'>
          <div className='bg-yellow-400 rounded' style={{ width: `${Math.max(starCounts[5] * 3, 20)}px`, height: '8px' }}></div>
          <div className='bg-gray-400 rounded' style={{ width: `${Math.max(starCounts[4] * 3, 20)}px`, height: '8px' }}></div>
          <div className='bg-gray-400 rounded' style={{ width: `${Math.max(starCounts[3] * 3, 20)}px`, height: '8px' }}></div>
          <div className='bg-gray-400 rounded' style={{ width: `${Math.max(starCounts[2] * 3, 20)}px`, height: '8px' }}></div>
          <div className='bg-gray-400 rounded' style={{ width: `${Math.max(starCounts[1] * 3, 20)}px`, height: '8px' }}></div>
        </div> */}
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