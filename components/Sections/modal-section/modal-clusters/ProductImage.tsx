import Image from 'next/image';
import EmptyImage from '../../../../public/product-images/Empty-Image.png';

function ProductImage({
  imagePath,
  width = 300,
  height = 200,
  className = '',
  imageClassName = ''
}: {
  imagePath?: string
  width?: number
  height?: number
  className?: string
  imageClassName?: string
}) {
  return (
    <div className={`flex justify-center items-center bg-[#D9D9D9] rounded-xl ${className}`.trim()}>
      <Image
        className={imageClassName}
        src={imagePath || EmptyImage}
        alt={'Product Image'}
        width={width}
        height={height}
      />
    </div>
  )
}

export default ProductImage
