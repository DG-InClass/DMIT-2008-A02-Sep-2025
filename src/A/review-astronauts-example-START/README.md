# Review Example Part 2 (with Parcel)

In this example we're going to see past and present astronauts.

# Steps
1. Initialize npm so that you can start your project
`npm init`
Press enter so that you can continue.
2. install bootstrap and parcel
`npm install bootstrap`
`npm install parcel --save-dev`
3. Update the scripts in the package.json
```json
  "source": "index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
```
4. View and Explore the api https://ll.thespacedevs.com/2.2.0/swagger/
    - We're going to take a look at the "astronaut" endpoint which gives us a list of astronauts.
    - We're going ot use the endpoint https://lldev.thespacedevs.com/2.2.0/astronaut/ without any of the filtering that is included (although if you want to you can!)

5. In the `api/astronaut.js` file create a function named "getAstronautList" and export it.
6. In the  "getAstronautList" return the fetch that will make a get request to https://lldev.thespacedevs.com/2.2.0/astronaut/
7. Import the "getAstronautList" in the index.js and execute it so that you can see the output in the console.
    - We'll be using this information to render the astronauts, so it's good to take a look and understand it.
8. In the `dom/astronaut.js` create a function "renderAstronautListItem" with two parameters "astronautData" which will be the object from the api for each astronaut and "listElement" which is the dom element of which we'll append to.
    - export this function.
    - use a template string to render the data.
    - append the innerHTML
9. import the "renderAstronautListItem" in the index.js file.
10. Select the element with the class "astronaut-list" and within the "getAstronautList" loop the the results property and call the "renderAstronautListItem" with the item that is being iterated over and the element selected.


