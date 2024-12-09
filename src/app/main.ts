import {faker} from '@faker-js/faker';
import { addProduct, products } from "./products/poduct.service";

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productDescription(),
    createdAt: faker.date.recent(),
    stock: faker.number.int({min: 10, max: 100}),
    sizes: ['M'],
  price: faker.number.int({min: 10, max: 100}),
  category: {
    id: faker.string.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.date.recent(),
  },
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  color: faker.color.human(),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(['as', 'df', 'gh', 'ij', 'kl', 'mn', 'op', 'qr', 'st', 'uv', 'wx', 'yz']),
});
}
console.log(products);
