const container = document.getElementById('players');

const form = document.querySelector('form');
// TODO: Add Event Listener
form.addEventListener('submit', function(evt) {
    // ALWAYS stop the default for forms in CPSC-1520
    evt.preventDefault();
    console.log('Adding players...'); // sanity check

    // Get the names
    const inputNames = evt.target.elements.playerNames;
    const names = inputNames.value.split(',').map(name => name.trim());
    // Can you read the code above?? What does it do? Why is written this way?

    if (names.length > 0) {
        // Add players to the container
        names.forEach((player, index) => {
            container.innerHTML += `<div id="player-${index}"><h2>${player}</h2></div>`;
        });
        // console.log(container); // uncomment this if you have problems

        // Disable button, hide form, show container
        evt.target.elements.createPlayers.setAttribute('disabled', 'true');
        evt.target.classList.add('hidden');
        container.classList.remove('hidden');
    }
});

const dealButton = document.getElementById('deal-me-in');
// TODO: Add Event Listener
dealButton.addEventListener('click', function(evt) {
    console.clear();
    const players = container.querySelectorAll('div');
    players.forEach(playerHand => {
        const card = shuffledCards.pop();
        const img = `<img src="/img/${card}.svg" alt="${card}" />`;
        playerHand.innerHTML += img;
        // console.log(playerHand); // uncomment if you are having problems
    })
})




const shuffledCards = [
    "4D",
    "3D",
    "4H",
    "6S",
    "3H",
    "4S",
    "JC",
    "3C",
    "7C",
    "6C",
    "8H",
    "KD",
    "KH",
    "JH",
    "QH",
    "7H",
    "AS",
    "8S",
    "3S",
    "8C",
    "0S",
    "7S",
    "6H",
    "4C",
    "JD",
    "9S",
    "0D",
    "5S",
    "AC",
    "9H",
    "2C",
    "0H",
    "9C",
    "8D",
    "6D",
    "KS",
    "QC",
    "KC",
    "5H",
    "2S",
    "JS",
    "QD",
    "2H",
    "7D",
    "AD",
    "2D",
    "0C",
    "AH",
    "9D",
    "5C",
    "QS",
    "5D"
]
