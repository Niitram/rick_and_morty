import { ADD_FAVORITE, DELETE_FAVORITE, ADD_CHARACTERS, DELETE_CHARACTER, FILTER, ORDER } from "./actions"
import { ASCENDENTE, SELECT_ALL, ADD_USER, DELETE_USER } from "./actions"


const initialState = {
    myFavorites: [],
    characters: [],
    allCharacters: [],
    userState: {}
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Logica con favoritos */
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...action.payload.favorites],
                allCharacters: [...action.payload.favorites],
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: [...action.payload.favorites],
                allCharacters: [...action.payload.favorites],
            }

        case FILTER:
            if (action.payload === SELECT_ALL) {
                return { ...state, myFavorites: state.allCharacters }
            }
            const allCharacters = [...state.allCharacters];
            const filter = allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: filter
            }

        /* if (action.payload === SELECT_ALL) {
            return { ...state, myFavorites: state.allCharacters }
        }
        return { ...state, myFavorites: state.allCharacters.filter(char => char.gender === action.payload) } */

        case ORDER:
            const todosLosPersonajes = [...state.allCharacters]
            let aux = []
            if (action.payload === ASCENDENTE) {
                aux = todosLosPersonajes.sort((charA, charB) => charA.id - charB.id)
            } else {
                aux = todosLosPersonajes.sort((charA, charB) => charB.id - charA.id)
            }
            return { ...state, myFavorites: aux }

        /* logica con cards */
        case ADD_CHARACTERS:
            /* Verifica si existe el personaje */
            const existe = state.characters.filter(char => char.id === action.payload.id)
            if (existe.length) {
                return { ...state }
            }
            return { ...state, characters: [...state.characters, action.payload] }
        case DELETE_CHARACTER:
            return { ...state, characters: state.characters.filter(char => char.id !== action.payload) }

        /* Logica para el usuario */
        /* Se agrega el usuario al estado global */
        case ADD_USER:
            return { ...state, userState: action.payload }
        /* Se elimina el usuario del estado global */
        case DELETE_USER:
            return { ...state, userState: {} }




        /* Si no coincide el action.type se retorna todo el state */
        default: return { ...state }
    }
}

export default rootReducer