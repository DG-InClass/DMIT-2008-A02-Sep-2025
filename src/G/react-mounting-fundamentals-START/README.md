# React Component LifeCycle with some Rest Requests

# Why?

This is the completed version of the rest-fundamentals example and it looks great except for one thing. We're also going to add the api folder to this project if you tried it as the challenge last class.

When load the page we need the user to click "Get New Quote" to actually get one to show up on the page, this is a bit odd and isn't really what we were looking for.

The functionality we're going to have when we complete this is that we're going to have a quote ready to go when our user loads our page.

# Steps

1. add a new `utils/api` folder at the root of your project.
2. within that folder create a `base.js` file and add the following lines
```js
export const BASE_URL = 'https://api.quotable.io'
```
3. again within the `utils/api` folder create a `quotes.js` file that will contain our request function and export it like below.
```js
import {BASE_URL } from './base.js'

const getRandomQuote = () => {
  return fetch(`${BASE_URL}/random`)
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })    
}

export { getRandomQuote }
```
4. Import the function `getRandomQuote` to the `pages/index.js` page and use it in the `handleClick` function. The component should now look like this.
```js
// ... other imports above.
import { getRandomQuote } from '../utils/api/quotes.js'  

export default function Home() {
  const [quoteData, setQuoteData] = useState({
    quote: "Quote here.",
    author: "Author here"
  })

  const handleClick = () => {
    getRandomQuote().then((data)=> {
        setQuoteData({
          quote: data.content,
          author: data.author
        })
      })
  }

  // rendering JSX below.
```

5. Let's change the function name from `handleClick` to `changeQuote` as that's a better name (note as well you'll have to change it in the jsx)

6. Let's use our knowledge of `useEffect` and the component lifeCycle to render a quote when the page loads.
- import `useEffect` from `"react"` in your index.js file so the top line now looks like so
```js
import {useState, useEffect} from 'react'

// rest of our component...
```

7. Let's create a mounting effect using an empty dependency array under our `useState` hook, we're also going to add a debug string to see what is going on. Your component should now look like so.
```js
export default function Home() {
  const [quoteData, setQuoteData] = useState({
    quote: "Quote here.",
    author: "Author here"
  })

  useEffect(()=> {
    console.log("Home Mounted, see me in the console!")
  }, [])

  // ... other functions ...
  // rendering JSX below.
```
Note: If you now look at the console if you refresh your page you should see the message `"Home Mounted, see me in the console!"` in the console.

8. The next step is to call our `changeQuote` function in our newly created effect.
```js
export default function Home() {
  const [quoteData, setQuoteData] = useState({
    quote: "Quote here.",
    author: "Author here"
  })

  useEffect(()=> {
    console.log("Home Mounted, see me in the console!")
    // this will load our quote to the page.
    changeQuote()
  }, [])

  // ... other functions ...
  // rendering JSX below.
```
You should now see the the quote data changed when you load the page!
IMPORTANT NOTE: In React 18 there was a large change in how useEffect works (it is called twice), we'll update these notes in the future but for our projects for now we will be using `reactStrictMode: false` in our `next.config.js` files for now. So it should be like so:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // change this from true to false :)
}

module.exports = nextConfig
```
Once you do this, you need to restart your server.

9. We're going to do to learn next os how the updating works by informing the user how many quotes they've loaded.
- Create a stateful variable named `numberOfQuotes` in your component.
```js
  const [numberOfQuotes, setNumberOfQuotes] = useState(0)
```
- Display it on the page by adding some JSX under the `Box` containing the `Button` like below.
```jsx
  <Typography
    sx={{pt: 8}}
    variant="h5"
    align="center"
    color="text.primary"
    paragraph
  >
    You have fetched {numberOfQuotes} quotes
  </Typography>
```
- Let's listen to the changes in the in the `quoteData` using `useEffect` (we're also going to add a couple of variables for default quoteData) so your function should now look like so.
```js
export default function Home() {
  const DEFAULT_QUOTE = "Quote here"
  const DEFAULT_AUTHOR = "Author here"
  const [quoteData, setQuoteData] = useState({
    quote: DEFAULT_QUOTE,
    author: DEFAULT_AUTHOR
  })
  const [numberOfQuotes, setNumberOfQuotes] = useState(0)

  useEffect(()=> {
    console.log("Home Mounted, see me in the console!")
    changeQuote()
  }, [])

  useEffect(()=> {
    console.log(quoteData)
  }, [quoteData])

  // ... other functions ...
  // rendering JSX below.
```
Notes: 
- You can't listen to and update the same variable because you'll get an infinite loop.
- When you open the page you should see all the changes of the quoteData in the console. I hope you remember this because this is a quick and easy way to see the changes in your stateful variables when you debug your own applications.

- Next what we're going to do is we are going to add one to the `numberOfQuotes` stateful variable if the quote is not equal to the default. 
```js
export default function Home() {
  const DEFAULT_QUOTE = "Quote here"
  const DEFAULT_AUTHOR = "Author here"
  const [quoteData, setQuoteData] = useState({
    quote: DEFAULT_QUOTE,
    author: DEFAULT_AUTHOR
  })
  const [numberOfQuotes, setNumberOfQuotes] = useState(0)

  useEffect(()=> {
    console.log("Home Mounted, see me in the console!")
    changeQuote()
  }, [])

  useEffect(()=> {
    console.log(quoteData)
    if (quoteData.quote !== DEFAULT_QUOTE &&
        quoteData.author !== DEFAULT_AUTHOR) {
      setNumberOfQuotes(numberOfQuotes + 1)
    }
  }, [quoteData])

  // ... other functions ...
  // rendering JSX below.
```
Notes:
- you should see here that the `numberOfQuotes` increases on the page when you set the `quoteData` variable.
- you don't necessarily want to do this all the time, and in this case you could just call `setNumberOfQuotes` in the `changeQuote` function, but this is just for example purposes.


