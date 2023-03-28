import { ADD_FAVORITE, DELETE_FAVORITE, ADD_CHARACTERS, DELETE_CHARACTER, FILTER, ORDER } from "./actions"
import { DESCENDENTE, ASCENDENTE, SELECT_ALL } from "./actions"


const initialState = {
    myFavorites: [],
    characters: [],
    allCharacters: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Logica con favoritos */
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload],
            }
        /* case ADD_FAVORITE:
            return { ...state, myFavorites: [...state.myFavorites, action.payload] } */
        case DELETE_FAVORITE:
            return { ...state, myFavorites: state.myFavorites.filter(char => char.id !== action.payload) }

        case FILTER:
            if (action.payload === SELECT_ALL) {
                return { ...state, myFavorites: state.allCharacters }
            }
            return { ...state, myFavorites: state.allCharacters.filter(char => char.gender === action.payload) }

        case ORDER:
            const todosLosPersonajes = [...state.allCharacters]
            let aux = []
            if (action.payload === ASCENDENTE) {
                aux = todosLosPersonajes.sort((charA, charB) => charA.id - charB.id)
            } else {
                aux = todosLosPersonajes.sort((charA, charB) => charB.id - charA.id)
            }
            return { ...state, myFavorites: aux }
        /* return action.payload === ASCENDENTE ? { ...state, myFavorites: state.allCharacters.sort((charA, charB) => charA.id - charB.id) } : { ...state, myFavorites: state.allCharacters.sort((charA, charB) => charB.id - charA.id) } */

        /* if (action.payload === ASCENDENTE) {
                return { ...state, myFavorites: state.allCharacters.sort((charA, charB) => charA.id - charB.id) }
            }
            if (action.payload === DESCENDENTE) {
                return { ...state, myFavorites: state.allCharacters.sort((charA, charB) => charB.id - charA.id) }
            }
            return { ...state } */

        /* logica con cards */
        case ADD_CHARACTERS:
            return { ...state, characters: [...state.characters, action.payload] }
        case DELETE_CHARACTER:
            return { ...state, characters: state.characters.filter(char => char.id !== action.payload) }

        default: return { ...state }
    }
}

export default rootReducer