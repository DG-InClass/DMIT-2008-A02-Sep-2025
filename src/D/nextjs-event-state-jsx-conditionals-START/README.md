# React Events and State - JSX Conditionals

You want to show something conditionally on the page or conditionally render lists. This is a critical part of using state in the 

# Steps

1. Navigate into the folder `state-events-conditionals-example` and observe what is there already.
Note: 
- This is a project that includes mui
- You can see that we have a list on the index page with the data imported from the `utils/movies.js` file which just has highly rated movies from imdb.
- You can see that the form 
  - you can guess here that we're going to use stateful variables to actually change what's going on in the page.
2. The first thing we're going to do is we're going to import useState and create variables for the year and the search variables.
- import the useState "hook" so that we can create stateful variables.
```jsx
import { useState } from 'react'
```
- create the variables under the function definition of `Home`

```jsx
  const [search, setSearch] = useState("")
  const [year, setYear] = useState("")
```
This gives us the ability like we did last time to modify the state, and next we want to update these values whenever the `TextField` change.

3. Let's call the function `setSearch` and `setYear` on their respective text fields.
- for the search text field add the following lines:
```jsx
<TextField
  {
   //other props here
  }
  onChange={(e)=> {setSearch(e.target.value)}}
  value={search}
/>
```
Notes:
you have a callback here which passes in the `e` as an argument which is the event, this is fired every time this `TextField` changes which is the `onChange` (so any time you type). You are setting the `value` of the text field as its' being updated.

- do the same for the year.
```jsx
<TextField
  {
   //other props here
  }
  onChange={(e)=> {setYear(e.target.value)}}
  value={year}
/>
```

4. On the form tag we're going to listen and handle form submissions, and we're going to prevent the default action the way we've learned in the first level of js.
- create the event handler for the form submission. We're also going to print out the stateful variables we've created.
```jsx
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`year: ${year}`)
    console.log(`search: ${search}`)
  }
```
You can see here that although react uses [SyntheticEvent](https://reactjs.org/docs/events.html) we can still use the method `event.preventDefault()` to prevent the form from submitting.
You can also see that the `year` and `search` variables are updated to what the `TextField` currently are.
- On the `form` element we're going to register this handler to the `onSubmit` event like so.
```jsx
  <form
    style={{width: '100%'}}
    onSubmit={handleSubmit}
  >
```
Observe now that that if you press enter or click the "filter" button after writing some text that the variables are printed out in the console.

5. We're going to set a filter on the list so we want to create a filtered. 
- create a stateful variable named `movies`
```jsx
const [movies, setMovies] = useState(MOVIE_LIST)
```
Note: here that the original value is the `MOVIE_LIST` as that's what's passed as an argument to the function `useState`.
- change the line in the JSX (contained within the `List` component) as follows so that we can change what the list can be.
```jsx
// from this
MOVIE_LIST.map((movieData, index)=> { /* more jsx stuff */ }
// to this
movies.map((movieData, index)=> {/* more jsx stuff */ }
```
this will now use the new stateful variable of `movies` that you've created in the first step.

6. Create a function called `filterMovies` that will use all of the variables so that it can be filtered in the correct way.
```jsx
  const filterMovies = () => {
    // make a copy of the movie list.
    let filteredMovieList = [...MOVIE_LIST]
    // check if the search is empty
    if (search.trim() !== ""){
      // loop through the movies and check if the name
      // includes the search value (both lower case)
      filteredMovieList = filteredMovieList.filter((movieData)=> {
       return movieData.name.toLowerCase().includes(search.trim().toLowerCase())
      })  
    }
    // check if the year is empty
    if (year.trim() !== ""){
      // loop through the movies and check if the year is the same as the 
      filteredMovieList = filteredMovieList.filter((movieData)=> {
       return movieData.year === parseInt(year.trim())
      })  
    }
    setMovies(filteredMovieList)
  }
```
Let's take a look at what this is doing.
- the `let filteredMovieList = [...MOVIE_LIST]` is making a copy of the static movie list.
- we then check to see if search is not empty, and we only filter if there is a value.
- we loop `filteredMovieList` so that the new list is a subset of only the matches to the search queries.
  - remember that filter returns a new array and takes a boolean value `true` if you want to keep the result in the array and `false` if you want to filter it out.
  - note that the we are chaining methods together and that might be confusing so let's break that down.
    - `movieData.name` is a string
    - `.toLowerCase()` is a method on a string that returns a string.
    - `.includes` is a method on a string (or array) that returns `true` or `false` which is why we're using this in a filter. The `search.trim().toLowerCase()` is what we're checking against.
- we then check to see if year is not empty. 
  - we filter through `filteredMovieList` so that the new list is a subset that only matches the year that we enter. Let's break down what is going on in the filter.
    - the `===` operator will return `true` or `false`
    - on the left side we have `movieData.year` which is a number (you can see this in the `utils/movies.js`)
    - on the right we have `parseInt(year.trim())`  since year is a string we need to convert it to a number
- last we use `setMovies(filteredMovieList)` which sets the variable `movies` so that the list in our jsx is updated.

7. Let's take a look at some conditionals and JSX by doing some error handling.
- If you search for "test" you'll see that there are no results and the page just looks blank.
- we're going to use the [inline && logical operator](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) to inform the users that there are no results.
- In the `List` component add the following code that will display to the user "No results please search again." 
```jsx
  {movies.length === 0 &&
    <ListItem>
      <ListItemText>
       <Typography variant="p" component="div">
        No results please search again.
       </Typography>
      </ListItemText>
    </ListItem>
  }
```
Let's take a deeper look at this.
- `movies.length === 0` is our condition which will return `true` or `false`
- the `&&` is the magic here, if the condition (on the left) is `true` it will display the the jsx below it. If the condition is `false` it does not show the jsx below the `movies.length === 0 &&`.

Note: Test this by searching for "test" in the search bar.

8. Let's change this slightly to list the number of results on the page (replace the last step with the following)
```jsx
  {movies.length === 0 ?
    <ListItem>
      <ListItemText>
       <Typography variant="p" component="div">
        No results please search again.
       </Typography>
      </ListItemText>
    </ListItem>
    :
    <ListItem>
      <ListItemText>
       <Typography variant="p" component="div">
        {movies.length} movie results
       </Typography>
      </ListItemText>
    </ListItem>
  }
```
Let's take a deeper look at this.
- `movies.length === 0` is our condition which will return `true` or `false`
- the `?` and the `:` is the magic here
  - if the condition (on the left) is `true` it will display the the jsx that is BEFORE the `:`.
  - if the condition (on the left) is `false` it will display the jsx that is AFTER the `:`.

9. Let's do one more validation to expand on this idea, our "year" `TextField` is a text field, in later versions we could change the type to number but that's okay for now because we will check if the stateful `year` variable is a number.
- in the component add the function 
```jsx
  const isNumber = (value) => {
    return !isNaN(value)
  }
```
Note, if you would need to use this in another component it's propbably a good idea to make a file in the `utils/` folder and export this function.
- we're going to validate the search and display a message to the user, first we're going to have to create a stateful variable called "errorMessage" like so the following:
```jsx
  // other variables defined with useState
  const [errorMessage, setErrorMessage] = useState("")
```
- we're going to create a function named `validateSearch` search which is going to set an error message if the year is not a function like so.
```jsx
  const validateSearch = () => {
    console.log("validateSearch")
    console.log(isNumber(year))
    // if the year is empty
    if (year.trim().length === 0) {
      setErrorMessage("")
      return
    }
    // check if the year isn't valid.
    if (!isNumber(year) || year.trim().length !== 4) {
      setErrorMessage(`"${year}" is not a valid year`)
      return
    }
    
    // this will only execute if the year is a number
    setErrorMessage("")
  }
```
Let's take a look here:
if `year.trim().length === 0` is empty then its fine,
if `!isNumber(year) || year.trim().length !== 4` is `true` then we have an error (if it's not a number or if th year number is ridiculous). We also `return` early here.
the last thing we do here is that we `setErrorMessage("")` because if our function has reached this point, there are no errors. 
- call the `validateSearch` function in the `handleSubmit` so every time we submit this gets called.
```jsx
  const handleSubmit = (event) => {
    event.preventDefault()
    validateSearch()
    filterMovies()
  }
```
- display the error message on the page.
```jsx
// change this
  {/* Add the error message here*/}
// to 
  { errorMessage !== "" &&
    <Alert severity="error">{errorMessage}</Alert>
  }

```
You can see here that again we're using the jsx conditional of `&&` so that the error message will only show if `errorMessage !== ""` is `true`.

Go and test the app and see all of the changes!