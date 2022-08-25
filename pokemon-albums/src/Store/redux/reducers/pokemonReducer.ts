import { StateApp } from '../../../react-app-env';
import { ReducerActions } from '../../reducer.types';
import { ActionsTypes } from '../../types';

const initialState: StateApp = {
  isLoading: false,
  pokemons: [],
  querySearchPokemon: '',
  isFormNewPokemonEnable: false,
  pokemonCreated: {
    data: [],
    type: '',
    success: false,
  },
  isEditMode: false,
  pokemonToEdit: {
    attack: 0,
    defense: 0,
    hp: 0,
    id: 0,
    id_author: 1,
    image: '',
    name: '',
    type: '',
  },
  pokemonEdited: {
    data: [],
    type: '',
    success: false,
  },
  pokemonDelete: {
    data: [],
    type: '',
    success: false,
  },
};

const reducer = (state: StateApp = initialState, action: ReducerActions) => {
  switch (action.type) {
    case ActionsTypes.TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case ActionsTypes.TOGGLE_ENABLE_FORM_NEW_POKEMON: {
      return {
        ...state,
        isFormNewPokemonEnable: action.payload,
      };
    }

    case ActionsTypes.GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }

    case ActionsTypes.SET_QUERY_SEARCH_POKEMON: {
      return {
        ...state,
        querySearchPokemon: action.payload,
      };
    }

    // create pokemon

    case ActionsTypes.SET_POKEMON_CREATED: {
      return {
        ...state,
        pokemonCreated: action.payload,
      };
    }

    case ActionsTypes.RESET_POKEMON_CREATED: {
      return {
        ...state,
        pokemonCreated: action.payload,
      };
    }

    // edit pokemon

    case ActionsTypes.TOGGLE_EDIT_MODE: {
      if (action.payload === false) {
        return {
          ...state,
          isEditMode: action.payload,
          pokemonToEdit: {
            attack: 0,
            defense: 0,
            hp: 0,
            id: 0,
            id_author: 1,
            image: '',
            name: '',
            type: '',
          },
        };
      }

      return {
        ...state,
        isEditMode: action.payload,
      };
    }

    case ActionsTypes.SET_POKEMON_TO_EDIT: {
      return {
        ...state,
        pokemonToEdit: action.payload,
        isFormNewPokemonEnable: true,
        isEditMode: true,
      };
    }

    case ActionsTypes.SET_POKEMON_EDITED: {
      return {
        ...state,
        pokemonEdited: action.payload,
        isEditMode: false,
        pokemonToEdit: {
          attack: 0,
          defense: 0,
          hp: 0,
          id: 0,
          id_author: 1,
          image: '',
          name: '',
          type: '',
        },
      };
    }

    // delete pokemon

    case ActionsTypes.SET_POKEMON_DELETED: {
      return {
        ...state,
        pokemonDelete: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
