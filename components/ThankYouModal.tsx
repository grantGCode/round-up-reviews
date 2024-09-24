import Image from 'next/image';
import MerchantImage from '../public/MerchantLogoImage.png';
import Link from 'next/link';

function ThankYouModal() {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center p-8 border w-96 shadow-lg bg-[#E5E5E5]">
            <Image src={MerchantImage} alt='Merchant Logo'></Image>
            <h4 className='mt-16 font-bold'>Thank You For Yor Feedback!</h4>
            <p className='mt-6 '>We Appreciate your time and will</p> 
            <p>be implementing your Feedback!</p>
            <p className='mt-16 font-medium'>Please feel free to browse our</p>
            <p className='font-medium'>other selections at your leisure.</p>
            <Link
                className='mt-8 px-4 py-2 bg-[#005FF6] text-white rounded hover:bg-blue-700'
                href='https://secure-swift-shoppers-cart.netlify.app/'
            >
                Return to ROSA
            </Link>
        </div>
    </div>
  )
}

export default ThankYouModal