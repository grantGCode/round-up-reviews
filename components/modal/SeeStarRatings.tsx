'use client'
import Image from 'next/image'
// import PercentIcon from '../../public/Percent-Icon.png'
// import GrayVector from '../../public/Gray-Vector.png'
import StarYellow from '../../public/StarYellow.png';
import StarGray from '../../public/StarGray.png';


function SeeStarRatings() {
  return (
    // Closed
    // <div className='flex flex-row'>
    //     <Image src={PercentIcon} alt='Percent Icon' />   
    //     <h2>SeeStarRatings</h2>
    //     <Image src={GrayVector} alt='Gray Vector' />
    // </div>
    // open
    <div className='flex flex-col bg-[#F3F3F3] rounded-lg'>
      <div className='flex flex-row justify-stretch m-4'>
          <div className='flex items-center'>
              {/* <Image className='' src={StarYellow} alt={'Yellow Star'}></Image> */}
            <div className='flex flex-col'>
              <h2 className='flex font-bold text-[#000000]' >{`${3} Stars`}</h2>
              <p className='text-[#BBB7C6]'>{`Based on ${120} reviews`}</p>
            </div>
          </div>
          <ul className='flex flex-col'>
            <li>5 star</li>
            <li>4 star</li>
            <li>3 star</li>
            <li>2 star</li>
            <li>1 star</li>
          </ul>
      </div>
      <div id='Stars'className='flex flex-row justify-center items-center m-4'>
        <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
        <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
        <Image className='mx-1' src={StarYellow} alt={'Yellow Star'}></Image>
        <Image className='mx-1' src={StarGray} alt={'Gray Star'}></Image>
        <Image className='mx-1' src={StarGray} alt={'Gray Star'}></Image>
      </div>
    </div>
  )
}

export default SeeStarRatings