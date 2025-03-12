import Image from 'next/image';
import Logo from '../public/Review-Round-Up-Logo.png';


function Hero(){
    return(
        <div className='relative flex flex-col justify-center items-center bg-local w-full p-10'>
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" 
                autoPlay 
                muted 
                loop
            >
                <source src="/Distant_Lights_4K_Loop.mp4" type="video/mp4" />
            </video>
            <div className="absolute overflow-hidden top-0 left-0 w-full bg-black/50 z-[-1]" /> 
        <Image 
            className='my-4'
            src={Logo} 
            alt='Round up Reviews' 
        />
        <p className='font-bold text-lg h-12 text-white drop-shadow-lg'>Welcome to Round Up Reviews.</p>
        <p className='font-bold text-lg h-12 text-white drop-shadow-lg'>Select a product you own.</p>
        <p className=' text-center font-bold text-lg h-12 text-white drop-shadow-lg'>
        Let us know what your experience
        with it has been for you.
        </p>
        </div>
    )
}

export default Hero