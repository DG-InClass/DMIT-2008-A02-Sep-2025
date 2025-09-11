const BASE_URL = "https://lldev.thespacedevs.com/2.2.0"

// api functions here.
const getAstronautList = function() {
    // Using the Fetch API
    return fetch(BASE_URL + '/astronaut/')
            .then(resp => resp.json());
}

export { getAstronautList }
