import { Product } from "./product";

export interface productsPerPageModel {
  totalItems: number | undefined;
  products: Product[];
  currentPage: number;
  pageSize: number;
}