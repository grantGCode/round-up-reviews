export type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
    show: boolean | null | undefined;
};

export type productInfo = {
  id: number;
  product_name: string;
  vendor_name: string;
  image_path: string;
};

export type productReview = {
  id: number;
  product_name: string;
  product_id: number;
  star_rating: number;
  vendor_name: string;
  written_comment: string | null;
};

export interface AddStarRatingProps {
  onRatingChange?: (rating: number) => void;
}

export interface productPrams {
  show?: string; 
  productId?: number | string | 0
};

export interface ProductsListProps {
  list: productInfo[];
};

export interface ProductsReviewsProps {
  list: productReview[];
};

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};