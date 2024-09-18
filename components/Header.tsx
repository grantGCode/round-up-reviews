import React from 'react'
import Image from 'next/image'
import ROSA from '../public/ROSA.png'
import BackgroundImage from '../public/HeaderBackgroundImage.png'
function Header() {
  return (
    <div className='relative w-screen bg-black'>
      <div className='flex flex-col justify-center items-center' >
      <Image className='flex flex-wrap justify-center items-center' src={BackgroundImage} alt={'Rose Image'} />  
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <h4 className='text-white font-poppins'>Round Up Reviews</h4>
        <p className='text-white font-poppins'>Presents</p>
        <Image src={ROSA}  className='w-[175px] h-auto' alt='ROSA'/>
      </div>
      </div>      
    </div>
  )
}

export default Header