// ~/components/TodoList.js
import {Box, Button, Grid, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react'; // This is the "hook" through which we let React
                                  // know about the data we are managing

export default function TodoList(props) {
    const [todoText, setTodoText] = useState(""); // hooks into the React "plumbing"
    //     \__ 0 _/  \____ 1 __/             \/
    //      |           |                     | The initial value for the data
    //      |           | is used for changing the state
    //      | is used to obtain the state
    const [allTodos, setAllTodos] = useState([]);

    const onTodoTextChange = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
    }

    const onAddTodoClick = () => {
        console.log('Clicked');
        // create a new list that has allTodos along with the new todoText.
        const newAllTodoList = [...allTodos, todoText];
        //                         \______/
        console.log(newAllTodoList);
        // Update the "state" of my todo-list data
        setAllTodos(newAllTodoList);
        // reset the value of the todoText
        setTodoText("");
    }

    return <>
       <h1>TODO List</h1>
       <TextField id="standard-basic" label="New Todo?"
          variant="standard" sx={{width: '100%'}}
          value={todoText} onChange={onTodoTextChange} />
        <Button variant='contained' onClick={onAddTodoClick}>Add Todo</Button>
        <Grid item xs={12}>
            <List sx={{width: '100%'}}>
                {allTodos.map((todoItem, index) =>
                  <ListItem key={index}>
                    <ListItemText>
                        <Typography variant="p" component="div">
                            {todoItem}
                        </Typography>
                    </ListItemText> 
                  </ListItem>
                )}
            </List>
        </Grid>
    </>
}
