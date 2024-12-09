import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct } from "./products/poduct.service";

addProduct({
  title: faker.commerce.productName(),
  stock: faker.number.int({min: 10, max: 100}),
  sizes: ['M'],
  price: faker.number.int({min: 10, max: 100}),
  categoryId: faker.string.uuid(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  color: faker.color.human(),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(['as', 'df', 'gh', 'ij', 'kl', 'mn', 'op', 'qr', 'st', 'uv', 'wx', 'yz'])
});

console.log(products.length);
const product = products[0];
updateProduct(String(product.id), {
  title: 'New title',
  stock: 80,
});

