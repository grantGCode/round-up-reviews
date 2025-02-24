export type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
    show: boolean | null | undefined;
};

export type productInfo = {
  id: number;
  product_name: string;
  vender_name: string;
};

export type productReview = {
  id: number;
  product_name: string;
  product_id: number;
  star_rating: number;
  vender_name: string;
  written_comment: string;
};

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