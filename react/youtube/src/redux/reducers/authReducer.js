const initState = {
    data: []
}

const rootReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case "SAVE_DATA": return state.data = [...payload.arr];
        default: return state.data;
    }
}

export default rootReducer;