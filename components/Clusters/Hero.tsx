import Image from 'next/image';
import Logo from '../../public/Review-Round-Up-Logo.png';


function Hero(){
    return(
        <div className='relative flex flex-col justify-center items-center bg-[#1414142d] w-full p-10'>
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
                autoPlay 
                muted 
                loop
            >
                <source src="/Distant_Lights_4K_Loop.mp4" type="video/mp4" />
            </video>
            <Image 
                className='my-4'
                src={Logo} 
                alt='Round up Reviews' 
            />
            <div className='flex flex-col justify-center items-center'>
                <p className='font-bold text-lg h-12 text-white drop-shadow-lg'>Welcome to Round Up Reviews.</p>
                <p className='font-bold text-lg h-12 text-white drop-shadow-lg'>Select a product you own.</p>
                <p className=' text-center font-bold text-lg h-12 text-white drop-shadow-lg'>
                Let us know what your experience
                with it has been for you.
                </p>
            </div>
        </div>
    )
}

export default Hero