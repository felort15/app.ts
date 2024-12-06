"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const createProduct = (id, isNew = true, stock = 10) => {
    return {
        id,
        stock,
        isNew
    };
};
exports.createProduct = createProduct;
// 0 === false
// '' === false
// false === false
const p1 = (0, exports.createProduct)(1, true, 12);
console.log(p1);
const p2 = (0, exports.createProduct)(1);
console.log(p2);
const p3 = (0, exports.createProduct)(1, false, 0);
console.log(p3);
const p4 = (0, exports.createProduct)(1, true, 100);
console.log(p4);
const p5 = (0, exports.createProduct)(5, false);
console.log(p5);
