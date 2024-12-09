import { Category } from '../Categories/categoy.model';
import { BaseModel } from '../base.model';
export type Sizes = 'S' | 'M' | 'L';


export interface Product extends BaseModel {
    title: string;
    image: string;
    description: string;
    stock: number;
    color: string;
    sizes?: Sizes[];
    price: number;
    category: Category;
    isNew: boolean;
    tags: string[];
}


