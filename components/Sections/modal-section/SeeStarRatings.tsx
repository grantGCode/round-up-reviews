'use client'
import StarRatingsList from './star-rating-group/StarRatingsList';
import ClosedStarRatings from './star-rating-group/ClosedStarRatings';
import type { productReview } from '../../../app/types/common'

function SeeStarRatings({
  revData,
  isOpen,
  toggleOpen
}: {
  revData: productReview[],
  isOpen: boolean,
  toggleOpen: () => void
}) {

  return (
    <div onClick={toggleOpen}>
      {isOpen ? (
        <StarRatingsList revData={revData} />
      ) : (
        <ClosedStarRatings />
      )}
    </div>
  )
}

export default SeeStarRatings