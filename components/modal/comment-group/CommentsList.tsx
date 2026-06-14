import { useState, useEffect } from 'react';
import StarRatingSmall from '../../StarRatingSmall';
import type { productReview } from '../../../app/types/common';

function CommentsList({
  revData
}: {
  revData: productReview[]
}) {
  const [reviewData, setReviewData] = useState<productReview[]>(revData)

  useEffect(() => {
    setReviewData(revData)
  }, [revData])

  return (
    <div className='max-h-60 overflow-y-auto space-y-4 p-2'>
      <ul>
        {reviewData
          ?.filter((reviews) => reviews.written_comment && reviews.written_comment.trim() !== '')
          .map((reviews) => (
            <li key={reviews.id} className='flex flex-col bg-[#F3F3F3] rounded-lg p-5 mb-4 w-full md:max-w-[500px] mx-auto'>
              <StarRatingSmall rating={reviews?.star_rating} />
              <p className='m-1' >{reviews?.written_comment}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CommentsList
