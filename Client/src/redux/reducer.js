import { AGREGAR_FAV, ELIMINAR_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_FAV: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    }
    case ELIMINAR_FAV: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    }

    case FILTER: {
      const allCharactersFiltered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharacters]
            : allCharactersFiltered,
      };
    }

    case ORDER: {
      const allCharactersFavCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    }

    default:
      return { ...state };
  }
}

export default rootReducer;
