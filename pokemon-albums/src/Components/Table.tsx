import { AiOutlineEdit } from '@react-icons/all-files/ai/AiOutlineEdit'
import { FaTrash } from "@react-icons/all-files/fa/FaTrash"
import { useEffect } from 'react'
import { deletePokemonAction, getPokemonsAction, setPokemonToEditAction } from '../Store/redux/actions/pokemon.actions'
import { useAppDispatch, useAppSelector } from '../Store/redux/reduxHooks'
import { Pokemon } from '../react-app-env'
import '../styles/table.css'

const Table = () => {

    const state = useAppSelector((state) => state.pokemon)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        dispatch(getPokemonsAction())
    }

    const handleEditePokenon = (pokemon: Pokemon) => {
        dispatch(setPokemonToEditAction(pokemon))
    }

    const handleDeletePokemon = (id: number) => dispatch(deletePokemonAction(id))

    return (
        <table className="border-gray">
            <thead className='border-gray'>
                <tr>
                    <th className='border-gray'>Nombre</th>
                    <th className='border-gray'>Imagen</th>
                    <th className='border-gray'>Ataque</th>
                    <th className='border-gray'>Defensa</th>
                    <th className='border-gray'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {state.pokemons.length > 0 && state.pokemons.map((pokemon: Pokemon) => (
                    <tr key={pokemon.id}>
                        <td className='border-gray'>{pokemon.name}</td>
                        <td className='border-gray'>
                            <img src={pokemon.image} alt="pokemon" width="20px" height="20px" />
                        </td>
                        <td className='border-gray'>{pokemon.attack}</td>
                        <td className='border-gray'>{pokemon.defense}</td>
                        <td className='border-gray'>
                            <AiOutlineEdit onClick={() => handleEditePokenon(pokemon)} className='violet-color' size="1em" style={{ marginInline: "10px" }} />
                            <FaTrash onClick={() => handleDeletePokemon(pokemon.id)} className='violet-color' size="1em" style={{ marginInline: "10px" }} />
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}

export default Table