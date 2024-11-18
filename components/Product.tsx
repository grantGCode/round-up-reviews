import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import JacketOne from '../public/JacketOne.jpg'

type Review = {
  id: number;
  title: string;
  body: string;
  // product_name: string; 
  // vender_name: string;
  // star_rating: number;
  // written_comment: string;
};

export const getStaticProps: GetStaticProps<{ data: Review[] }> = async () => {
  const res = await fetch('http://localhost:3000/api');
  const data: Review[] = await res.json();
  return { props: { data } };
}

export default function Product({ data }: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <div>
      <ul>
        {data.map((review: Review) => (
            <li key={review.id} className='flex flex-col justify-center items-center'>{review.id}
              <Image className='shadow' src={JacketOne} alt='Jacket One' />
              {/* <h1 className='mt-10 font-bold'>{review.product_name}</h1>
              <h2>{review.star_rating}</h2> */}
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