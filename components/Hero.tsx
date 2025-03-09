import Image from 'next/image';
import Logo from '../public/Review-Round-Up-Logo.png';

function Hero(){
    return(
        <div className='flex flex-col justify-center items-center'>
        <Image 
        className='my-4'
        src={Logo} 
        alt='Round up Reviews' />
        <p className='font-bold text-lg h-12'>Welcome to Round Up Reviews.</p>
        <p className='font-bold text-lg h-12'>Select a product you own.</p>
        <p className=' text-center font-bold text-lg h-12'>
        Let us know what your experience
        with it has been for you.
        </p>
        </div>
    )
}

export default Hero