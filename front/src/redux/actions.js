import axios from "axios"

export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const ADD_CHARACTERS = "ADD_CHARACTERS"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const ASCENDENTE = "ASCENDENTE"
export const DESCENDENTE = "DESCENDENTE"
export const SELECT_ALL = "SELECT_ALL"
export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"




/* agrega a favoritos */
export const addFavorite = (char) => {
    const URL_BASE = "http://localhost:3001/rickandmorty/fav"
    return async function (dispatch) {
        const response = await axios.post(`${URL_BASE}`, char)
        dispatch({
            type: ADD_FAVORITE,
            payload: response.data
        })
    }
}
/* Elimina los favoritos */
export const deleteFavorite = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty/fav/"
    return async function (dispatch) {
        const response = await axios.delete(`${URL_BASE}${id}`)
        dispatch({
            type: DELETE_FAVORITE,
            payload: response.data
        })
    }
}
/* busca en personaje segun su id */
export const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/onsearch/"

    return async function (dispatch) {
        const response = await axios.get(`${URL_BASE}${id}`)
        if (response.data.name) {
            dispatch({ type: ADD_CHARACTERS, payload: response.data })
        } else {
            window.alert('No hay personajes con ese ID o ya esta seleccionado');
        }
    }

}
/* Elimina las cards al apretas el boton X */
export const onDelete = (id) => {
    return { type: DELETE_CHARACTER, payload: id }
}

/* Filtra las tarjetas */
export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}
/* Ordena las tarjetas */
export const orderCards = (id) => {
    return { type: ORDER, payload: id }
}


/* Logica de User */
export const addUser = (user) => {
    const URL = "http://localhost:3001/rickandmorty/login"
    return async function (dispatch) {
        const response = await axios.post(`${URL}`, user)
        if (response.data) {
            dispatch({
                type: ADD_USER,
                payload: response.data.user
            })
        }

    }
}