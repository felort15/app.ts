"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
var createProduct = function (id, isNew, stock) {
    return {
        id: id,
        stock: stock !== null && stock !== void 0 ? stock : 10,
        isNew: isNew !== null && isNew !== void 0 ? isNew : true
    };
};
exports.createProduct = createProduct;
// 0 === false
// '' === false
// false === false
var p1 = (0, exports.createProduct)(1, true, 12);
console.log(p1);
var p2 = (0, exports.createProduct)(1);
console.log(p2);
var p3 = (0, exports.createProduct)(1, false, 0);
console.log(p3);
