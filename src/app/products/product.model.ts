import { Category } from '../Categories/categoy.model';

export type Sizes = 'S' | 'M' | 'L';


export interface Product {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    sizes: Sizes[];
    price: number;
    category: Category;
}
