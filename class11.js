// currying in javascript
function add(x) {
    return function(y){
        return x + y;
    };
}

console.log(add(3)(4));

// reusable addOne funtion by partially applying the add function:
const addOne = add(1);
console.log(addOne(5));
console.log(addOne(12));

// function called multiply that that takes 3 arguments & return their product:
// function multiply(x, y, z) {
//     return x * y * z;
// }

// console.log(multiply(2, 3, 4));

// multiply function using curry:
function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        };
    };
}

// console.log(multiply(2)(3)(4));

const multiplyByTwo = multiply(2);
const multiplyByThree = multiplyByTwo(3);

console.log(multiplyByThree(4));
console.log(multiplyByThree(5));
