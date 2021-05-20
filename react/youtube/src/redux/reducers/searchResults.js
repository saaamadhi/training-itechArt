import {actionCreators} from '../actionCreators';

const initState = {
    data: []
}

const searchResults = (state = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case actionCreators.SAVE_DATA: return {type, payload};
        default: return state.data;
    }
}

export default searchResults;