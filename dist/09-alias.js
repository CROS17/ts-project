"use strict";
(() => {
    let userId;
    let shirtSize;
    function greeting(userId, size) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(111, 'S');
})();
