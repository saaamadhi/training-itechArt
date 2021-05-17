import React from 'react';
import TodoItem from './TodoItem';
import FormGroup from '@material-ui/core/FormGroup';
import PropTypes from 'prop-types'

const TodoList = ({todos}) => {
    return (
        <FormGroup className="todosList">
            {todos.map((todo) => (
                <TodoItem 
                    key={`li-${todo.id}`}
                    id={todo.id}
                    title={todo.title}
                    checked={todo.checked}
                />
            ))}
        </FormGroup>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;