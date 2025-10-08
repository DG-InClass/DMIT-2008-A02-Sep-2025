// ~/components/TodoList.js
import {Box, Button, Grid, TextField } from '@mui/material';

export default function TodoList(props) {
    const onTodoTextChange = (event) => {
        console.log(event.target.value);
    }

    return <>
       <h1>TODO List</h1>
       <TextField id="standard-basic" label="New Todo?"
          variant="standard" sx={{width: '100%'}}
          onChange={onTodoTextChange} />
    </>
}
