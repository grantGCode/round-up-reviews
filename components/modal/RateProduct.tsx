'use client'
import {useState} from 'react';
import { submitNewRating } from '../../lib/actions';
import Button from '../button';
import Image from 'next/image';
import GrayVector from '../../public/Gray-Vector.png';
import BlackStar from '../../public/stars/Texas-Star-Black.png';
import AddStarRating from '../AddStarRating';
import type {productInfo} from '../../app/types/common'

function RateProduct({
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

  const [productName, setProductName] = useState(productData)
  const [userStarRate, setUserStarRate] = useState<number>()
  const [userComment, setUserComment] = useState<string | null>('')
  

  if(productName === undefined){
    setProductName('product')
  }

  const createNewRating = (rating: number, ) => {
    setUserStarRate(rating)
  }

  return (
    <div onClick={toggleOpen}>
      {isOpen ? (
      <form
        action={submitNewRating}
        className='flex flex-col justify-center items-center mt-10 w-full md:max-w-[500px] mx-auto'
        onClick={toggleOpen} 
      >
        <p>
          Let us know what your experience
          with your {`${productName}`} has been like 
          for you.
        </p>
        <AddStarRating onRatingChange={createNewRating} />
        <input type='hidden' name='product_id' value={productId} />
        <input type='hidden' name='star_rating' value={userStarRate ?? ''} />
        <textarea
          className={`my-4 bg-[#D9D9D9] w-full p-4 rounded-[2vw] resize-none overflow-y-auto h-32 
                      text-left placeholder:text-center focus:placeholder:text-left`}
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
          type='submit'
        >
          Submit My Review Round-Up
        </Button>
      </form>
      ) : (
        <div className='my-2'>
          <div className=' h-1 bg-[#EEEEEE] mb-4' />
          <div className='flex flex-row items-center justify-between w-full'>
            <div className='flex items-center gap-4'>
              <Image 
                src={BlackStar} 
                alt='Percent Icon'
                height={30}
                width={30} 
              />   
              <h2 className='font-bold'>Rate Product</h2>
            </div>
            <Image src={GrayVector} 
              alt='Gray Vector' 
            />
          </div>
          <div className=' h-1 bg-[#EEEEEE] mt-4' />
        </div>
      )}
    </div>
  )
}

export default RateProduct