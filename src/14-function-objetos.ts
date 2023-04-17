(() =>{

    type Sizes = 'S'|'M'|'L'|'XL';
    /*const login  = (email: string, password: string) =>{*/
    const login  = (data: {
        email: string, password: string
    }) =>{
        console.log(data.email, data.password);
    }
    /*login('correo@coreo.com','12345');*/
    login({
        email: 'correo@coreo.com',
        password: '12345'
    });

    const products: any[] = [];
    const addProduct = (data:{
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) =>{
        products.push(data)
    }

    addProduct({
        title: 'product 1',
        createdAt: new Date(2023,3,25),
        stock: 12
    });

    addProduct({
        title: 'product 2',
        createdAt: new Date(2023,3,25),
        stock: 15,
        size: 'M'

    });

    console.log(products);

})();