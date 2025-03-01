'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import SmallStar from '../../public/Small-Star.png'
import WordBubble from '../../public/Word-Bubble-Icon.png'
import GrayVector from '../../public/Gray-Vector.png'
import type { productReview } from '../../app/types/common'

function SeeComments({
  revData,
  isOpen,
  toggleOpen
}: {
  revData: productReview[],
  isOpen: boolean,
  toggleOpen: () => void
}) {

  const [reviewData, setReviewData] = useState<productReview[]>(revData)

  useEffect(() => {
    setReviewData(revData)
  }, [revData])

  return (
    <div onClick={toggleOpen} >
      {isOpen ? (
    <div className='max-h-60 overflow-y-auto space-y-4 p-2'>
      <ul>
        {reviewData
          ?.filter((reviews) => reviews.written_comment && reviews.written_comment.trim() !== '')
          .map((reviews) => (
            <li key={reviews.id} className="flex flex-col bg-[#F3F3F3] rounded-lg my-12 p-5">
              <div className="flex flex-row items-center gap-1">
                <h5 className="text-[#000000] font-bold p-1">{reviews?.star_rating}</h5>
                <Image className="h-5 w-5" src={SmallStar} alt="Stars" />
              </div>
              <p>{reviews?.written_comment}</p>
            </li>
          ))
        }
      </ul>
    </div>
      ) : (
        <div className='mt-2'>
          <div className=' h-1 bg-[#EEEEEE] mb-4' />
            <div className='flex flex-row items-center justify-between w-full'>
              <div className='flex items-center gap-4'>
                <Image src={WordBubble} alt='Word Bubble Icon' />
                <h2 className='font-bold'>See Comments</h2>
              </div>
              <Image src={GrayVector} alt='Gray Vector' />
            </div>
          <div className='h-1 bg-[#EEEEEE] mt-4' />
        </div>
      )}
    </div>
  )
}

export default SeeComments