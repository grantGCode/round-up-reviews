'use client'
import Image from 'next/image'
import PercentIcon from '../../public/Percent-Icon.png'
import GrayVector from '../../public/Gray-Vector.png'

function SeeStarRatings() {
  return (
    <div className='flex flex-row'>
        <Image src={PercentIcon} alt='Percent Icon' />   
        <h2>SeeStarRatings</h2>
        <Image src={GrayVector} alt='Gray Vector' />
    </div>
  )
}

export default SeeStarRatings