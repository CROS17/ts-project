"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = 'jorge';
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = 'hola';
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
    myDynamicVar = 1212;
    const rta2 = myDynamicVar.toFixed(2);
    console.log(rta2);
})();
