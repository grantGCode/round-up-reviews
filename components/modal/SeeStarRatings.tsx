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
    <div className='flex flex-col bg-[#F3F3F3]'>
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <div className='flex items-center'>
            <h2 className='flex font-bold'>
              {/* <Image className='' src={StarYellow} alt={'Yellow Star'}></Image> */}
              3/5 
            </h2>
            <div className='flex flex-row'>
              <p className='text-[#000000]' >{`${5}`}</p>
              <p className='text-[#BBB7C6]'>{`(${120} reviews)`}</p>
            </div>
          </div>
        </div>
          <div className='flex flex-col'>
            <p>5 star</p>
            <p>4 star</p>
            <p>3 star</p>
            <p>2 star</p>
            <p>1 star</p>
          </div>
      </div>
      <div id='Stars'className='flex flex-row justify-center items-center'>
        <Image src={StarYellow} alt={'Yellow Star'}></Image>
        <Image src={StarYellow} alt={'Yellow Star'}></Image>
        <Image src={StarYellow} alt={'Yellow Star'}></Image>
        <Image src={StarGray} alt={'Gray Star'}></Image>
        <Image src={StarGray} alt={'Gray Star'}></Image>
      </div>
    </div>
  )
}

export default SeeStarRatings