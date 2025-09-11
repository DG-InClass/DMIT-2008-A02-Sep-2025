// js here.
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAstronautList } from './api/astronaut';
import { renderAstronautListItem } from './dom/astronaut';

getAstronautList().then(data => {
    // console.log(data);
    // use the data.results array and render each astronaut
    const listContainer = document.querySelector('ul');
    data.results.forEach(person => {
        renderAstronautListItem(person, listContainer);
    });
});
