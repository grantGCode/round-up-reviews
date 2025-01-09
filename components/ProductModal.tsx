import RateProduct from './RateProduct';
import Image from 'next/image';
import Link from 'next/link';
import VectorX from '../public/Vector-X.png';
import type { productInfo, ProductsListProps } from '../app/types/common';

const ProductModal: React.FC<ProductsListProps> = ({ list }) => {
  console.log(list.map((product: productInfo) => (product.product_name)))
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg bg-[#E5E5E5]">
          <Link href='/'>
            <Image src={VectorX} alt='X'></Image>
          </Link>
          <div className='flex flex-col justify-center items-center'>
            {/* <h4 className='mt-10'>{product_name}</h4> */}
            <RateProduct />
          </div>
        </div>
    </div>
  )
}

export default ProductModal