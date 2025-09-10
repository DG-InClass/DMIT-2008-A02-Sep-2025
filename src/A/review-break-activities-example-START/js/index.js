/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

const handleFormSubmit = function(evt) {
    evt.preventDefault();
    console.log('Form submitted');
    const myForm = evt.target;
    const controls = myForm.elements;
    console.log(controls);
    const inputControl = controls['new-topic'];
    // I can validate, etc.
    if(inputControl.value.trim() !== '') {
        // Good input
        // Add a list item to the unordered list
        const myList = document.querySelector('ul');
        myList.innerHTML += `<li>${inputControl.value.trim()}</li>`;
    }
}

// Get the only form on the page...
document.querySelector('form')
        .addEventListener('submit', handleFormSubmit);
