"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'product 1',
    createdAt: new Date(2023, 3, 23),
    stock: 12
});
(0, product_service_1.addProduct)({
    title: 'product 2',
    createdAt: new Date(2023, 3, 24),
    stock: 15,
    size: 'M'
});
console.log(product_service_1.products);
const total = (0, product_service_1.calculateStock)();
console.log(total);
