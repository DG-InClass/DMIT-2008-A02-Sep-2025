# React Events and State Fundamentals - Todo List

# Why?

State is what makes React so powerful, it's a great way of keeping in sync what is displayed in your component and your JavaScript code.

# Steps
1. Create and Run the Next.js Project
    Create the project
    `npx create-next-app@latest state-events-fundamental-example`
    Go in to the folder
    `cd state-events-fundamental-example`
    Run the project
    `npm run dev`

2. Stop your project (ctrl+c) and install MUI
  - install the package
  `npm install @mui/material @emotion/react @emotion/styled`
  - add Roboto in the head
```html
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
```
3. On your index page
- Remove everything in the main element.
- add a container ([docs here](https://mui.com/material-ui/react-container/
))

4. Create a TodoList component in a newly created components folder.
- We're going to use the following MUI components to build or TodoList app.
  - [Box](https://mui.com/material-ui/react-box/)
  - [Button](https://mui.com/material-ui/react-button/#basic-button)
  - [Grid](https://mui.com/material-ui/react-grid/)
  - [TextField](https://mui.com/material-ui/react-text-field/)
5. Let's use an event to listen to changes with the "onChange" react event
- in your `TodoList` component add a function that will take an "event" as a parameter. Note this "event" you can think of as the same as your event object from vanilla js, except with a bit more in it. Here's what the function looks like.
```jsx
  const onTodoTextChange = (event) => {
    console.log(event.target.value)
  }
```
Note: this is going to just print out the value of the input to the console.
- On your `TextField` component we're going to add the `onChange` property with the value of the function `onTodoTextChange` that we've just created.
```jsx
<TextField
  id="standard-basic"
  label="New Todo?"
  variant="standard"
  sx={{width: '100%'}}
  onChange={onTodoTextChange}
/>
```
- Observe that when you write in the text field input the event is fired and a console message is printed
6. Let's add an event on the button that listens to onClick events.
- first create a function in our `TodoList` component
```jsx
  const onAddTodoClick = () => {
    console.log("clicked")
  }
```
- on the `Button` add the function `onAddTodoClick` as the value `onClick` property on the component.
```jsx
<Button
  variant="contained"
  onClick={onAddTodoClick}
>Add Todo</Button>
```
- Observe that when you click this button the event is fired and a console message is printed
7. Let's create a stateful variable using reacts' `useState` hook and let's make the text field set this stateful variable any time its' value changes.
- import useState from react
```jsx
import {useState} from 'react'
```
- in the root of the `TodoList` component add a stateful variable named `todoText` like below.
```jsx
// right under the defintion of the funciton TodoList
  const [todoText, setTodoText] = useState("")
```
Note: the argument being passed into the  `useState("")` is original value of the `todoText` variable, change it to something else to see the difference!
- In the `onTodoTextChange` use the `setTodoText` function 
```jsx
  const onTodoTextChange = (event) => {
    console.log(event.target.value)
    setTodoText(event.target.value)
  }
```
- on the `TextField` set the value to the `todoText` and everytime the input changes fire the `onTodoTextChange` function
```jsx
  <TextField
    id="standard-basic"
    label="New Todo"
    variant="standard"
    sx={{width: '100%'}}
    onChange={onTodoTextChange}
    value={todoText}
  />
```
Note: use `setTodoText` when you want to change the variable `todoText` (this is in the `onTodoTextChange` function), as well 


8. Let's see the difference on the page. Under the button add the following code to see our state changing.
```jsx
  <Grid item xs={12}>
    Current input text: {todoText}
  </Grid>
```
9. Let's add one more stateful variable called `allTodos` we're going to use `setAllTodos` as the setter function (it's always going to be ) like below:
```jsx
const [allTodos, setAllTodos] = useState([])
```
Note: You can see here that the original value of allTodos is an empty list.
10. In the `onAddTodoClick` function we're going to do a few things. We're going to add the `todoText`, to the list of `allTodos` and we're going to reset the `todoText`. Change the `onAddTodoClick` with the following code:
```jsx
  const onAddTodoClick = () => {
    console.log("clicked")
    // create a new list that has allTodos and the new todos.
    const newAllTodoList = [...allTodos, todoText]
    console.log(newAllTodoList)
    // set the todoList
    setAllTodos(newAllTodoList)
    // reset the value of the todo text.
    setTodoText("")
  }
```
11. Display the list right under our our current input so that we can see the differnces of the list (replay the exising value.)
```jsx
  <Grid item xs={12}>
    Current input text: {todoText} <br/>
    Current TodoList: {allTodos.toString()}
  </Grid>
```
12. Let's use [MUI lists](https://mui.com/material-ui/react-list/#basic-list) to render the the list of todos. This is going to use the following components: List, ListItem, ListItemText.
- We're going to use our knowledge of JSX and how to render lists.
```jsx
  <List sx={{width: `100%`}}>
    {allTodos.map((todoItem, index)=> {
      return <ListItem key={index}>
        <ListItemText>
          <Typography variant="p" component="div">
            {todoItem}
          </Typography>
        </ListItemText>
      </ListItem>
    })}
  </List>
```
Notes: you can see that we loop through the todos using map. You can also see above that the parameters of map are "todoItem" and "index", the todoItem is the item in the list, and the index is only used for the keys.

13. Removed the following lines and see what the app looks like now!
```jsx
  <Grid item xs={12}>
    Current input text: {todoText} <br/>
    Current TodoList: {allTodos.toString()}
  </Grid>
```