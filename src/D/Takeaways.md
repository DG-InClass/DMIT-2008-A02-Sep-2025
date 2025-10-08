

The key takeaways are

- The concept of **state** revolves around the *data* that your component and/or page is working with.
- Maintaining and communicating/sharing state (or data) in React components can be done in various ways.
  - Passing state to child components via `props`
  - Maintaining state using **React state hooks**
    - `const [someData, setSomeData] = useState(initialValue);`
- Keeping state *local* to a component means putting the `useState()` call inside the component function.
- Widening the state/data access can be done by moving the `useState()` outside of the component function (but still in the same *module*).
- ✨ It is extremely helpful to research the concept/implementation of **closures** in JavaScript.
- A common scenario when you might need to preserve/manage state is when processing form input.