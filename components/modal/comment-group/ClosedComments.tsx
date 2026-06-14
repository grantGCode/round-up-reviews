import Image from 'next/image';
import WordBubble from '../../../public/Word-Bubble-Icon.png';
import GrayVector from '../../../public/Gray-Vector.png';

function ClosedComments() {
  return (
    <div className='mt-2'>
      <div className=' h-1 bg-[#EEEEEE] mb-4' />
        <div className='flex flex-row items-center justify-between w-full'>
          <div className='flex items-center gap-4'>
            <Image src={WordBubble} alt='Word Bubble Icon' />
            <h2 className='font-bold'>See Comments</h2>
          </div>
          <Image src={GrayVector} alt='Gray Vector' />
        </div>
      <div className='h-1 bg-[#EEEEEE] mt-4' />
    </div>
  )
}

export default ClosedComments
