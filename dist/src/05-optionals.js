"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
//nullish-coalicing new parameter in JS
const createProduct = (id, isNew, stock) => {
    return {
        id,
        stock: stock !== null && stock !== void 0 ? stock : 10,
        isNew: isNew !== null && isNew !== void 0 ? isNew : true
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
