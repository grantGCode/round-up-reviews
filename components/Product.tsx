import Link from 'next/link'


// type Review = {
//   id: number;
//   product_name: string; 
//   vender_name: string;
//   star_rating: number;
//   written_comment: string;
// };

type productInfo = {
  id: number;
  product_name: string;
  vender_name: string;
};


export default async function Product(){
  const res = await fetch('http://localhost:3000/api/Products', {
    next: {
      revalidate: 30
    }
  });
  const data: productInfo[] = await res.json();

  return (
    <div>
      <ul>
        {data.map((product: productInfo) => (
            <li key={product.product_name} className='flex flex-col justify-center items-center'>
              <h1 className='mt-10 font-bold'>{product.product_name}</h1>
              <p>{product.vender_name}</p>
              {/* add overall rating later */}
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