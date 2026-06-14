import Image from 'next/image';
import GrayVector from '../../../public/Gray-Vector.png';
import BlackStar from '../../../public/stars/Texas-Star-Black.png';

function ClosedReviewForum() {
  return (
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
  )
}

export default ClosedReviewForum
