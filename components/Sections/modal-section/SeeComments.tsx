'use client'
import CommentsList from './comment-group/CommentsList';
import ClosedComments from './comment-group/ClosedComments';
import type { productReview } from '../../../app/types/common';

function SeeComments({
  revData,
  isOpen,
  toggleOpen
}: {
  revData: productReview[],
  isOpen: boolean,
  toggleOpen: () => void
}) {

  return (
    <div onClick={toggleOpen} >
      {isOpen ? (
        <CommentsList revData={revData} />
      ) : (
        <ClosedComments />
      )}
    </div>
  )
}

export default SeeComments