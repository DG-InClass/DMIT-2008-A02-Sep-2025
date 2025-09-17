// To run this, type the following in
// the ~/src/A folder:
// node --watch ad-hoc.js
console.log('Running JS Experiments');

let names = ['Stew Dent', 'Anna Lyst', 'Phoe Nominal'];

const doStuff = (first, second, third, fourth) => {
    console.log(`${fourth}, ${second}`);
}
// Spreading out an array will "dump" all the array contents as though it was a comma-separated list of individual values.
// Run the code in the doStuff function with the values of the names array spread out to all the parameters in the doStuff function.
doStuff(...names);
