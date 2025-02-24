'use client'
import { useState, useEffect } from "react"
// import Image from "next/image"
// import WordBubble from '../../public/Word-Bubble-Icon.png'
// import GrayVector from '../../public/Gray-Vector.png'
import type { productReview } from '../../app/types/common'

function SeeComments({
  refId
}:{
  refId: { id: number }
}) {

  const [reviewData, setReviewData] = useState<productReview[]>()

  useEffect(() => {
    async function GetReviews(): Promise<void> {
      const res = await fetch('http://localhost:3000/api/ReviewData', {
        // cache data
        // cache: 'force-cache'       
        //Revalidate in 30 sec
        next: {
          revalidate: 30
        }
      });
      const data: productReview[] = await res.json();
      const allReview = data.filter((review: productReview) => {
        if(review.product_id === refId.id){
          return review
        }
      });
      setReviewData(allReview)
    };
    GetReviews()
  }, [refId])
    
  return (
    //Closed
    // <div className='flex flex-row'>
    // <Image src={WordBubble} alt='Word Bubble Icon' />
    // <h2>See Comments</h2>
    // <Image src={GrayVector} alt='Gray Vector' />
    // </div>
    //Opened
    <div>
      <ul>{reviewData?.map((reviews: productReview) => (
        <li key={reviews.id} className='flex flex-col bg-[#F3F3F3] rounded-lg my-12'>
          <h5 className="text-[#000000]">{reviews?.star_rating}</h5>
          <p>{reviews?.written_comment}</p>
        </li>
      ))
      }</ul>
    </div>
  )
}

export default SeeComments