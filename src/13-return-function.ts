(() => {

    const calculateTotal = (
        prices: number[]
    ): number => {
        let total = 0;
        prices.forEach(item => {
            total += item
        });
        return total;
    }

    /*const rta = calculateTotal([1,2,3,4,5]);
    console.log(rta);*/

    const printTotal = (prices: number[]):void =>{
        const rta = calculateTotal(prices);
        console.log(`El total es: ${rta}`);
    }

    printTotal([1,2,3,4,5]);

})();