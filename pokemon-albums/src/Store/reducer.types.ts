import { Pokemon, PokemonCreated, PokemonDeleted } from '../react-app-env';
import { ActionsTypes } from './types';

export type ReducerActions =
  | {
      type: ActionsTypes.GET_POKEMONS;
      payload: Pokemon[];
    }
  | { type: ActionsTypes.TOGGLE_EDIT_MODE; payload: boolean }
  | { type: ActionsTypes.SET_POKEMON_TO_EDIT; payload: Pokemon }
  | {
      type: ActionsTypes.TOGGLE_ENABLE_FORM_NEW_POKEMON;
    }
  | { type: ActionsTypes.SET_POKEMON_CREATED; payload: PokemonCreated }
  | {
      type: ActionsTypes.SET_POKEMON_DELETED;
      payload: PokemonDeleted;
    };
