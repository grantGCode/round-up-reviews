import Image from 'next/image';
import { useState, useEffect } from 'react';
import StarRatingSmall from '../../../Clusters/StarRatingSmall';
import WordBubble from '../../../../public/Word-Bubble-Icon.png';
import type { productReview } from '../../../../app/types/common';
import styles from './CommentsList.module.css';

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
    <div className='space-y-4 p-2 lg:p-0 lg:pr-2 lg:border-2 lg:border-gray-900 lg:rounded-xl lg:max-w-4xl lg:mx-auto'>
        {/* Header - desktop only */}
        <div className='hidden lg:flex items-center gap-2 bg-[#E6E6E6] px-6 py-4 rounded-t-xl lg:-mr-2'>
          <Image src={WordBubble} alt='Word Bubble Icon' />
          <h3 className='text-lg font-bold'>Comments (x {reviewData.filter(r => r.written_comment?.trim()).length})</h3>
        </div>
        <div className={`max-h-60 overflow-y-auto space-y-4 p-2 pr-3 ${styles.commentsScroll}`}>
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
    </div>
  )
}

export default CommentsList
