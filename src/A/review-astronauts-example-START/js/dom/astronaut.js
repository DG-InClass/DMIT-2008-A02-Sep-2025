/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">    
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>    
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

const renderAstronautListItem = function(astronautData, listElement) {
    // let's interpret astronautData as being the info for a
    // single astronaut.
    console.log('Astronaut: ', astronautData);
    // 1) Extract the data from the object that we want to show
    // 2) Show the data (render)
    const newListItem = `<li>Data for ${astronautData.name}</li>`;
    listElement.innerHTML =+ newListItem;
}

export { renderAstronautListItem }
