import type { productReview } from '../../../../app/types/common';

interface StarRatingBarsProps {
  reviews: productReview[]
}

const StarRatingBars: React.FC<StarRatingBarsProps> = ({ reviews }) => {

  const totalReviews = reviews.length

  const starCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  reviews.forEach(({ star_rating }) => {
    if (starCounts[star_rating] !== undefined) {
      starCounts[star_rating] += 1
    }
  })

  const getPercentage = (count: number): number => {
    if (totalReviews === 0) return 0
    return Math.round((count / totalReviews) * 100)
  }

  return (
    <ul className='flex flex-col gap-1.5 w-full'>
      {[5, 4, 3, 2, 1].map((star) => {
        const pct = getPercentage(starCounts[star])
        return (
          <li key={star} className='flex items-center gap-2'>
            <span className='text-xs text-[#555] w-10 shrink-0'>
              {star} star
            </span>
            <div className='flex-1 h-2 bg-[#D9D9D9] rounded-full overflow-hidden'>
              <div
                className='h-full bg-[#FFC107] rounded-full transition-all duration-500'
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className='text-xs text-[#555] w-8 text-right shrink-0'>
              {pct}%
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default StarRatingBars