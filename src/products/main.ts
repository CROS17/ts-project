import {addProduct, calculateStock, products} from './product.service'


addProduct({
    title: 'product 1',
    createdAt: new Date(2023, 3, 23),
    stock: 12
});

addProduct({
    title: 'product 2',
    createdAt: new Date(2023, 3, 24),
    stock: 15,
    size: 'M'

});

console.log(products)
const total = calculateStock();
console.log(total)

