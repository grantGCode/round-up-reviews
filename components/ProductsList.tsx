import Link from 'next/link'
import ProductModal from './modal/ProductModal';
import type { /*SearchParamProps,*/ productInfo,/* ProductsListProps*/ } from '../app/types/common';

function ProductsList({
  list, 
  searchParams,
}: {
    list: productInfo[], 
    searchParams: { show?: string };
  }) {
    const showModal = searchParams?.show === 'true';
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
                href={`/?show=true`}
                key={product.id}
              >
                Rate
              </Link>
            </li>
          ),
      showModal && <ProductModal list={[]}/>
        )}
      </ul>
    </div>
  )
};

export default ProductsList;