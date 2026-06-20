import Image from 'next/image';
import Link from 'next/link';
import ArrowLeft from '../../../../public/Arrow-Left-Icon.png';

function ModalHeader({
  productName
}: {
  productName: string
}) {
  return (
    <>
      {/* Mobile version */}
      <div className='md:hidden mb-6'>
        <Link href='/'>
          <Image className='mb-4' src={ArrowLeft} alt='Close'></Image>
        </Link>
      </div>

      {/* Desktop version */}
      <div className='hidden md:flex md:justify-between md:items-start md:mb-6 md:pb-6 border-b-2 border-gray-300'>
        <h1 className='font-bold text-3xl flex-1'>{productName}</h1>
        <Link href='/'>
          <Image src={ArrowLeft} alt='Close'></Image>
        </Link>
      </div>
    </>
  )
}

export default ModalHeader
