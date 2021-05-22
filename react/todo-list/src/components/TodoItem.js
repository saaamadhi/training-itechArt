import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../styles/todoitem.css';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useDispatch } from 'react-redux';
import { setChecked, dellTodo, editTodo } from '../redux/todoSlice';
import PropTypes from 'prop-types';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const TodoItem = ({ id, title, checked }) => {
    const dispatch = useDispatch();

    const handlerEdit = (itemId) => {
        const newValue = prompt("Change value:", title);
        if (newValue) {
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
            <Button color="secondary" onClick={() => handlerEdit(id)}>
                <SvgIcon  component={CreateOutlinedIcon} />
            </Button>
            <Button color="secondary" onClick={() => dispatch(dellTodo(id))}>&times;</Button>
        </div>
    )
}

TodoItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    checked: PropTypes.bool
};

export default TodoItem;