const saveAction = (payload) => ({
    type: 'SAVE_DATA',
    payload
});

const saveData = (input) => async(dispatch) => {
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyDxUuvgp6mRTgGdxpGimj_UY4uD2VYSw6w`)
        .then(response => response.json())
        .then(json => dispatch(saveAction({arr: json.items})))
}

export {saveData};