# React Component Library - Bootstrap

# Why?

Design is difficult, and there's a lot of boilerplate that you don't necessarily need to build from scratch.

You've probably dealt with bootstrap before, so we're going to see the "react" way of getting this library in your project.

# Steps
1. Create and Run the Next.js Project
    Create the project
    `npx create-next-app@latest components-bootstrap-example`
    Go in to the folder
    `cd components-bootstrap-example`
    Run the project
    `npm run dev`
2. Stop your project (ctrl+c) and install react-bootstrap as seen in the [instructions here](https://react-bootstrap.github.io/getting-started/introduction)
- in your terminal (and at the root of the project) install bootstrap via npm `npm install react-bootstrap bootstrap`
- just as we've done in CPSC1520, we need to add the bootstrap stylesheets to the entry point of the application.
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
Note: if you remove the other stylesheets you'll have to modify your index.js file in the "pages" folder.

Note: for next.js we need to add this bootstrap to the `_app.js` file so that the entire application has access ([more information here](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet))

3. Remove the classes from all components and only keep the title like we've done in previous examples.

4. Let's add some components from this library explore how to understand and read the documentation.
- As you're reading the documentation of react bootstrap you need to understand how to import the components in your application. You can import components into your file by [looking at this part of the docs](https://react-bootstrap.github.io/getting-started/introduction/#importing-components)
	- Add the button like they do in the docs right here.
- Let's take a look a look at the [bootstrap grid](https://react-bootstrap.github.io/layout/grid/)
	- let's copy the code in the layout so that we can row and columns in our project.
	- import the components using the technique you just learned in the previous bullet point.
	- observe the changes on the page, but also see that the components "Col" and "Row" use the "children" prop (even if we don't see it) because they are "wrapping" other components.

5. Create a new "components" folder and create a component named "ComponentLibrariesList" in that folder.
- above the component, copy the list below into the file.
```js 
const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]
```
- we're going to loop through the `UI_LIBRARY_LIST` to display the list of available ui libraries. We're going to use the [bootstrap list groups](https://react-bootstrap.netlify.app/components/list-group/#basic-example)
to display this information.
- within the JSX we're going to loop through the list of object using `map` like we did for the last example. At the end this is what the JS will look like
```js
  return <ListGroup>
    { UI_LIBRARY_LIST.map((uiLibrary, index)=> {
        return <ListGroup.Item key={index}>
          <a href={uiLibrary.url}>{uiLibrary.name}</a>
        </ListGroup.Item>
      })
    }
  </ListGroup>
```

6. Import the "ComponentLibrariesList" in your "index.js" page, and use it in the JSX in one the "Col" defintions like so.
```js
<Col>
  <h4>Available component libraries</h4>
  <ComponentLibrariesList />
</Col>
```
