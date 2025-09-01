// Access DOM elements for interaction
const action = document.querySelector('.btn-action');
const output = document.querySelector('.output');

// Event listener to display the current date and time when the button is clicked
action.addEventListener('click', function (e) {
    let d = new Date(); // for output

    // Typical string concatenation used for output
    //output.innerHTML = 'The current date and time is ' + d.toLocaleString();

    // We can do better. ES6 introduces template literals defined by 
    // back tick (just left of the 1 key). These template literals
    // can span several lines and allow for variable interpolation, 
    // which just means that you can include variable references 
    // (albeit with a special notaion) directly in your desired output
    // string.
    output.innerHTML = `The current date and time is ${d.toLocaleString()}`;

    // In order to interpolate variables, the desired reference (on in this
    // case function call) must be preceded by a dollar sign and wrapped in
    // braces. YAY! No more + operators! At least not in this example...
});

// Try it, it works!