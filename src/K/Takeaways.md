# Takeaways

## `useContext` in React

- `useContext` is an alternative to "prop drilling"
- 🌲 It is designed to share data as "global" *within a tree of components*
- 👍 Ideal for global states in *specific* situations such as theming, **authentication**, etc.
- ⚠️ **Avoid `useContext`** for all state, because it forces re-rendering when state changes.
- 📖 Read more in [*Understanding `useContext()`*](#understanding-usecontext)

## Authentication

- There is a significant difference between the concepts of **Authentication** and **Authorization**, despite the fact that they two have a close interplay.
  - **Authentication** is about determining *who the user is*.
  - **Authorization** is about determining whether or not the user should be given access to certain resources/capabilities.


----

## Appendix

> *The following information is from Bing Copilot. I have not yet verified the details, but it seems pretty solid.*

### Understanding `useContext`

`useContext` is a React Hook that allows you to access values from a **Context** without having to manually pass props down through multiple levels of components (a process known as "prop drilling"). It’s part of React’s Context API, which is designed for sharing data that can be considered “global” for a tree of components, such as themes, authentication status, or language settings.



#### **How It Works**

1.  **Create a Context**

    ```jsx
    const MyContext = React.createContext(defaultValue);
    ```

    This creates a Context object with an optional default value.

2.  **Provide the Context**

    Wrap your component tree with a `Context.Provider` and pass the value you want to share:

    ```jsx
    <MyContext.Provider value={someValue}>
      <App />
    </MyContext.Provider>
    ```

3.  **Consume the Context**

    Inside any child component, use the `useContext` hook:

    ```jsx
    import { useContext } from 'react';

    const value = useContext(MyContext);
    ```

    This gives you direct access to the value provided by the nearest `MyContext.Provider` in the component tree.



#### **Why Use It?**

- Eliminates **prop drilling**.
- Makes code cleaner and easier to maintain.
- Works well for global states like:
    - Theme (light/dark)
    - Authentication
    - Language/Localization
    - App-wide settings



#### **Example**

```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am a {theme} button</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```


#### **Key Points**

- `useContext` **does not** create a new context; it only consumes an existing one.
- It re-renders the component whenever the context value changes.
- Avoid overusing Context for all state—it's best for truly global data.

