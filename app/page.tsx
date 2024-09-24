import Image from 'next/image';
import BreakLine from '../public/brakeLineHome.png';
import Product from '../components/Product';
import ProductModal from '../components/ProductModal';
// import ThankYouModal from '../components/ThankYouModal';

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
      <Product />
      {show && <ProductModal />}
    </div>
  )
}

export default Home