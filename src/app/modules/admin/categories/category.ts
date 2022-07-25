import { Product } from "../products/product";

export class Category {
    cat_id: number;
    name: string;
    products: Product[];
    subCategory: Category[] = [];
}