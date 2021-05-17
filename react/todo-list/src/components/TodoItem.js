import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../styles/todoitem.css';
import editIcon from '../imgs/pencil.png';
import {useDispatch} from 'react-redux';
import {setChecked, dellTodo, editTodo} from '../redux/todoSlice';
import PropTypes from 'prop-types'

const TodoItem = ({ id, title, checked}) => {
    const dispatch = useDispatch();

    const handlerEdit = (itemId) => {
        const newValue = prompt("Change value:", title);
        if(newValue !== "" && newValue !== null){
            dispatch(editTodo([itemId, newValue]));
        }
    }

    return (
        <div className="todoContainer">
            <FormControlLabel
                control={
                        <Checkbox
                            checked={checked}
                            onChange={() => dispatch(setChecked(id))}
                            color="secondary"
                        />
                }
                label={title}
            />
            <Button color="secondary" onClick={ () => handlerEdit(id) }>
                <img className="editIcon" src={editIcon} alt="Icon for edit btn"/>
            </Button>
            <Button color="secondary" onClick={() => dispatch(dellTodo(id))}>&times;</Button>
        </div>
    )
}

TodoItem.propTypes = {
    id: PropTypes.array,
    title: PropTypes.string,
    checked: PropTypes.bool
};

export default TodoItem;