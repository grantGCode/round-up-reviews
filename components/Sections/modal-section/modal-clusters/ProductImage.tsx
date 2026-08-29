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
    <div
      className={`relative flex justify-center items-center bg-[#D9D9D9] rounded-xl overflow-hidden ${className}`.trim()}
      style={{ width, height }}
    >
      <Image
        className={`object-contain ${imageClassName}`.trim()}
        src={imagePath || EmptyImage}
        alt={'Product Image'}
        fill
        sizes={`${width}px`}
      />
    </div>
  )
}

export default ProductImage
