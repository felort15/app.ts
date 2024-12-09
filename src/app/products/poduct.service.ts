
import { Product } from './product.model';
export const products: Product[] =[];

export const addProduct = (data: Product) => {
    products.push(data);
}
export const updateProduct = (id: string, changes: Product) => {
  const index = products.findIndex(item => item.id === id);
  products[index] = {
    ...products[index],
    ...changes
  };
}

export const deleteProduct = (id: string) => {
  const index = products.findIndex(item => item.id === id);
  products.splice(index, 1);
}
