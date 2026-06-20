'use client'
import { useState } from 'react';
import { submitNewRating } from '../../../../lib/actions';
import Button from '../../../Widgets/button';
import AddStarRating from '../../../Clusters/AddStarRating';
import ProductImage from '../Clusters/ProductImage';
import type { productInfo } from '../../../../app/types/common'

function NewReviewForum({
  productId,
  productName,
  prodImage,
  onSubmitComplete
}: {
  productId: number,
  productName: productInfo | string,
  prodImage: string,
  onSubmitComplete: () => void
}) {
  const [userStarRate, setUserStarRate] = useState<number>()
  const [userComment, setUserComment] = useState<string | null>('')

  const createNewRating = (rating: number) => {
    setUserStarRate(rating)
  }

  return (
    <form
      action={submitNewRating}
      className='flex flex-col justify-center items-center mt-10 lg:mt-0 w-full md:max-w-[500px] mx-auto'
    >
      <div className={`hidden lg:block`}>
        <ProductImage imagePath={prodImage} />
      </div>
      <p className='text-center'>
        Let us know what your experience
        with your {`${productName || 'product'}`} has been like
        for you.
      </p>
      <AddStarRating onRatingChange={createNewRating} />
      <input type='hidden' name='product_id' value={productId} />
      <input type='hidden' name='star_rating' value={userStarRate ?? ''} />
      <textarea
        className={`my-4 bg-[#D9D9D9] w-full p-4 rounded-[2vw] resize-none overflow-y-auto h-32 text-left placeholder:text-center focus:placeholder:text-left`}
        name='written_comment'
        placeholder='Leave a comment (optional)'
        required
        autoCapitalize='off'
        autoCorrect='off'
        maxLength={280}
        value={userComment || ''}
        onChange={(e) => setUserComment(e.target.value)}
      />
      <Button
        className='p-y-6 w-full rounded-md text-bold'
        onClick={async () => {
          const formData = new FormData();
          formData.append("product_id", String(productId));
          formData.append("star_rating", userStarRate ? String(userStarRate) : '');
          formData.append("written_comment", userComment || '');

          await submitNewRating(formData);
          onSubmitComplete();
        }}
      >
        Submit My Review Round-Up
      </Button>
    </form>
  )
}

export default NewReviewForum
