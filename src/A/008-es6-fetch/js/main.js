const displayUserData = (user) => {
    document.querySelector('.output').innerHTML = `User: ${user.name}`;
}

// const getUserData = () => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.addEventListener('load', () => {
//             switch (xhr.status) {
//                 case 200:
//                     resolve(JSON.parse(xhr.responseText));
//                     break;
//                 default:
//                     reject('Error retrieving user data');
//                     break;
//             }
//         });
//         xhr.open('GET', 'user.json');
//         xhr.send(null);
//     });
// };

document.querySelector('.btn-primary').addEventListener('click', () => {
    fetch('user.json')
    // the following .then() call could be replaced with
    // .then(response => response.ok? response.json(): Promise.reject('Request failed.'))
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(`Request failed: ${response.status}`);
            }
        })
        .then(data => displayUserData(data))
        .catch((err) => {
            document.querySelector('.output').innerHTML = err;
        });
});