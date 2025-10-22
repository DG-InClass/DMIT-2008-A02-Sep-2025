# React `useEffect` Hook

> *Bing AI Response:*

The useEffect Hook in React is a powerful tool for managing side effects in functional components. Side effects include tasks like fetching data, updating the DOM, setting up subscriptions, or cleaning up resources. Here's a concise overview:

## Key Features

1. Runs After Render: By default, useEffect runs after the component renders or updates.
1. Dependency Array: Controls when the effect runs:
    - Empty Array ([]): Runs only once, after the initial render.
    - Specific Dependencies: Runs when the specified dependencies change.
    - No Array: Runs after every render.
1. Cleanup Function: Allows you to clean up resources (e.g., remove event listeners or cancel subscriptions) to prevent memory leaks.

## Basic Syntax

```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Code to run after render
    console.log('Component rendered or updated');

    // Optional cleanup function
    return () => {
      console.log('Cleanup before next render or unmount');
    };
  }, []); // Dependency array

  return <div>Hello, World!</div>;
}
```

## Common Use Cases


1. Fetching Data

    ```jsx
    useEffect(() => {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data));
    }, []); // Runs only once
    ```

1. Subscribing to Events

    ```jsx
    useEffect(() => {
    const handleResize = () => console.log('Window resized');
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);
    ```

1. Updating the DOM

    ```jsx
    useEffect(() => {
    document.title = 'React App';
    }, []); // Runs only once
    ```

## Important Notes

- **Avoid Infinite Loops:** Ensure dependencies in the array are accurate to prevent unnecessary re-renders.
- **Multiple useEffect Hooks:** You can use multiple useEffect hooks in a single component for different tasks.

This hook simplifies managing side effects in functional components, making your code cleaner and more predictable!
