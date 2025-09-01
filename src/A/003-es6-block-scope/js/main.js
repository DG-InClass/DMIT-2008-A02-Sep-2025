// Typically, to avoid polluting the global space, IIFEs are used to scope
// all vars and functions. No longer necessary. ES6 introduces block-level
// scoping with reserved words let and const.

// OLD WAY - IIFE to prevent global scope pollution
;(function () {
    var x = 10;

    function y() {
        return 'y';
    }
}());

// The following will result in undefined errors
//console.log(x); // error x is undefined
//console.log(y()); // error y is undefined

// let allows a developer to define a variable that is not attached to a
// context (e.g. window) but that exists within a block. The following
// declaration

let x = 10;

// defines x and assigns a value of 10, but does not attach this variable
// to the global object (window)

console.log(window.x); // undefined

console.log(x); // accessible, even from global scope

// variables declared with let can be assigned new values

x = 100;
console.log(x);

// but that's not always desired. Sometimes you want or only need to assign
// a value once, say for example a function. The following declaration will
// create a global function on the window object.

function y() {
    return 'y';
}

window.y() // bad, pollution of global space

// However, defining a function with const will have the same block scoping
// effects that we've seen with let

const z = function() {
    return 'z';
};

//window.z(); // good, no pollution of global space, causes an error
console.log(z()); // but still accessible

// cannot be done, z was defined as a constant, causes an error
z = function () {
    return 'new z';
}
