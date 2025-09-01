import { BASE_URL } from './base.js'

const getReviews = () => {
  // returning the fetch will make our "getReviews"
  // function a promise, because it is going over the
  // network it needs to be asynchronous.
  return fetch(`${BASE_URL}/reviews/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'       
      }
    }).then((response)=> {
      return response.json()
    }).then((data)=> {
      // using Promise.resolve here will pass the data we have
      // fetched here as the returnedData passed when we use the function.
      // getReviews().then((returnedData)=> { // when used in other places.})
      return Promise.resolve(data)
    })
}

const postReview = ({title, comment, rating}) => {
  // always return the fetch, because you need to return the fetch promise!
  return fetch(`${BASE_URL}/reviews/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'       
    },
    body: JSON.stringify({
      title,
      comment,
      rating
    })
  }).then((response)=> {
    return response.json()
  }).then((data)=> {
    // using Promise.resolve here will pass the data we have
    // fetched here as the returnedData passed when we use the function.
    // postReview({title: title,
    //   comment: comment,
    //   rating: rating}).then((returnedData) => { }))
    // where title, comment and rating or function 
    return Promise.resolve(data)
  })
}

export { getReviews, postReview }
