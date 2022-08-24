import { IoIosSave } from '@react-icons/all-files/io/IoIosSave'
import { ImCancelCircle } from '@react-icons/all-files/im/ImCancelCircle'
import "../styles/formHandlePokemon.css"
import Button from "./Button"
import { useAppDispatch, useAppSelector } from '../Store/redux/reduxHooks'
import { useForm } from 'react-hook-form'
import { attributesPokemon, FormNewPokemon, NewPokemon } from '../react-app-env'
import { useEffect, useState } from 'react'
import { createNewPokemonAction } from '../Store/redux/actions/pokemon.actions'

const FormHandlePokemon = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.pokemon)

    const { register, handleSubmit, setValue, getValues, reset, formState: { errors } } = useForm<FormNewPokemon>();

    const [attackAndDefenseValues, setAttackAndDefenseValues] = useState<attributesPokemon>({
        attack: "0",
        defense: "0",
    })

    useEffect(() => {
        state.pokemonCreated.success && reset()
        state.pokemonCreated.success && setAttackAndDefenseValues({
            attack: "0",
            defense: "0",
        })
    }, [state.pokemonCreated])

    useEffect(() => {

        if (state.pokemonToEdit.name !== "") {
            setValue("attack", state.pokemonToEdit.attack)
            setValue("defense", state.pokemonToEdit.defense)
            setValue("name", state.pokemonToEdit.name)
            setValue("image", state.pokemonToEdit.image)

            setAttackAndDefenseValues({
                attack: String(state.pokemonToEdit.attack),
                defense: String(state.pokemonToEdit.defense),
            })
        }

    }, [state.pokemonToEdit])


    const createNewPokemon = (data: FormNewPokemon) => {
        const newData: NewPokemon = {
            attack: Number(data.attack),
            defense: Number(data.defense),
            idAuthor: 1,
            hp: 100,
            image: data.image,
            name: data.name,
            type: "..."
        }

        dispatch(createNewPokemonAction(newData))
    }

    return (
        <form className="border-gray" onSubmit={handleSubmit(createNewPokemon)} >
            <h3>Nuevo Pokemon</h3>

            <section>
                <div className="form-group">
                    <div className="container-form-input">
                        <label>Nombre:</label>
                        <input {...register("name")} className="border-gray" type="text" placeholder="Nombre" />
                    </div>
                    <div className="container-form-input">
                        <label>Imagen:</label>
                        <input {...register("image")} className="border-gray" type="text" placeholder="url"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="container-form-input">
                        <label>Ataque: {attackAndDefenseValues.attack}</label>
                        <input {...register("attack")}
                            defaultValue={attackAndDefenseValues.attack} type="range" min="0" max="100" step="1" onChange={(e) => setAttackAndDefenseValues({
                                ...attackAndDefenseValues,
                                attack: e.target.value
                            })} />
                        <label>100</label>
                    </div>
                    <div className="container-form-input">
                        <label>Defensa: {attackAndDefenseValues.defense}</label>
                        <input {...register("defense")} defaultValue={attackAndDefenseValues.defense}
                            type="range" min="0" max="100" step="1"
                            onChange={(e) => setAttackAndDefenseValues({
                                ...attackAndDefenseValues,
                                defense: e.target.value
                            })} />
                        <label>100</label>
                    </div>
                </div>
            </section>

            <section>
                <Button type='submit'>
                    <IoIosSave />
                    {state.isEditMode ? "Actualizar" : "Guardar"}
                </Button>
                <Button>
                    <ImCancelCircle />
                    Cancelar
                </Button>
            </section>
        </form>
    )
}

export default FormHandlePokemon