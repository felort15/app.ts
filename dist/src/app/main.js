"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const poduct_service_1 = require("./products/poduct.service");
for (let i = 0; i < 50; i++) {
    (0, poduct_service_1.addProduct)({
        id: faker_1.faker.string.uuid(),
        title: faker_1.faker.commerce.productName(),
        createdAt: faker_1.faker.date.recent(),
        stock: faker_1.faker.number.int({ min: 10, max: 100 }),
        sizes: ['M'],
        price: faker_1.faker.number.int({ min: 10, max: 100 }),
        category: {
            id: faker_1.faker.string.uuid(),
            name: faker_1.faker.commerce.department(),
            createdAt: faker_1.faker.date.recent(),
        },
        image: faker_1.faker.image.url(),
        description: faker_1.faker.commerce.productDescription(),
        color: faker_1.faker.color.human(),
        isNew: faker_1.faker.datatype.boolean(),
        tags: faker_1.faker.helpers.arrayElements(['as', 'df', 'gh', 'ij', 'kl', 'mn', 'op', 'qr', 'st', 'uv', 'wx', 'yz']),
    });
}
console.log(poduct_service_1.products.length);
