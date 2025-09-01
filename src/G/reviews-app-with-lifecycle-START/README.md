# React RESTFul APIs, State, in a Review App.

# Why and What

In our app we need to click a button "Load all current Reviews". This is a bit clunky.

We want our application to load on the client when our application runs. 

We're also going to have a delete button to remove items and we're going to add a small log of what the user has done during the session.

We'll also be adding alerts, for network errors and we'll be adding some messages when it's removed.

# How to run.

1. run `npm install` in both frontend and backend folders.
2. Go into your reviews-mock-backend and run `npm run server`
3. Go into your reviews-rest-app and run `npm run dev`

# Steps

1. Observe that the function `loadAllReviewsButton` (in `pages/index.js`) is invoked when the user clicks the button with the text `"Load All Current Reviews"`. The function just loads our data from the backend with our `getReviews` function.

2. Let's load the data when the page is loaded.
- import `useEffect` in the `pages/index.js` file
```js
import {useState, useEffect} from 'react'

// ... rest of file ...
```
- under the `useState` hooks, let's create an "effect" so that we can execute something when the component is mounted.
```js
export default function Home() {
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  useEffect(()=> {
    console.log("Home mounted")
  }, [])

  // ... rest of file ...
```
Note: You can note here that "Home mounted" is shown twice, so let's change the `next.config.js` to set `reactStrictMode: false`. You'll need to rerun the server for the changes to take effect.
After reruning this you should see "Home mounted" only once.
- Remove the "Load All Reviews" button from the JSX because we won't need it, so remove the following.
```jsx
  <Button
    variant="contained"
    onClick={loadAllReviewsButton}
  >
    Load All Current Reviews
  </Button>
```
- We're going to change the `loadAllReviewsButton` function name to `loadAllReviews` so our component should now look like this:
```js
export default function Home() {
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  useEffect(()=> {
    console.log("Home mounted")
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    postReview({
        title,
        comment: comments,
        rating
      }).then((data)=> {
        setReviews([data, ...reviews])
      })
  }

  const loadAllReviews = () => {
    getReviews().then((data)=> {
      setReviews(data)
    })
  }

  // ... rest of the component ...

```
- Now let's call `loadAllReviews` function in our `useEffect`, because we want to call to call our function on mount we need our second argument to use an empty dependency array `[]`.
```js
export default function Home() {
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  // on the client side, our function will fetch
  // all of our reviews on loading of the page.
  useEffect(()=> {
    loadAllReviews()
  }, [])

  // ... rest of file ...
```
Now you can see our page loads

3. Let's add a delete button to the JSX of our `AdaptationReviewCard` so that we can add that functionality in the next step.
- Let's take a look at the [Card Documentation for MUI](https://mui.com/material-ui/react-card/#complex-interaction) so that we can add a fitting delete button. We're also going to install Icons and look at the [Mui Icons Documentation](https://mui.com/material-ui/icons/) so that we can use it in our project.

- Stop the next application and install the Material Icons project with the command `npm install @mui/icons-material`.
Note: If you're using this UI Library in the future and you're wondering whic h icon to use you can take a look at [the list here](https://mui.com/material-ui/material-icons/)
Note: if you see the `@mui/icons-material` in the `package.json` of the next project you can proceed to the next step and run the next project again.

- Open the file `components/AdaptationReviewCard.js` and import the delete icon.
```js
// ... other imports ...
import DeleteIcon from '@mui/icons-material/Delete';

// ... rest of file
```
Note: Try to keep your imports organized and be consistent across all files a way that you like to do it.

- Observer that in the [Card Documentation for MUI if you open the source](https://mui.com/material-ui/react-card/#complex-interaction) that there's a perfect place for our `Delete` button to rest in the `"action"` key of the `CardHeader` component. It also requires an `IconButton` to get the animations, so let's import it.
```js
// ... other imports ...
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

// ... rest of file
```
- Let's change the `"action"` key in the `CardHeader` to include the `IconButton` and the `DeleteIcon` so it becomes.
```jsx
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
        {props.rating}
      </Avatar>
    }

    action={
      <IconButton>
        <DeleteIcon />
      </IconButton>
    }
    
    title={
      <Typography variant="body2" color="text.secondary">
        {props.title}
      </Typography>
    }
  />
```
4. Let's build out the functionality to delete this from our frontend and backend (if we just remove it from the frontend it will just comeback next time we load the page. We'll focus creating the delete button first.
- Observe in the backend `review-db.json` that every `"review"` has a unique `"id"`, we're going to be using this to delete the reviews. To see exactly what we're getting in the `"reviews"` let's observe all the changes to that stateful variable by using an "effect" like
- In the `pages/index.js` let's add the `"id"` to the props passed in like the following.
```jsx
  <Box
    sx={{
      pt: 2,
      pb: 2,
    }}
  >
  {reviews.map((adaptation, index)=> {
    return <AdaptationReviewCard
        key={index}
        id={adaptation.id}
        rating={adaptation.rating}
        title={adaptation.title}
        comment={adaptation.comment}
      />
  })}
  </Box>
```
- in the file `components/AdaptationReviewCard.js` let's add a function that will execute when we click the delete `IconButton` and will take an `reviewId` as a parameter so our component becomes
```js
export default function AdaptationReviewCard(props) {
  const deleteReviewHandler = (reviewId) => {
    console.log(`deleting ${reviewId}...`)
  }

  // ... rest of the jsx ...
```
- in the `CardHeader`'s `IconButton` add an `onClick` event that will execute the function `deleteReviewHandler` and pass in the `props.id` (that we passed as a prop in `pages/index.js`). The jsx of `components/AdaptationReviewCard.js` should look like below.
```jsx
  <IconButton onClick={()=> {deleteReviewHandler(props.id)}}>
    <DeleteIcon />
  </IconButton>
```
When you click the delete button it should add a console message.

5. Let's remove the review from our `review` list when we click the button (only on the front end).
- Observe we'll be changing the stateful list `reviews` we'll need to create the function in the `pages/index.js` and pass it by reference as a prop to our `AdaptationReviewCard` handler. Since we'll be modifying this list let's add an effect to observe all changes in the `reviews` variable under our "mounting" effect like so.
```js
export default function Home() {
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  // on the client side, our function will fetch
  // all of our reviews on loading of the page.
  useEffect(()=> {
    loadAllReviews()
  }, [])

  // for debugging "reviews" purposes only
  useEffect(()=> {
    console.log(reviews)
  }, [reviews])

  // ... rest of your application ...
```
This will allow us to see all of the changes when we add or remove a review.
- Let's create a function in our `pages/index.js` that will delete our review with a specific `deleteReviewId` in the `reviews` list. So our `pages/index.js` should be like this.
```js
export default function Home() {
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  // on the client side, our function will fetch
  // all of our reviews on loading of the page.
  useEffect(()=> {
    loadAllReviews()
  }, [])

  // for debugging "reviews" purposes only
  useEffect(()=> {
    console.log(reviews)
  }, [reviews])

  const deleteReviewItem = (deleteReviewId) => {
    let allReviews = reviews.filter((review)=> {
      return review.id !== deleteReviewId
    })
    setReviews(allReviews)
  }

  // ...rest of the component...
```
Note: we're just creating a new list with all of the reviews by filtering the review that we're deleting, in case you might have been confused by this.

- to use this function in our `AdaptationReviewCard` component we need to pass it by reference (so not call it) to the props of this component. So below we're adding the `deleteCallback` prop to be equal to `deleteReviewItem` in our JSX as follows:
```jsx
  {reviews.map((adaptation, index)=> {
    return <AdaptationReviewCard
        key={index}
        id={adaptation.id}
        deleteCallback={deleteReviewItem}
        rating={adaptation.rating}
        title={adaptation.title}
        comment={adaptation.comment}
      />
  })}
```
- now that we've passed `deleteCallback` as a prop we can use this in our `components/AdaptationReviewCard` file in the `deleteReviewHandler` we created earlier.
```js
export default function AdaptationReviewCard(props) {
  const deleteReviewHandler = (reviewId) => {
    console.log(`deleting ${reviewId}...`)
    props.deleteCallback(reviewId)
  }

  //... rest of the jsx ...
```
Note: if you click them now, they will just leave the page. More importantly though we see here that if we reload the page, they just come back! So we're going to have to delete them from the backend as well.

6. Let's delete the function from the backend as well as the frontend.
- To be able to "delete" from the backend we'll need to look at the [json-server documentation](https://github.com/typicode/json-server#routes) to see how we can do so.
-  Let's open up a rest api client as well to test how delete works. Take a look at reviews with a `GET` request on `http://localhost:5000/reviews/`. Use a `DELETE` request on that id for example `DELETE` on `http://localhost:5000/reviews/4/` and this will delete from the `reviews-db.json`.
Note: you can check that from either hitting that endpoint again or viewing the `reviews-db.json`
- Let's add a function in our `utils/api/reviews.js` that will make this request in our code like follows:
```js
// ... other api requests above ...

const deleteReviewItem = (id) => {
  return fetch(`${BASE_URL}/reviews/${id}/`, {
    method: "DELETE"
  }).then((response)=> {
    return response.json()
  }).then((data)=> {
    return Promise.resolve(data)
  })
} 

export { getReviews, postReview, deleteReviewItem }
```
- import that function into your the `components/AdaptationReviewCard.js` file so that you can use it like so.
```js
// ... other imports ...

import {deleteReviewItem} from '../utils/api/reviews.js'

export default function AdaptationReviewCard(props) {

// ... rest of the component ...
``` 
- in your `deleteReviewHandler` only use the `props.deleteCallback` function if the deletion was successful, so if the `deleteReviewItem`'s promise is resolved.
```js
// ... other imports ...
export default function AdaptationReviewCard(props) {
  const deleteReviewHandler = (reviewId) => {
    console.log(`deleting ${reviewId}...`)
    deleteReviewItem(reviewId).then((data)=> {
      props.deleteCallback(reviewId)
    })
  }

  // ... rest of the component ...
```
Once the REST API is called then you see here that the review is deleted permanently and does not reload the page. 

Final Notes:
- We used `useEffect` with an empty dependency array (`[]`) to make a network call `loadAllReviews`.
- We used `useEffect` with a dependency array of `[reviews]` to see all of the changes of our stateful variable. (You can also remove this now if you'd like)
- We also took a look on how to use the `DELETE` endpoint on the [json-server package](https://github.com/typicode/json-server#routes)
 