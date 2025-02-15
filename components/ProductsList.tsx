import Link from 'next/link'
import ProductModal from './modal/ProductModal';
import type { productInfo, productPrams } from '../app/types/common';

function ProductsList({
  list, 
  searchParams,
}: {
    list: productInfo[], 
    searchParams: productPrams,
  }) {
    const showModal = searchParams?.show === 'true';
    const selectedProduct = list.find((product: productInfo) => product.id.toString() === searchParams?.productId);

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
                href={`/?show=true&productId=${product.id}`}
                key={product.id}
                scroll={false}
              >
                Rate
              </Link>
            </li>
          ),
        )}
      </ul>
      {
      showModal && 
      selectedProduct &&
      <ProductModal 
        params={{
          id:  selectedProduct.id
        }}
      />}
    </div>
  )
};

export default ProductsList;