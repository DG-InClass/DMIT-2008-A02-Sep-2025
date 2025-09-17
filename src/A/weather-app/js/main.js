// 🚨 This is code running in the browser.
// 🚨 Do not do this in real life.
// 🚨 It will leak your secrets to anyone who views your website! ☠️
// 🚨 Secrets should be used/processed on the SERVER only!!!
const {VITE_DEFAULT_CITY, VITE_API_KEY } = import.meta.env;

console.log('Default City:', VITE_DEFAULT_CITY);    // ✅ This is ok
console.log('Fake API Key:', VITE_API_KEY);         // ❌ NOT OK!

import { getCurrentWeather } from './api/open-weather';

const [ city, country ] = VITE_DEFAULT_CITY.split(',');

getCurrentWeather({ city, country, callback: (data) => {
    console.log(data);
}});
