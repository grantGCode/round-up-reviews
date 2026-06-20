import Link from 'next/link'
import Image from 'next/image';
import ProductModal from './ProductModal';
import type { productInfo, productReview, productPrams } from '../../app/types/common';
import StarRating from '../Clusters/StarRating';

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

  const calculateAverageRating = (productId: number): number => {
    const productReviews = reviewData.filter((review) => review.product_id === productId);
    if (productReviews.length === 0) return 0; // No reviews yet

    const starCount: Record<number, number> = {};

    // Count occurrences of each star rating
    productReviews.forEach(({ star_rating }) => {
      starCount[star_rating] = (starCount[star_rating] || 0) + 1;
    });

    return Object.entries(starCount)
      .sort((a, b) => b[1] - a[1]) // Sort by frequency (descending)
      .map(([star]) => Number(star))[0]; // Return the most common rating
    };

  return (
    <div className='flex flex-col w-[95%]'>
      <ul className="flex flex-wrap gap-[15px]">
        {list.map((product: productInfo) => (
            <li 
              className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-lg w-[376px] lg:h-[580px] gap-4'
              key={product.id}
            >
                {/* Look into object fit in tailwind */}
              <div className='flex justify-center items-center bg-[#D9D9D9] rounded-xl m-2 ml-3'>
                <Image src={product.image_path} alt={'Product Image'} width={329} height={150} />
              </div>
              <StarRating rating={calculateAverageRating(product.id)} />
              <h1 className='font-bold text-[24px]'>{product.product_name}</h1>
              <div className='flex justify-center items-center gap-4'>
                <p className='font-bold text-sm text-16px'>{reviewData.filter((review) => review.product_id === product.id).length} Reviews</p>
                <p className='font-bold text-sm text-16px'>{reviewData.filter((review) => review.product_id === product.id && review.written_comment).length} Comments</p>
              </div>
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
          productInfo={product[0]} 
      />}
    </div>
  )
};

export default ProductsList;