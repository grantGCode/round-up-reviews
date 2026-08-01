import type { productReview } from '../../../../app/types/common';

function getStarPercents(reviews: productReview[]): Record<number, number> {
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  reviews.forEach(({ star_rating }) => {
    if (counts[star_rating] !== undefined) {
      counts[star_rating] += 1;
    }
  });

  const total = reviews.length;
  const percents: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (const star of [1, 2, 3, 4, 5]) {
    percents[star] = total > 0 ? Math.round((counts[star] / total) * 100) : 0;
  }

  return percents;
}

interface StarRatingPercentageBarProps {
  reviews: productReview[];
}

const StarRatingPercentageBar: React.FC<StarRatingPercentageBarProps> = ({ reviews }) => {
  const percents = getStarPercents(reviews);

  return (
    <div className="flex flex-col gap-3 flex-1">
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="flex items-center gap-2">
          <span className="w-10 text-sm text-[#666666] whitespace-nowrap">
            {star} star
          </span>
          <div className="flex-1 h-[6px] rounded-full bg-[#D9D9D9] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FFC107] transition-all duration-500"
              style={{ width: `${percents[star]}%` }}
            />
          </div>
          <span className="text-xs text-[#666666] w-8 text-right shrink-0">
            {percents[star]}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default StarRatingPercentageBar;