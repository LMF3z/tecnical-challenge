import { StateApp } from '../../../react-app-env';
import { ReducerActions } from '../../reducer.types';
import { ActionsTypes } from '../../types';

const initialState: StateApp = {
  pokemons: [],
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
  pokemonDelete: {
    data: [],
    type: '',
    success: false,
  },
};

const reducer = (state: StateApp = initialState, action: ReducerActions) => {
  switch (action.type) {
    case ActionsTypes.GET_POKEMONS: {
      return { ...state, pokemons: action.payload };
    }

    case ActionsTypes.TOGGLE_ENABLE_FORM_NEW_POKEMON: {
      return {
        ...state,
        isFormNewPokemonEnable: !state.isFormNewPokemonEnable,
      };
    }

    case ActionsTypes.SET_POKEMON_CREATED: {
      return {
        ...state,
        pokemonCreated: action.payload,
      };
    }

    case ActionsTypes.TOGGLE_EDIT_MODE: {
      return {
        ...state,
        isEditMode: action.payload,
      };
    }

    case ActionsTypes.SET_POKEMON_TO_EDIT: {
      return {
        ...state,
        pokemonToEdit: action.payload,
        isEditMode: true,
      };
    }

    case ActionsTypes.SET_POKEMON_DELETED: {
      return {
        ...state,
        pokemonDelete: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
