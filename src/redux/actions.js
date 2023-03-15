export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const ADD_CHARACTERS = "ADD_CHARACTERS"


export const addFavorite = (char) => {
    return {
        type: ADD_FAVORITE,
        payload: char
    }
}
export const deleteFavorite = (id) => {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}
export const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const API_KEY = "26929d3a59ee.86b7ab74c93bb6c2634b"


    return function (dispatch) {
        fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.name) {
                    dispatch({ type: ADD_CHARACTERS, payload: data })
                } else {
                    window.alert('No hay personajes con ese ID o ya esta seleccionado');
                }
            });
    }

}