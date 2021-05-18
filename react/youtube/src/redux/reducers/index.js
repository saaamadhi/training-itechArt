import {combineReducers} from 'redux';
import rootReducer from './authReducer';

const allReducers = combineReducers({
    rootReducer
});

export default allReducers;