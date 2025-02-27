'use client'
import Button from '../button';
import Image from 'next/image';
import GrayVector from '../../public/Gray-Vector.png';
import PercentIcon from '../../public/Percent-Icon.png';
import StarYellow from '../../public/StarYellow.png';
import StarGray from '../../public/StarGray.png';

function RateProduct({
  isOpen,
  toggleOpen
}: {
  isOpen: boolean,
  toggleOpen: () => void
}) {
  return (
    <div onClick={toggleOpen}>
      {isOpen ? (
    <div 
      onClick={toggleOpen} 
      className='flex flex-col justify-center items-center mt-10'
    >
      <p>
        Let us know what your experience
        with your product has been like 
        for you.
      </p>
    <div id='Stars'className='flex flex-row justify-center items-center m-8'>
      <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
      <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
      <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
      <Image className='mx-1' src={StarGray} alt={'Gray Star'}></Image>
      <Image className='mx-1' src={StarGray} alt={'Gray Star'}></Image>
    </div>
    <input
      className='my-4 bg-[#D9D9D9] w-full p-12 rounded-[2vw]'
      type="text" 
      placeholder="Leave a comment (optional)"
      required
      autoCapitalize="off"
      autoCorrect="off" 
      />
      <Button className=' p-y-6 w-full rounded-md text-bold'>Submit</Button>
  </div>
    ) : (
      <div className="my-2">
        <div className=" h-1 bg-[#EEEEEE] mb-4" />
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Image src={PercentIcon} alt='Percent Icon' />   
            <h2 className="font-bold">Rate Product</h2>
          </div>
          <Image src={GrayVector} alt='Gray Vector' />
      </div>
      <div className=" h-1 bg-[#EEEEEE] mt-4" />
    </div>
    )}
  </div>
  )
}

export default RateProduct