(() =>{

    type Sizes = 'S'|'M'|'L'|'XL';

    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    };

    const products: Product[] = [];

    const addProduct = (data: Product) =>{
        products.push(data)
    }

    addProduct({
        title: 'product 1',
        createdAt: new Date(2023,3,23),
        stock: 12
    });

    addProduct({
        title: 'product 2',
        createdAt: new Date(2023,3,24),
        stock: 15,
        size: 'M'

    });

    console.log(products);
    products.push({
        title: 'product 3',
        createdAt: new Date(2023,3,25),
        stock: 16,
        size: 'L'

    })

})();