import Image from 'next/image';
import Link from 'next/link';
import VectorX from '../public/Vector-X.png';
// import StarYellow from '../public/StarYellow.png';
// import StarGray from '../public/StarGray.png';
// import Button from './button';
import type { productInfo, ProductsListProps } from '../app/types/common';

const ProductModal: React.FC<ProductsListProps & productInfo> = ({ list }) => {
  console.log(list)
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg bg-[#E5E5E5]">
          <Link href='/'>
            <Image src={VectorX} alt='X'></Image>
          </Link>
          <div className='flex flex-col justify-center items-center'>
            {/* <Image className='shadow' src={JacketOne} alt='Jacket One' /> */}
            {/* <h4 className='mt-10'>{list.product_name}</h4> */}
            <h5>Rating</h5>
            {/* <p>
              Let us know what your experience
              with your product has been like 
              for you.
            </p>
            <div id='Stars'className='flex flex-row justify-center items-center'>
              <Image src={StarYellow} alt={'Yellow Star'}></Image>
              <Image src={StarYellow} alt={'Yellow Star'}></Image>
              <Image src={StarYellow} alt={'Yellow Star'}></Image>
              <Image src={StarGray} alt={'Gray Star'}></Image>
              <Image src={StarGray} alt={'Gray Star'}></Image>
            </div>
            <input
              className='h-'
              type="text" 
              placeholder="Leave a comment (optional)"
              required
              autoCapitalize="off"
              autoCorrect="off" 
            />
            <Button>Submit</Button> */}
          </div>
        </div>
    </div>
  )
}

export default ProductModal