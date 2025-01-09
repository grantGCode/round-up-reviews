export type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export type productInfo = {
  id: number;
  product_name: string;
  vender_name: string;
};

export interface ProductsListProps {
  list: productInfo[];
};

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};