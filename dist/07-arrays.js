"use strict";
(() => {
    let pricesProducts = [25, 12, 10, 35, 'camisa', true];
    pricesProducts.push(50);
    console.log('priceProducts: ', pricesProducts);
    let products = ['hola', false];
    products.push(true);
    let mixed = [
        'hola', true
    ];
    mixed.push(35);
    mixed.push('short');
    console.log('mixed: ', mixed);
    let prices = [25, 12, 10, 35];
    prices.map(price => price * 2);
    console.log('prices: ', prices);
})();
