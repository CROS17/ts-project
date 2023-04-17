"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('product price: ', productPrice);
    let customerAge = 28;
    customerAge = customerAge + 1;
    console.log('customer age: ', customerAge);
    let productStock;
    console.log('product stock: ', productStock);
    if (productStock > 10) {
        console.log('product stock is greater');
    }
    let discountProduct = parseInt('250');
    if (discountProduct <= 200) {
        console.log('apply');
    }
    else {
        console.log('not apply');
    }
    console.log('discount product: ', discountProduct);
    let hex = 0xfff;
    console.log('hex: ', hex);
    let bin = 0b1010;
    console.log('bin: ', bin);
    /*const myNumber: Number = 10; siempre con minusculas el type*/
})();
