import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts } from "./products/poduct.service";

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productDescription(),
    stock: faker.number.int({min: 10, max: 100}),
    sizes: ['M'],
    price: faker.number.int({min: 10, max: 100}),
    categoryId: faker.string.uuid(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(['as', 'df', 'gh', 'ij', 'kl', 'mn', 'op', 'qr', 'st', 'uv', 'wx', 'yz']),
});
}
console.log(products);

const product = products[0];
updateProduct(String(product.id), {
  title: 'New title',
  stock: 80,
  tags: ['123', '456'],
  isNew: true,
});






