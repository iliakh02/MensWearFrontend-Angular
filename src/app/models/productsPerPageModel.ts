import { Product } from "./product";

export interface productsPerPageModel {
  products: Product[];
  currentPage: number;
  pageSize: number;
}