'use client'
import NewReviewForum from './rate-form-group/NewReviewForum';
import ClosedReviewForum from './rate-form-group/ClosedReviewForum';
import type {productInfo} from '../../../app/types/common'

function RateProductToggle({
  productId,
  isOpen,
  toggleOpen,
  productData
}: {
  productId: number,
  isOpen: boolean,
  toggleOpen: () => void
  productData: productInfo | string
}) {

  return (
    <div onClick={toggleOpen}>
      {isOpen ? (
        <NewReviewForum
            productId={productId}
            productName={productData}
            onSubmitComplete={toggleOpen}
          />
      ) : (
        <ClosedReviewForum />
      )}
    </div>
  )
}

export default RateProductToggle