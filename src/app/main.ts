import {faker} from '@faker-js/faker';
import { addProduct, products } from "./products/poduct.service";

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 12,
  sizes: ['M'],
  price: 100,
  category: {
    id: '12',
    name: 'category1',
    createdAt: new Date()
  },
  image: 'https://placeimg.com/640/480/any',
  description: 'This is product 1',
  color: 'red',
  isNew: true,
  tags: ['new']
});
