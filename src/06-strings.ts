(() => {
    let productTitle = 'my Amazing Sandia';
    /*productTitle = null;
    productTitle = () => {};*/
    console.log('productTitle: ', productTitle);

    const productDescription = "I'm a product description";
    console.log('productDescription: ', productDescription);

    let productPrice = 150;

    const summary = `
        title: ${productTitle} 
        description: ${productDescription}
        price: ${productPrice}
    `;
    console.log('summary: ', summary);

})()