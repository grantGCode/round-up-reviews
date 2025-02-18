'use client'
import Button from '../button';
import Image from 'next/image';
import StarYellow from '../../public/StarYellow.png';
import StarGray from '../../public/StarGray.png';

function RateProduct() {
  return (
    // Closed
    // <div className='flex flex-row'>
    //     <Image src={PercentIcon} alt='Percent Icon' />   
    //     <h2>Rate Product</h2>
    //     <Image src={GrayVector} alt='Gray Vector' />
    // </div>
    //Open
    <div className='flex flex-col justify-center items-center mt-20'>
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
  )
}

export default RateProduct