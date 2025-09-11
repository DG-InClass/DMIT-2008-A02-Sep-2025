// js here.
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAstronautList } from './api/astronaut';

getAstronautList().then(data => {
    console.log(data);
});
