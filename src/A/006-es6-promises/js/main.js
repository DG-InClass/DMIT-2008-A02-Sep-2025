// Define a function to perform some async operation (e.g. AJAX request for JSON).
// The function returns a Promise, which in turn always return a result. The Promise
// is essentially a placeholder for an expected value. From the MDN on Promises:
//      "Essentially, a promise is a returned object to which you attach callbacks, 
//       instead of passing callbacks into a function."

// Simple setTimeout example
let wait = ms => new Promise(resolve => setTimeout(res, ms)); // reject not needed, cuz setTimeout doesn't really fail
// Now you can wait without passing a callback... kinda
wait(3000).then(() => console.log('Waited three seconds.'));

// AJAX promise example
const getUserData = () => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (evt) => {
      switch (xhr.status) {
        case 200:
          resolve(JSON.parse(xhr.response));
          break;
        default:
          reject(`Error retrieving user data: ${xhr.status} - ${xhr.statusText}.`);
      }
    });
    xhr.addEventListener('error', (evt) => {
      reject('Error retrieving user data.');
    });

    xhr.open('get', 'user.json');

    xhr.send(null);
  });

};

// Calling the async function now returns a Promise, which can either be resolved,
// rejected, or chained.
document.querySelector('.btn-primary').addEventListener('click', () => {
  getUserData()
    .then(user => {
      document.querySelector('.output').innerHTML = `User: ${user.name}`;
    })
    .catch(err => {
      document.querySelector('.output').innerHTML = err;
    });
});