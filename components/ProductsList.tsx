import Link from 'next/link'
import Image from 'next/image';
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
  
  // const API_URL = process.env.URL;
  
  let reviewData: productReview[] = [];
  
  try{
    const res = await fetch(`http://localhost:3000/api/Reviews`, { next: { tags: [`Reviews`]} });
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
    <div>
      <ul className="flex flex-wrap justify-between gap-3">
        {list.map((product: productInfo) => (
            <li 
              className='flex flex-row justify-center items-center bg-[#FFFFFF] rounded-lg w-full sm:w-[48%] md:w-[32%] gap-3'
              key={product.id}
            >
              <div className='flex justify-center items-center bg-[#D9D9D9] rounded-xl m-2 ml-3'>
                <Image src={product.image_path} alt={'Product Image'} width={190} height={150} />
              </div>
              <div className='flex flex-col justify-start items-center w-[40%]'>
                <h1 className='font-bold my-2'>{product.product_name}</h1>
                <p className='m-1'>{product.vender_name}</p>
                <StarRatingMedium rating={calculateAverageRating(product.id)} />
                <Link 
                  className='text-center my-3 px-4 py-2 w-[75%] bg-[#005FF6] text-white rounded hover:bg-blue-700'
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