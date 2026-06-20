import Image from 'next/image';
import EmptyImage from '../../../../public/product-images/Empty-Image.png';

function ProductImage({
  imagePath
}: {
  imagePath?: string
}) {
  return (
    <div className='flex justify-center items-center bg-[#D9D9D9] rounded-xl'>
      <Image src={imagePath || EmptyImage} alt={'Product Image'} width={300} height={200} />
    </div>
  )
}

export default ProductImage
