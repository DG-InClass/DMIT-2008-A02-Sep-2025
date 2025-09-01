# React Frontend Features, getServerSideProps

# Why?

Rendering applications on the backend and sending that information to the front end makes our application more "crawlable" (for SEO).

Since we are using `useEffect` and `useState` here for "REST API" syncronization, you'll see that for this we can essentially remove all references to it. Why? because this is the method to render things on the frontend.

We're going to use our completed example for our 

# Steps

1. Define the `getServerSideProps` async function and add `props` to the `pages/index.js` page and remove all of the `useEffect` and `useState`
- define the function and use `await` to get the data on the "server side" like so
```jsx
// ... imports ...

export async function getServerSideProps(context) {
  const agencies = await getAgencies()
  // equivalent to .then() in promises, the syntax is just a bit different.
  return {
    props: {
      agencies: agencies
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  console.log("Props")
  console.log(props)

  // rest of the component.... 
```
There's no need to import anything for this to work, this is just how Next.js 12 works which is quite nice.
You'll see that when you display the `props` to the console. that agencies is there.
Note: this is for next.js 12, refer to the [docs here](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
- Change the JSX to use the `props.agencies` rather than our stateful variable.
Change the JSX from this
```jsx 
  return (<div>
    {/**/}
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {agenciesData.map((agency)=> {
              return <AgencyCard
                key={agency.id}
                id={agency.id}
                imageUrl={agency.image_url}
                name={agency.name}
                abbreviation={agency.abbrev}
                description={agency.description}
              />
            })}

          </Box>
```
to use the server side rendered props of the page.
```jsx 
  return (<div>
    {/**/}
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {props.agencies.results.map((agency)=> {
              return <AgencyCard
                key={agency.id}
                id={agency.id}
                imageUrl={agency.image_url}
                name={agency.name}
                abbreviation={agency.abbrev}
                description={agency.description}
              />
            })}

          </Box>
```
- Remove the `useEffect` and `useState` from the page entirely!
Currently you'll have something like this
```jsx
import { useEffect, useState } from 'react'

// ... other imports here ...

// ... getServerSideProps function here ...

export default function Home(props) {
  console.log("Props")
  console.log(props)
  const [agenciesData, setAgenciesData] = useState([])
  
  useEffect(()=> {
    // fire this on load.
    getAgencies().then((data)=> {
      setAgenciesData(data.results)
    })
  }, [])


  return // ... all of the JSX ...
```
Remove all of the references of state and useEffect so that it looks like so.
```jsx
// removed useEffect and useState!

// ... other imports here ...

// ... getServerSideProps function here ...

export default function Home(props) {

  return // ... all of the JSX ...

```
Which now our component looks much easier to digest!

2. Let's do the same for the `agency/[id].js` page, and let's see how we get the router information.
- let's use the function `getServerSideProps` with the `context` parameter to see hwo to get the information.

```jsx
// ... all of the imports ...

export async function getServerSideProps(context) {
  const {id} = context.params

  const agencyInfo = await getAgency(id)
  // equivalent to .then() in promises, the syntax is just a bit different.
  
  return {
    props: {
      id: id,
      agencyInfo: agencyInfo
    }, // will be passed to the page component as props
  }
}

export default function Agency(props) {
  console.log("props")
  console.log(props)

  // ... rest of the 
```
You can see here that the `id` in the `getServerSideProps` function is contained within the `context.params` object.
the `agencyInfo` in our `getServerSideProps` function uses `await` on the just like we did in the last step as well.
You'll see both of these rendered in the console.
Note: here you want more information about the [context param docs](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
- Remove the `useEffect` and the `useState` and change the `agencyDetails` to use the `props.agencyInfo` (passed from the last point)
Change the following lines from this
```jsx
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

// ... rest of the imports ...

// ... getServerSideProps function here ...

export default function Agency(props) {
  console.log("props")
  console.log(props)

  const agencyDetails = props.agencyInfo
  console.log(agencyDetails)
  const [agencyDetails, setAgencyDetails] = useState()

  const router = useRouter()
  const { id } = router.query

  useEffect(()=> {
      getAgency(id).then((data)=> {
          setAgencyDetails(data)
      })
  }, [id])
```
to use this 
```jsx
// ... rest of the imports ...

// ... getServerSideProps function here ...

export default function Agency(props) {
  const router = useRouter()
  // note you still need the router to use route.push in the spacecraft.

  const agencyDetails = props.agencyInfo
  // I used the above so that we didn't have to change any of the JSX

  // ... rest of the jsx ..
```
and you can see that this greatly simplifies our application here.

# Conclusion

For applications like this one, using the Server Side Rendering (SSR) looks like it simplifies the process. As well what's great is that using our SSR improved our SEO because all of the elements are rendered on load.

## Challenge
- Change the `pages/spacecraft/[spaceCraftId].js` to use `getServerSideProps` async function like we have for the `pages/agency/[id].js`

