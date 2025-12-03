let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiple = (a,b) => a*b;
let divide = (a,b) => a/b;

function operation(func,numA,numB) {
    return func(numA,numB);
}

// console.log(operation(add,3,5));
// console.log(operation(subtract,3,5));
// console.log(operation(multiple,3,5));
// console.log(operation(divide,3,5));