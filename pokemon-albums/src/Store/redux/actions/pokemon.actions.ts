import { Dispatch } from 'redux';
import {
  deletePokemon,
  getPokemons,
  saveNewPokemon,
  updatePokemon,
} from '../../../Api/pokemons.api';
import { NewPokemon, Pokemon } from '../../../react-app-env';
import { ActionsTypes } from '../../types';

export const toggleEnableFormNewPokemon =
  (mode: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionsTypes.TOGGLE_ENABLE_FORM_NEW_POKEMON,
      payload: mode,
    });
  };

export const toggleIsLoading = (mode: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: ActionsTypes.TOGGLE_IS_LOADING, payload: mode });
};

export const setEditMode = (mode: boolean) => async (dispatch: Dispatch) =>
  dispatch({ type: ActionsTypes.TOGGLE_EDIT_MODE, payload: mode });

export const getPokemonsAction = () => async (dispatch: Dispatch) => {
  const response = await getPokemons();
  dispatch({ type: ActionsTypes.GET_POKEMONS, payload: response });
  dispatch({ type: ActionsTypes.TOGGLE_IS_LOADING, payload: false });
};

export const searchPokemonAction = (query: string) => (dispatch: Dispatch) => {
  dispatch({ type: ActionsTypes.SET_QUERY_SEARCH_POKEMON, payload: query });
};

// create pokemon

export const createNewPokemonAction =
  (data: NewPokemon) => async (dispatch: Dispatch) => {
    const response = await saveNewPokemon(data);

    if (!response.success) {
      return dispatch({
        type: ActionsTypes.SET_POKEMON_CREATED,
        payload: response,
      });
    }

    if (response.success) {
      dispatch({ type: ActionsTypes.SET_POKEMON_CREATED, payload: response });

      const pokemonsList = await getPokemons();
      dispatch({ type: ActionsTypes.GET_POKEMONS, payload: pokemonsList });
      dispatch({ type: ActionsTypes.TOGGLE_IS_LOADING, payload: false });
    }
  };

export const resetCreatePokemonAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionsTypes.SET_POKEMON_CREATED,
    payload: {
      data: [],
      type: '',
      success: false,
    },
  });
};

// edit pokemon

export const setPokemonToEditAction =
  (pokemon: Pokemon) => (dispatch: Dispatch) => {
    dispatch({ type: ActionsTypes.SET_POKEMON_TO_EDIT, payload: pokemon });
  };

export const updatePokemonAction =
  (pokemon: Pokemon) => async (dispatch: Dispatch) => {
    const response = await updatePokemon(pokemon);

    if (!response.success) {
      return dispatch({
        type: ActionsTypes.SET_POKEMON_EDITED,
        payload: response,
      });
    }

    if (response.success) {
      dispatch({ type: ActionsTypes.SET_POKEMON_EDITED, payload: response });

      const pokemonsList = await getPokemons();
      dispatch({ type: ActionsTypes.GET_POKEMONS, payload: pokemonsList });
      dispatch({ type: ActionsTypes.TOGGLE_IS_LOADING, payload: false });
    }
  };

export const resetUpdatedAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionsTypes.SET_POKEMON_EDITED,
    payload: { data: [], type: '', success: false },
  });
};

// delete pokemon

export const deletePokemonAction =
  (id_pokemon: number) => async (dispatch: Dispatch) => {
    const response = await deletePokemon(id_pokemon);

    if (!response.success) {
      return dispatch({
        type: ActionsTypes.SET_POKEMON_DELETED,
        payload: response,
      });
    }

    if (response.success) {
      dispatch({
        type: ActionsTypes.SET_POKEMON_DELETED,
        payload: response,
      });

      resetDeletePokemonAction();

      const pokemonsList = await getPokemons();
      dispatch({ type: ActionsTypes.GET_POKEMONS, payload: pokemonsList });
      dispatch({ type: ActionsTypes.TOGGLE_IS_LOADING, payload: false });
    }
  };

export const resetDeletePokemonAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionsTypes.SET_POKEMON_DELETED,
    payload: {
      data: [],
      type: '',
      success: false,
    },
  });
};
