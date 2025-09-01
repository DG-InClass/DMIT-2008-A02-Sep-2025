# getServerSideProps and Refreshing our data in the Reviews app.

# Why and What

We're going to take a look at how to "rehydrate" or get the getServerSideProps to reload the data on the frontend. 



# How to run.

1. run `npm install` in both frontend and backend folders.
2. Go into your reviews-mock-backend and run `npm run server`
3. Go into your reviews-rest-app and run `npm run dev`

# Steps

1. Let's use `getServerSideProps` to load all of the reviews using `getReviews` and remove all of the `useEffect` from the page.
- Define the async `getServerSideProps` function and call the `getReviews` in the function and pass the props to the `Home` component.
```jsx 
// ... all of the imports ...

export async function getServerSideProps(context) {
  const reviews = await getReviews()
  // equivalent to .then() in promises, the syntax is just a bit different.
  return {
    props: {
      reviews: reviews
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  console.log("props")
  console.log(props)

  // ... rest of the component ...
```
There's no need to import anything for this to work, this is just how Next.js 12 works which is quite nice.
You'll see that when you display the `props` to the console. that reviews is there.
- Change the reviews in the jsx to use the `props.reviews` from the previous step rather than the stateful variable `reviews` like the following.
```jsx
// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  // ... functions and component stuff here ...
  return <div>
    {/* other jsx */}
        <Box
            sx={{
              pt: 2,
              pb: 2,
            }}
          >
          {props.reviews.map((adaptation, index)=> {
            return <AdaptationReviewCard
                key={index}
                id={adaptation.id}
                deleteCallback={deleteReviewItem}
                rating={adaptation.rating}
                title={adaptation.title}
                comment={adaptation.comment}
              />
          })}
        </Box>
    {/* other jsx */}
  </div>
```
You'll note here that before this change it was `reviews.map...` but now it's `props.reviews.map...`
- Now we're using the `getServerSideProps` function but you look at the component functions, they use a lot of the `setReviews`, so we need a way to refresh this data before we go and delete everything!

2. Add a `refreshData` function so that we can get the most recent information from the page.
- import the `useRouter` hook from `next/router` and define it in our component.
```jsx
import { useRouter } from 'next/router'

import {useState, useEffect} from 'react'

// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  const router = useRouter()

  console.log("props")
  console.log(props)

  // ... rest of the component ...
```
- create a `refreshData` function that will use our router to refresh our `props`
```jsx
// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  const router = useRouter()
  
  console.log("props")
  console.log(props)
  
  const refreshData = () => {
    router.replace(router.asPath);
  }
  
  // ... rest of the component ...
```
this is going to work because we're going to create a client side transition to the current route that we're on. As well, this is not going to affect our history. Next.js 12 doesn't have a great way to "rehydrate" the data but this is essentially our best bet.
- Observe where call set Reviews in our 
```jsx
// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  const router = useRouter()
  
  console.log("props")
  console.log(props)
  
  const refreshData = () => {
    router.replace(router.asPath);
  }

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
- Let's remove `loadAllReviews` and its' `useEffect` because we're loading the reviews via the `getServerSideProps`. Our component should now looks something like this.
```jsx 
// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  const router = useRouter()
  
  console.log("props")
  console.log(props)
  
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  const deleteReviewItem = (deleteReviewId) => {
    let allReviews = reviews.filter((review)=> {
      return review.id !== deleteReviewId
    })
    setReviews(allReviews)
  }

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

  // ... rest of the component ...
```
- Now we only have two places where we call `setReviews`, in `handleSubmit` and `deleteReviewItem`. Let's remove these instances and just call `refreshData` as shown below.
```jsx 
// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  const router = useRouter()
  
  console.log("props")
  console.log(props)
  
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)

  const deleteReviewItem = () => {
    refreshData()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postReview({
        title,
        comment: comments,
        rating
      }).then((data)=> {
        refreshData()
      })
  }

  // ... rest of the component ...
```
Now you can see that it'll refresh your data, and you reload the page the data will be in "sync" with our backend server.
- The last thing we can do here is remove the `reviews` stateful variable because we don't need it anymore so all of our stateful variables are shown below.
```jsx
// ... all of the imports ...

// ...getServerSideProps function ...

export default function Home(props) {
  const router = useRouter()
  
  console.log("props")
  console.log(props)
  
  const refreshData = () => {
    router.replace(router.asPath);
  }

  // reviews removed from here!
  const [title, setTitle] = useState("")
  const [comments, setComments] = useState("")
  const [rating, setRating] = useState(0)
  
  // ... rest of the component ...

```

# Conclusion

With this example with our `getServerSideProps` framework feature you can see we're keeping some of the "state" separate from keeping our component in "sync" with our api.

Note: This is not perfect for all components but I wanted to make sure that we understand how to use this.
