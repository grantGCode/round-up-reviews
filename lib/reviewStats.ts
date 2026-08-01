import type { productReview } from '../app/types/common';

export function getAvgStarRating(reviews: productReview[]): number {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, { star_rating }) => sum + star_rating, 0);
  return Math.round(total / reviews.length);
}
