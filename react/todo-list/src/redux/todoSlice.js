import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        setChecked: (state, action) => {
            state.todoList.map(todo => {
                if(action.payload === todo.id){
                  todo.checked = !todo.checked
                }
                return todo;
            })
        },
        dellTodo: (state, action) => {
            const newArr = state.todoList.filter(todo => action.payload !== todo.id);
            state.todoList = [];
            state.todoList.push(...newArr);
        },
        editTodo: (state, action) => {
            const [itemId, newValue] = action.payload;
            state.todoList.map(todo => {
                if(todo.id === itemId){
                    todo.title = newValue;
                }
                return todo;
            })
        }
    }
});

export const {
    addTodo,
    setChecked,
    dellTodo,
    editTodo
} = todoSlice.actions;
export const getTodoItems = state => state.todos.todoList;
export default todoSlice.reducer;