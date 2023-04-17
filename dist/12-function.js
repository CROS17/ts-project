"use strict";
(() => {
    function createProductToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const product1 = createProductToJson('P1', new Date(), 12, 'L');
    console.log(product1);
    console.log(product1.title);
    console.log(product1.stock);
    const createProductToJsonV2 = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const product2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(product2);
    console.log(product2.title);
    console.log(product2.size);
})();
