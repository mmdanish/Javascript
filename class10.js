// object methods questions

let student = {
    name: "David Ray", 
    class: "VI",
    rollno: 12
};

//QS1 list the properties of the object.
let properties = Object.keys(student);
console.log(properties);

// //QS2 get the length of the object.
let objectLength = Object.keys(student).length;
console.log("length of the object = ", objectLength);

//QS3 to display the reading status of the following books.
var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }

];

let title = Object.values(library)
// console.log(title);

for (let book of title){
    console.log(book.readingStatus);
}

//QS4 calculator with methods add, subtract, multiply and divide
let calculator = {
    add (a, b) {
        return a + b;
    },

    sub (a, b) {
        return a - b;
    },

    multiply (a, b) {
        return a * b;
    },

    divide (a, b) {
        return a / b;
    }
};

console.log(`sum = ${calculator.add(10,5)}`);
console.log(`difference = ${calculator.sub(10,5)}`);
console.log(`product = ${calculator.multiply(10,5)}`);
console.log(`quotient = ${calculator.divide(10,5)}`);

