import {API_KEY, BASE_URL} from '../../constants';

const saveAction = (payload) => ({
    type: 'SAVE_DATA',
    payload
});

const saveData = (input) => async(dispatch) => {
    await fetch(`${BASE_URL}${input}${API_KEY}`)
        .then(response => response.json())
        .then(json => dispatch(saveAction({arr: json.items})))
}

export {saveData};