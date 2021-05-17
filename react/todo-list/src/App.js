import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles/App.css';
import {useSelector} from 'react-redux';
import {todosList} from './redux/todoSlice';

const App = () => {
  const todos = useSelector(todosList);

  return (
    <div className="App">
      <div className="wrapper">
        <h1>ToDo List</h1>
          {todos.length ?  
            <TodoList todos={todos} />
          :
            <p>No todos!</p>
          }
        <AddTodo />
      </div>
    </div>
  )
}

export default App;