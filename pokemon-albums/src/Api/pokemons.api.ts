import axios from 'axios';
import { NewPokemon, Pokemon } from '../react-app-env';

const base_url = 'https://bp-pokemons.herokuapp.com/';

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${base_url}?idAuthor=1`);

    return response.data;
  } catch (error: any) {
    console.log('error al buscar pokemons', error);
    if (error) {
      return {
        data: [],
        type: 'Error al intentar obtener pokemones',
        success: false,
      };
    }
  }
};

export const saveNewPokemon = async (data: NewPokemon) => {
  try {
    const response = await axios.post(`${base_url}?idAuthor=1`, data);

    if (response.status === 200) {
      return {
        data: [response.data],
        type: 'Pokemon creado exitosamente',
        success: true,
      };
    }

    return response.data;
  } catch (error) {
    console.log('error al crear pokemon', error);
    if (error) {
      return {
        data: [],
        type: 'Error al intentar crear pokemon',
        success: false,
      };
    }
  }
};

export const updatePokemon = async (data: Pokemon) => {
  try {
    const response = await axios.put(`${base_url}${data.id}`, data);

    if (response.status === 200) {
      return {
        data: [response.data],
        type: 'Pokemon actualizado exitosamente',
        success: true,
      };
    }

    return response.data;
  } catch (error) {
    console.log('error al actualizar pokemon', error);
    if (error) {
      return {
        data: [],
        type: 'Error al actualizar pokemon',
        success: false,
      };
    }
  }
};

export const deletePokemon = async (id_pokemon: number) => {
  try {
    const response = await axios.delete(`${base_url}${id_pokemon}`);

    if (response.status === 200) {
      return {
        data: [response.data],
        type: 'Pokemon eliminado exitosamente',
        success: true,
      };
    }

    return response.data;
  } catch (error) {
    console.log('error al eliminar pokemon', error);
    if (error) {
      return {
        data: [],
        type: 'Error al intentar eliminar pokemon',
        success: false,
      };
    }
  }
};
