/// <reference types="react-scripts" />

export type StateApp = {
  isLoading: boolead;
  pokemons: Pokemon[] | [];
  querySearchPokemon: string;
  isFormNewPokemonEnable: boolean;
  pokemonCreated: PokemonCreated;
  isEditMode: boolean;
  pokemonToEdit: Pokemon;
  pokemonEdited: PokemonEdited;
  pokemonDelete: PokemonDeleted;
};

export interface Pokemon {
  attack: number;
  defense: number;
  hp: number;
  id: number;
  id_author: number;
  image: string;
  name: string;
  type: string;
}

export interface NewPokemon {
  attack: number;
  defense: number;
  hp: number;
  idAuthor: number;
  image: string;
  name: string;
  type: string;
}

export interface PokemonCreated {
  data: [];
  type: string;
  success: boolean;
}

export interface PokemonEdited {
  data: [];
  type: string;
  success: boolean;
}

export interface PokemonDeleted {
  data: [];
  type: string;
  success: boolean;
}

export type FormNewPokemon = {
  id?: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
};

export interface attributesPokemon {
  attack: string;
  defense: string;
}
