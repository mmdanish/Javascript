//Shallow Object
const userDetails = {   
    name: "John Doe",
    age: 14,
    verified: false
};

//Deep Object
const userDetails2 = {
    name: "John Doe",
    age: 14,
    status: {
        verified: false,
    }
};

// cloning object using a spread operator

// let cloneUser = {...userDetails};
// cloneUser.name = "Jane Doe"
// console.log(cloneUser);



// cloning object using object.assign()

// let cloneUser = Object.assign({}, userDetails)
// cloneUser.name = "Jane Doe"
// console.log(cloneUser);



// Cloning the Object with JSON.parse() Method

// let cloneUser = JSON.parse(JSON.stringify(userDetails));
// cloneUser.name = "Jane Doe"
// console.log(cloneUser);


//cloning Deep Object
let cloneUser = JSON.parse(JSON.stringify(userDetails2));
cloneUser.status.verified = true;
console.log(cloneUser);
console.log(userDetails2);


        

