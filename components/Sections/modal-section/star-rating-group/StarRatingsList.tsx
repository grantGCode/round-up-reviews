'use client'
import { useState, useEffect } from 'react';
import StarRating from '../../../Clusters/StarRating';
import type { productReview } from '../../../../app/types/common';

function StarRatingsList({
  revData
}: {
  revData: productReview[]
}) {
  const [reviewData, setReviewData] = useState<productReview[]>(revData)
  const [totalRating, setTotal] = useState<number>(0)
  const [starCounts, setStarCounts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

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

  function countStarRatings(reviews: productReview[]): Record<number, number> {
    const starCount: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    reviews.forEach(({ star_rating }) => {
      if (starCount[star_rating] !== undefined) {
        starCount[star_rating] += 1;
      }
    });

    return starCount;
  }

  useEffect(() => {
    setReviewData(revData)
    setStarCounts(countStarRatings(revData))

    if (revData.length > 0) {
      const mostCommonRating = getMostCommonStarRating(revData);
      setTotal(mostCommonRating);
    }
  }, [revData])

  return (
    <div className='flex flex-col bg-[#F3F3F3] rounded-lg my-12 w-full md:max-w-[500px] mx-auto'>
      <div className='flex flex-row justify-center m-4 gap-16'>
        <div className='flex items-center'>
          <div className='flex flex-col gap-1'>
            <h2 className='flex font-bold text-[#000000]'>{`${totalRating} Stars`}</h2>
            <p className='text-[#BBB7C6]'>{`Based on ${reviewData?.length} reviews`}</p>
          </div>
        </div>
        <ul className='flex flex-col'>
          <li className="font-bold">5 star : {starCounts[5]}</li>
          <li className="font-bold">4 star : {starCounts[4]}</li>
          <li className="font-bold">3 star : {starCounts[3]}</li>
          <li className="font-bold">2 star : {starCounts[2]}</li>
          <li className="font-bold">1 star : {starCounts[1]}</li>
        </ul>
      </div>
      <StarRating rating={totalRating} />
    </div>
  )
}

export default StarRatingsList
