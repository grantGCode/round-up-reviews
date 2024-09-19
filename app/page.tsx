import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BreakLine from '../public/brakeLineHome.png';
import JacketOne from '../public/JacketOne.jpg'
import JacketTwo from '../public/JacketTwo.jpg'
import ProductModal from '../components/ProductModal';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.show;
  return (
    <div className='flex flex-col justify-center items-center'>
      <div 
        className='pt-20 font-bold' id='hero'>
        <p>Hi Janet,</p>
        <p>Please Let Us Know</p>
        <p>What You Think of Your Jacket.</p>
        <p>We Appreciate Your Feedback!</p>
      </div>
      <Image className='py-20' src={BreakLine} alt='break line' />
      {/* Temporary static elements 25-46 */}
      <div id='Products'>
        <ul>
            <li className='flex flex-col justify-center items-center my-8'>
                <Image className='shadow' src={JacketOne} alt='Jacket One' />
                <h4 className='mt-10'>ROSA Jacket</h4>
                <Link
                  className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                  href='/?show=true'
                >
                  Rate
                </Link>
            </li>
            <li className='flex flex-col justify-center items-center'>
                <Image className='shadow'src={JacketTwo} alt='Jacket Two' />
                <h4 className='mt-10'>ROSA Jacket</h4>
                <Link
                  className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                  href='/?show=true'
                > 
                  Rate
                </Link>
            </li>
        </ul>
      </div>
      {show && <ProductModal />}
    </div>
  )
}

export default Home