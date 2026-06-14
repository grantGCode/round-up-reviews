import Image from 'next/image';
import PercentIcon from '../../../public/Percent-Icon.png';
import GrayVector from '../../../public/Gray-Vector.png';

function ClosedStarRatings() {
  return (
    <div className="mt-8">
      <div className=" h-1 bg-[#EEEEEE] my-4" />
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image src={PercentIcon} alt="Percent Icon" />
          <h2 className="font-bold">SeeStarRatings</h2>
        </div>
        <Image src={GrayVector} alt="Gray Vector" />
      </div>
      <div className=" h-1 bg-[#EEEEEE] mt-4" />
    </div>
  )
}

export default ClosedStarRatings
