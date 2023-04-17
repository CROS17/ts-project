(()=>{

    type UserID = string | number;
    let userId: UserID;

    //literal types
    type Sizes = 'S'|'M'|'L'|'XL';
    let shirtSize: Sizes;

    function greeting(userId: UserID, size: Sizes) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(111, 'S');


})();