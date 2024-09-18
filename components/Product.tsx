import React from 'react'
import Image from 'next/image'
import JacketOne from '../public/JacketOne.jpg'
import JacketTwo from '../public/JacketTwo.jpg'
import Button from '../components/button'

export default function Product() {
    return (
    <div>
        <ul>
            <li className='flex flex-col justify-center items-center'>
                <Image className='shadow' src={JacketOne} alt='Jacket One' />
                <h4 className='mt-10'>ROSA Jacket</h4>
                <Button className='mt-5'>Rate</Button>
            </li>
            <li className='flex flex-col justify-center items-center mt-10'>
                <Image className='shadow' src={JacketTwo} alt='Jacket Two' />
                <h4 className='mt-10'>ROSA Jacket</h4>
                <Button className='mt-5'>Rate</Button>
            </li>
        </ul>
    </div>
  )
}
