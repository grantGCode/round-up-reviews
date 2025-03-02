import Link from 'next/link'
import ProductModal from './modal/ProductModal';
import type { productInfo, productReview, productPrams } from '../app/types/common';
import StarRatingSmall from '../components/StarRatingSmall';

async function ProductsList({
  list,
  searchParams,
}: {
  list: productInfo[], 
  searchParams: productPrams,
}) {
  
  const res = await fetch('http://localhost:3000/api/Reviews', {
    // cache data
    // cache: 'force-cache'       
    //Revalidate in 30 sec
      next: { revalidate: 30 }
    });
    
  const reviewData: productReview[] = await res.json();

  const showModal = searchParams?.show === 'true';

  const selectedProduct = list.find((product: productInfo) => product.id.toString() === searchParams?.productId);
  
  const product = list.filter((product: productInfo) => 
    {product
      if(product.id === selectedProduct?.id){
        return product
      }
    })

  const reviewFilter = reviewData.filter((reviews: productReview) => 
    {reviews
      if(reviews.product_id === selectedProduct?.id){
        return reviews
      }
    })

  return (
    <div>
      <ul>
        {list.map((product: productInfo) => (
            <li 
              className='flex flex-col justify-center items-center bg-[#FFFFFF] m-6 p-4 rounded-lg'
              key={product.id}
            >
              <h1 className='mt-10 font-bold'>{product.product_name}</h1>
              <p>{product.vender_name}</p>
              <StarRatingSmall rating={5} /> {/* temp*/}
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
      {showModal && 
        selectedProduct &&
        <ProductModal 
          myReviewData={reviewFilter}
          productInfo={product[0]} 
      />}
    </div>
  )
};

export default ProductsList;