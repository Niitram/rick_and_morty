import { ADD_FAVORITE, DELETE_FAVORITE, ADD_CHARACTERS } from "./actions"





const initialState = {
    myFavorites: [],
    characters: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Logica con favoritos */
        case ADD_FAVORITE:
            return { ...state, myFavorites: [...state.myFavorites, action.payload] }
        case DELETE_FAVORITE:
            return { ...state, myFavorites: state.myFavorites.filter(char => char.id !== action.payload) }
        /* logica con personajes */
        case ADD_CHARACTERS:
            return { ...state, characters: [...state.characters, action.payload] }

        default: return { ...state }
    }
}

export default rootReducer