/**
 * Fetch and return the result parsed as a JSON object
 * @param {string} url - The URL for the desired resource.
 * @returns {Promise} Promise represents the parsed JSON  
 */
const fetchJSON = (url) => {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return Promise.resolve(response.json());
        } else {
            return Promise.reject(`Request for ${url} failed.`);
        }
    })
    .catch(err => Promise.reject(err));
};

// Now we can use the fetchJSON() to fetch any JSON we like, and since it's a Promise, we can
// chain the calls together via next().
document.querySelector('.btn-primary').addEventListener('click', () => {
    fetchJSON('user.json')
    .then(user => { document.querySelector('.user').innerHTML = `User: ${user.name}`; })
    .then(() => fetchJSON('friends.json'))
    .then(() => fetchJSON('friends.json'))
    .then(friends => {document.querySelector('.friends').innerHTML = `#Friends: ${friends.length}`})
    .then(() => fetchJSON('posts.json'))
    .then(posts => {document.querySelector('.posts').innerHTML = `First Post: ${posts[0].title}`})
    .catch(err => {
        document.querySelector('.output').innerHTML = err;
    });
});