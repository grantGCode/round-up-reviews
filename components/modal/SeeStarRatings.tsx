'use client'
import { useState, useEffect } from "react"
import Image from 'next/image'
// import PercentIcon from '../../public/Percent-Icon.png'
// import GrayVector from '../../public/Gray-Vector.png'
import StarYellow from '../../public/StarYellow.png';
import StarGray from '../../public/StarGray.png';
import type { productReview } from '../../app/types/common'

function SeeStarRatings({
  revData
}:{
  revData: productReview[]
}) {

  const [reviewData, setReviewData] = useState<productReview[]>(revData)
  const [totalRating, setTotal ] = useState<number>()
  const [starCounts, setStarCounts] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

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

      if(reviewData.length > 0) {
        const mostCommonRating = getMostCommonStarRating(reviewData);
        setTotal(mostCommonRating);
      }

  }, [revData, reviewData])  

  return (
    // Closed
    // <div className='flex flex-row'>
    //     <Image src={PercentIcon} alt='Percent Icon' />   
    //     <h2>SeeStarRatings</h2>
    //     <Image src={GrayVector} alt='Gray Vector' />
    // </div>
    // open
    <div className='flex flex-col bg-[#F3F3F3] rounded-lg my-12'>
      <div className='flex flex-row justify-stretch m-4'>
          <div className='flex items-center'>
              {/* <Image className='' src={StarYellow} alt={'Yellow Star'}></Image> */}
            <div className='flex flex-col'>
              <h2 className='flex font-bold text-[#000000]' >{`${totalRating} Stars`}</h2>
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
      <div id='Stars'className='flex flex-row justify-center items-center m-4'>
        <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
        <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
        <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
        <Image className='mx-1' src={StarGray} alt={'Gray Star'}></Image>
        <Image className='mx-1' src={StarGray} alt={'Gray Star'}></Image>
      </div>
    </div>
  )
}

export default SeeStarRatings