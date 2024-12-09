import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
export const products: Product[] =[];

export const addProduct = (data: CreateProductDto) => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent()
    }
  }
  products.push(newProduct);
}
export const updateProduct = (id: string, changes: UpdateProductDto) => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  };
  return products[index];
}

export const deleteProduct = (id: string) => {
  const index = products.findIndex(item => item.id === id);
  products.splice(index, 1);
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.stock
  // dto.color
  return products.filter(item => {
    if (dto.stock && item.stock === dto.stock) return true;
    if (dto.color && item.color === dto.color) return true;
    return false;
  });
}
