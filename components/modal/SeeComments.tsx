'use client'
import { useState, useEffect } from "react"
// import Image from "next/image"
// import WordBubble from '../../public/Word-Bubble-Icon.png'
// import GrayVector from '../../public/Gray-Vector.png'
import type { productReview } from '../../app/types/common'

function SeeComments({
  revData
}:{
  revData: productReview[]
}) {

  const [reviewData, setReviewData] = useState<productReview[]>(revData)

  useEffect(() => {
    setReviewData(revData)
  }, [revData])
    console.log(reviewData)
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