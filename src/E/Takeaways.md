# REST Takeaways

- Just think of REST as being roughly equivalent to API calls
  - It's more than that, conceptually, but that would be getting too "nit-picky" for this course
- When doing `fetch()` calls for ***external data*** that you want to use as your component's state, do ***not*** `await` your calls. Instead, process as *promises* and *hook into React state* on the `.then()` portion (remembering to also do a `.catch()` and `.finally()` block).
- The `json-server` package has **breaking changes**, so remember to ***pin*** the version in the `package.json` to `json-server@0.17.0` for use in these samples!
- If you get something *working* and find the code is *too long*, then your task is one of **refactoring** (keeping the same funcitonality, but cleaning up the code to make it more modular or clearer to understand)
  - Usually, this results in **additional files** or **components**
- In the second example of this topic, we're sharing data between components through **prop drilling** and **callback functions**, making heavy use of *React State Managment* (critical for our component re-rendering)
  - *Don't worry about performance at this stage.*
  - There are other strategies for sharing state between components. (We'll possibly cover those later.)
