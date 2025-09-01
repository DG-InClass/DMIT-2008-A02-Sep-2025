# React Components Intro

# Steps

1. Create and Run the Next.js Project
    Create the project
    `npx create-next-app@latest components-example`
    Go in to the folder
    `cd components-example`
    Run the project
    `npm run dev`
2. In the "index.js"
- remove everything in the "main" tag except for the title ("h1").
    - change it to a title you're comfortable with.
- remove the footer.
- Observe the differences on the page as you make these changes.
3. In your "components-example" example project create a folder named "components" in the root of your project.
4. in the "components" folder create a file named "Hello.js"
    - create a function named "Hello" with "export default" before the function keyword.
    - in that function just return some html in it.
5. import your newly created component in the "index.js" file in your "pages" folder with the following
```js
import Hello from '../components/Hello.js'
```
6. use that component in your "Home" component by writing

```jsx
<Hello />
```
under the title tag in the "main"

- Observe the differences on the page as you make the changes.

7. Create a new component called "NewConcept" in a folder called "NewConcept.js" like you did with the "Hello" component. The only difference is that you're going to pass a parameter named "props"
- in your component use the prop named "concept" in the component itself. It should look something like below.
```jsx
  return <p>
    In this class we'll learn: {props.concept}
  </p>
```

8. import it and use it in your "index.js"
- import it like below.

```jsx
        import NewConcept from '../components/NewConcept'
```

- use it under the the Hello and define a prop "concept" like below. 

```jsx
        <NewConcept concept={"how to import components"} />
        <NewConcept concept={"how to use props in a component"} />
        <NewConcept concept={"how to import components"} />
```

- This will pass in the "concept" as the argument of the previous step.
9. Create a componenet called "ComponentWrapper" in the same way that you've done with the past two (define the props parameter).
- In the function we're going to use a special prop named "children" like so.
```jsx
        return <div style={{color: props.textColor}}>
          {props.children}
        </div>
```

- this is an example using the "children" property. If an element has this it can wrap other components (see the next step) or you can "nest" components in its' definition. 
- this is an example using the "style" property on elements which is given to us by "react". Although we won't use this much in the course it is a way (not the only/best way). If you want to [read more about style read here](https://reactjs.org/docs/dom-elements.html#style) 
10. import it in the index.js file and wrap all of the other components with it.
    
- import the component.
```jsx
    import ComponentWrapper from '../components/ComponentWrapper'
```

- nest all of the other components like so.
```jsx
        <ComponentWrapper textColor={"blue"}>
          <Hello />
          <NewConcept concept={"how to import components"} />
          <NewConcept concept={"how to use props in a component"} />
          <NewConcept concept={"how to import components"} />
        </ComponentWrapper>
```

- Observe the differences on the page.

Note: this notation is how we're going to name componts throughout the course. That is the file having the same as the name of the component.
