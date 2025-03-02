'use client'
import {useState} from 'react';
import Button from '../button';
import Image from 'next/image';
import GrayVector from '../../public/Gray-Vector.png';
import PercentIcon from '../../public/Percent-Icon.png';
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

  const submitNewRating = async (product_id: number, star_rating: number | undefined, written_comment: string | null) => {
    const res = await fetch('http://localhost:3000/api/Reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id, star_rating, written_comment }),
    })

    const data = await res.json();
    console.log(data)
  };

  return (
    <div onClick={toggleOpen}>
      {isOpen ? (
      <div className='flex flex-col justify-center items-center mt-10'
        onClick={toggleOpen} 
      >
        <p>
          Let us know what your experience
          with your {`${productName}`} has been like 
          for you.
        </p>
        <AddStarRating onRatingChange={createNewRating} />
        <input className='my-4 bg-[#D9D9D9] w-full p-12 rounded-[2vw]'
          type="text" 
          placeholder="Leave a comment (optional)"
          required
          autoCapitalize="off"
          autoCorrect="off" 
          onChange={(e) => setUserComment(e.target.value)}
        />
        <Button className='p-y-6 w-full rounded-md text-bold' 
          onClick={() => submitNewRating(productId, userStarRate, userComment)}
        >
          Submit
        </Button>
      </div>
      ) : (
        <div className="my-2">
          <div className=" h-1 bg-[#EEEEEE] mb-4" />
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Image 
                src={PercentIcon} 
                alt='Percent Icon' 
              />   
              <h2 className="font-bold">Rate Product</h2>
            </div>
            <Image src={GrayVector} 
              alt='Gray Vector' 
            />
          </div>
          <div className=" h-1 bg-[#EEEEEE] mt-4" />
        </div>
      )}
    </div>
  )
}

export default RateProduct