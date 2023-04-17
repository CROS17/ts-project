"use strict";
(() => {
    let myVar = null; //Tipo any
    let otherVar = undefined; //Tipo any
    let myNull = null; // Tipo null
    let myUndefined = undefined; //Tipo undefined
    let myNumber = null;
    myNumber = 50;
    let myString = undefined;
    myString = "Hola TypeScript";
    function hi(name) {
        let hello = 'Hola';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log(hello);
    }
    hi('rolan');
    hi(null);
})();
