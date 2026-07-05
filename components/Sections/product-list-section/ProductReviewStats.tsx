function ProductReviewStats({
  reviewCount,
  commentCount,
}: {
  reviewCount: number
  commentCount: number
}) {
  return (
    <div className='flex justify-center items-center gap-4'>
      <p className='font-bold text-sm text-16px'>{reviewCount} Reviews</p>
      <p className='font-bold text-sm text-16px'>{commentCount} Comments</p>
    </div>
  )
}

export default ProductReviewStats
