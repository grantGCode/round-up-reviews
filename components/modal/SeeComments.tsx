'use client'
import Image from "next/image"
import WordBubble from '../../public/Word-Bubble-Icon.png'
import GrayVector from '../../public/Gray-Vector.png'


function SeeComments() {
  return (
    <div className='flex flex-row'>
    <Image src={WordBubble} alt='Word Bubble Icon' />
    <h2>See Comments</h2>
    <Image src={GrayVector} alt='Gray Vector' />
    </div>
  )
}

export default SeeComments