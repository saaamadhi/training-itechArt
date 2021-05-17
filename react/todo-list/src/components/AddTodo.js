import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/addtodo.css';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoSlice';

const AddTodo = () => {
    const dispatch = useDispatch();

    const addClickHandler = () => {
        const result = prompt("Enter text for new item:");
        if(result !== '' && result !== null){
            dispatch(addTodo({
                id: Date.now(),
                title: result,
                checked: false
            }))
        }
    }

    return (
        <>
            <Button
                className="addTodoBtn"
                variant="outlined" 
                color="secondary" 
                onClick={addClickHandler}
            >
                Add new todo
            </Button>
        </>
    )
}

export default AddTodo;