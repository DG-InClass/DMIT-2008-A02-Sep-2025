// ES6 introduces a new way of defining functions, the arrow operator =>

// Typical function declaration
const x = function () {
    return 'x';
};

console.log(x());

// With the fat arrow, we can replace the keyword function like so,
const y = () => 'y';

// Pretty slick! In this case, since the body of the function is only 
// a single line, we don't need to include braces for the function 
// body. Also, we don't explicitly return the value 'y', fat arrow 
// functions defined in this way will return the result by default.
// Try it in the console!

// The following is an example of the same type of function, but with
// the braces. Note that, in this case, we need to use the return
// keyword again.
const z = () => {
    return 'z'
};

// Fat arrow functions can also be passed parameters in the same way 
// as before,
const greeting = (name) => {
    return `Hello ${name}!`;
};

console.log(greeting('Sally Anne'));

// New to ES6 is also the introduction of default arguments, which can
// be defined in the function signature,
const greetingDefault = (name='Jane Doe') => {
    return `Hello ${name}!`; 
};

// Try the following in the console
// greetingDefault();
// greetingDefault('Sally Anne');

// Fat arrows can be used anywhere you need a function, including callbacks
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Hey! This is from a fat arrow event listener!');
});

// Destructuring allows you to 'return' several variables at once from a
// structured data type (e.g. object)

let obj = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: '24',
    occupation: 'Developer'
};

// If one were only interested in the first name and occupation of the previous
// object, destructuring can be used to quickly pull out the values in those
// properties and place them into variables
let {firstName, occupation} = obj;

console.log(`${firstName} is a ${occupation}`); // Jane is a Developer
