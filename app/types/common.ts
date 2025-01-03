export type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

export type productInfo = {
  id: number;
  product_name: string;
  vender_name: string;
};

export interface ProductsListProps {
  products: productInfo[];
}