'use client'
import Button from '../button';
import Image from 'next/image';
import StarYellow from '../../public/StarYellow.png';
import StarGray from '../../public/StarGray.png';

function RateProduct() {
  return (
    <div className='flex flex-col justify-center items-center'>
            <p>
              Let us know what your experience
              with your product has been like 
              for you.
            </p>
            <div id='Stars'className='flex flex-row justify-center items-center'>
              <Image src={StarYellow} alt={'Yellow Star'}></Image>
              <Image src={StarYellow} alt={'Yellow Star'}></Image>
              <Image src={StarYellow} alt={'Yellow Star'}></Image>
              <Image src={StarGray} alt={'Gray Star'}></Image>
              <Image src={StarGray} alt={'Gray Star'}></Image>
            </div>
            <input
              className='h-'
              type="text" 
              placeholder="Leave a comment (optional)"
              required
              autoCapitalize="off"
              autoCorrect="off" 
            />
            <Button>Submit</Button>
          </div>
  )
}

export default RateProduct