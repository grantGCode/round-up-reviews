import Link from 'next/link'
import type { productInfo, ProductsListProps } from '../app/types/common';

const ProductsList: React.FC<ProductsListProps> = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((product: productInfo) => (
            <li key={product.id} className='flex flex-col justify-center items-center'>
              <h1 className='mt-10 font-bold'>{product.product_name}</h1>
              <p>{product.vender_name}</p>
              <h3>Star Rating</h3>
              <Link 
                className='mt-5 px-4 py-2 bg-[#005FF6] text-white rounded hover:bg-blue-700'
                href='/?show=true'
                key={product.id}
              >
                Rate
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
};

export default ProductsList;