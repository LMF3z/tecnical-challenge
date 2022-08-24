import { Dispatch } from 'redux';
import {
  deletePokemon,
  getPokemons,
  saveNewPokemon,
} from '../../../Api/pokemons.api';
import { NewPokemon, Pokemon } from '../../../react-app-env';
import { ActionsTypes } from '../../types';

export const toggleEnableFormNewPokemon = () => (dispatch: Dispatch) => {
  dispatch({ type: ActionsTypes.TOGGLE_ENABLE_FORM_NEW_POKEMON });
};

export const getPokemonsAction = () => async (dispatch: Dispatch) => {
  const response = await getPokemons();
  dispatch({ type: ActionsTypes.GET_POKEMONS, payload: response });
};

export const createNewPokemonAction =
  (data: NewPokemon) => async (dispatch: Dispatch) => {
    const response = await saveNewPokemon(data);

    if (response.success) {
      dispatch({ type: ActionsTypes.SET_POKEMON_CREATED, payload: response });

      const pokemonsList = await getPokemons();
      dispatch({ type: ActionsTypes.GET_POKEMONS, payload: pokemonsList });
    }
  };

export const resetCreatePokemonAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionsTypes.RESET_POKEMON_CREATED,
    payload: {
      data: [],
      type: '',
      success: false,
    },
  });
};

export const setEditMode = () => async (dispatch: Dispatch) => {};

export const setPokemonToEditAction =
  (pokemon: Pokemon) => (dispatch: Dispatch) => {
    dispatch({ type: ActionsTypes.SET_POKEMON_TO_EDIT, payload: pokemon });
  };

export const deletePokemonAction =
  (id_pokemon: number) => async (dispatch: Dispatch) => {
    const response = await deletePokemon(id_pokemon);
    if (response.success) {
      dispatch({
        type: ActionsTypes.SET_POKEMON_DELETED,
        payload: response,
      });

      await resetDeletePokemonAction();

      const pokemonsList = await getPokemons();
      dispatch({ type: ActionsTypes.GET_POKEMONS, payload: pokemonsList });
    }
  };

export const resetDeletePokemonAction =
  async () => async (dispatch: Dispatch) => {
    dispatch({
      type: ActionsTypes.RESET_POKEMON_DELETED,
      payload: {
        data: [],
        type: '',
        success: false,
      },
    });
  };
