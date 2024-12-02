import Link from 'next/link'


type Review = {
  id: number;
  product_name: string; 
  vender_name: string;
  star_rating: number;
  written_comment: string;
};


export default async function Product(){
  const res = await fetch('http://localhost:3000/api');
  const data: Review[] = await res.json();

  return (
    <div>
      <ul>
        {data.map((review: Review) => (
            <li key={review.id} className='flex flex-col justify-center items-center'>
              <h1 className='mt-10 font-bold'>{review.product_name}</h1>
              <p>{review.vender_name}</p>
              <h2>{review.star_rating}</h2>
              <Link 
                className='mt-5 px-4 py-2 bg-[#005FF6] text-white rounded hover:bg-blue-700'
                href='/?show=true'
              >
                Rate
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
};