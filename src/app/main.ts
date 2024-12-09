import { addProduct } from './products/poduct.service';

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
});
