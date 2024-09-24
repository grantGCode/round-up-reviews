import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import JacketOne from '../public/JacketOne.jpg'
import JacketTwo from '../public/JacketTwo.jpg'


export default function Product() {
  return (
    <div>
        <ul>
            <li className='flex flex-col justify-center items-center'>
                <Image className='shadow' src={JacketOne} alt='Jacket One' />
                <h1 className='mt-10 font-bold'>ROSA Jacket</h1>
                <Link 
                  className='mt-5 px-4 py-2 bg-[#005FF6] text-white rounded hover:bg-blue-700'
                  href='/?show=true'
                >
                  Rate
                </Link>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <Image 
                  className='shadow'
                  src={JacketTwo} 
                  alt='Jacket Two'
                />
                <h1 className='mt-10 font-bold'>ROSA Jacket</h1>
                <Link 
                  className='mt-5 px-4 py-2 bg-[#005FF6] text-white rounded hover:bg-blue-700'
                  href='/?show=true'
                >
                  Rate
                </Link>
            </li>
        </ul>
    </div>
  )
}
