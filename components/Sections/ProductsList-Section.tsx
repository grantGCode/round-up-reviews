import Link from 'next/link'
import ProductImage from './modal-section/modal-clusters/ProductImage';
import ProductModal from './ProductModal-Section';
import type { productInfo, productReview, productPrams } from '../../app/types/common';
import StarRating from '../Clusters/StarRating';
import { getAvgStarRating } from '../../lib/reviewStats';
import ProductReviewStats from './product-list-section/ProductReviewStats';

async function ProductsList({
  list,
  searchParams,
}: {
  list: productInfo[], 
  searchParams: productPrams,
}) {
  
  const API_URL = process.env.URL;
  
  let reviewData: productReview[] = [];
  
  try{
    const res = await fetch(`${API_URL}/api/Reviews`, { next: { tags: [`Reviews`]} });
    if (!res.ok) {
      console.error("Failed to fetch products:", await res.text());
      throw new Error("Failed to fetch products");
    }
    reviewData = await res.json();
  } catch (error) {
    console.error(error);
  }   

  const showModal = searchParams?.show === 'true';

  const selectedProduct = list.find((product: productInfo) => product.id.toString() === searchParams?.productId);
  
  const reviewFilter = reviewData.filter((reviews: productReview) => reviews.product_id === selectedProduct?.id)

  return (
    <div className='flex flex-col w-[95%]'>
      <ul className="flex flex-wrap gap-[15px]">
        {list.map((product: productInfo) => (
            <li 
              className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg w-[376px] lg:h-[580px] gap-4'
              key={product.id}
            >
                {/* Look into object fit in tailwind */}
              <ProductImage imagePath={product.image_path} width={329} height={150} />
              <StarRating rating={getAvgStarRating(reviewData.filter((r) => r.product_id === product.id))} />
              <h1 className='font-bold text-[24px]'>{product.product_name}</h1>
              <ProductReviewStats
                reviewCount={reviewData.filter((review) => review.product_id === product.id).length}
                commentCount={reviewData.filter((review) => review.product_id === product.id && review.written_comment && review.written_comment.trim() !== '').length}
              />
              {/* will add description later */}
              {/* <p className='text-sm text-gray-500 text-center px-4'>{product.description}</p> */} 
              <div className='flex flex-row justify-start items-center gap-[11px] w-[60%]'>
                <h1 className='font-bold text-[32px]'>$XX.XX</h1>
                <Link
                  className='text-center flex items-center justify-center w-[153px] h-[60px] bg-[#005FF6] text-white rounded hover:bg-blue-700 text-[32px] font-bold'
                  href={`/?show=true&productId=${product.id}`}
                  key={product.id}
                  scroll={false}
                >
                  Rate
                </Link>
              </div>
            </li>
          ),
        )}
      </ul>
      {showModal && 
        selectedProduct &&
        <ProductModal 
          myReviewData={reviewFilter}
          productInfo={selectedProduct} 
      />}
    </div>
  )
};

export default ProductsList;