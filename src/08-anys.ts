(()=>{
    let myDynamicVar: any;
    myDynamicVar = 100;
    myDynamicVar = 'jorge';
    myDynamicVar = null;
    myDynamicVar = {};

    myDynamicVar = 'hola';
    const rta = (myDynamicVar as string).toLowerCase();
    console.log(rta);

    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed(2)
    console.log(rta2);
})();