import { Category } from '../Categories/categoy.model';
import { BaseModel } from '../base.model';
export type Sizes = 'S' | 'M' | 'L';


export interface Product extends BaseModel {
    title: string;
    stock: number;
    sizes: Sizes[];
    price: number;
    category: Category;
}
