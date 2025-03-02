import Link from 'next/link'
import ProductModal from './modal/ProductModal';
import type { productInfo, productReview, productPrams } from '../app/types/common';
import StarRatingMedium from '../components/StarRatingMedium';

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
    <div>
      <ul>
        {list.map((product: productInfo) => (
            <li 
              className='flex flex-col justify-center items-center bg-[#FFFFFF] m-6 p-4 rounded-lg'
              key={product.id}
            >
              <h1 className='mt-10 font-bold'>{product.product_name}</h1>
              <p>{product.vender_name}</p>
              <StarRatingMedium rating={calculateAverageRating(product.id)} />
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