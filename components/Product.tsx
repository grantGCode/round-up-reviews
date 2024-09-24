import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import JacketOne from '../public/JacketOne.jpg'
import JacketTwo from '../public/JacketTwo.jpg'

// import ProductModal from '../components/ProductModal';

/*type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};*/

export default function Product(/*{ searchParams }: SearchParamProps*/) {
  /*const show = searchParams?.show;*/

  return (
    <div>
        <ul>
            <li className='flex flex-col justify-center items-center'>
                <Image className='shadow' src={JacketOne} alt='Jacket One' />
                <h4 className='mt-10'>ROSA Jacket</h4>
                <Link className='mt-5' href='/?show=true'>Rate</Link>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <Image className='shadow'src={JacketTwo} alt='Jacket Two' />
                <h4 className='mt-10'>ROSA Jacket</h4>
                <Link className='mt-5' href='/?show=true'>Rate</Link>
            </li>
        </ul>
        {/* {show && <ProductModal />} */}
    </div>
  )
}
