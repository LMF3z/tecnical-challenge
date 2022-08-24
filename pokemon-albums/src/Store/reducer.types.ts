import {
  Pokemon,
  PokemonCreated,
  PokemonDeleted,
  PokemonEdited,
} from '../react-app-env';
import { ActionsTypes } from './types';

export type ReducerActions =
  | {
      type: ActionsTypes.GET_POKEMONS;
      payload: Pokemon[];
    }
  | { type: ActionsTypes.TOGGLE_EDIT_MODE; payload: boolean }
  | { type: ActionsTypes.TOGGLE_IS_LOADING; payload: boolean }
  | { type: ActionsTypes.SET_POKEMON_TO_EDIT; payload: Pokemon }
  | { type: ActionsTypes.SET_POKEMON_EDITED; payload: PokemonEdited }
  | {
      type: ActionsTypes.TOGGLE_ENABLE_FORM_NEW_POKEMON;
      payload: boolean;
    }
  | { type: ActionsTypes.SET_POKEMON_CREATED; payload: PokemonCreated }
  | { type: ActionsTypes.RESET_POKEMON_CREATED; payload: PokemonCreated }
  | {
      type: ActionsTypes.SET_POKEMON_DELETED;
      payload: PokemonDeleted;
    };
