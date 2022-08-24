import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { IoIosSave } from '@react-icons/all-files/io/IoIosSave'
import { ImCancelCircle } from '@react-icons/all-files/im/ImCancelCircle'
import "../styles/formHandlePokemon.css"
import Button from "./Button"
import { useAppDispatch, useAppSelector } from '../Store/redux/reduxHooks'
import { attributesPokemon, FormNewPokemon, NewPokemon, Pokemon } from '../react-app-env'
import { useEffect, useState } from 'react'
import { createNewPokemonAction, resetCreatePokemonAction, resetUpdatedAction, setEditMode, toggleEnableFormNewPokemon, toggleIsLoading, updatePokemonAction } from '../Store/redux/actions/pokemon.actions'
import { resolverFormPokemon } from '../security/formPokemon.validation.schema'

const FormHandlePokemon = () => {

    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.pokemon)

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormNewPokemon>({
        resolver: resolverFormPokemon
    });

    const [attackAndDefenseValues, setAttackAndDefenseValues] = useState<attributesPokemon>({
        attack: "0",
        defense: "0",
    })

    useEffect(() => {
        if (state.pokemonCreated.success) {
            toast(state.pokemonCreated.type, {
                onClose: () => {
                    dispatch(resetCreatePokemonAction())
                }
            })
            resetForm()
        }
    }, [state.pokemonCreated])

    useEffect(() => {
        if (state.pokemonEdited.success) {
            toast(state.pokemonEdited.type, {
                onClose: () => dispatch(resetUpdatedAction()),
            })
            resetForm()
        }
    }, [state.pokemonEdited])

    useEffect(() => {

        if (state.isEditMode) {
            setValue("id", state.pokemonToEdit.id)
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

        dispatch(toggleIsLoading(true))

        if (state?.isEditMode) {

            const newDataToEdit = {
                ...newData,
                id_author: newData.idAuthor,
                id: Number(data.id),
            }

            return updatePokemon(newDataToEdit)
        }

        dispatch(createNewPokemonAction(newData))
    }

    const updatePokemon = (data: Pokemon) => {
        dispatch(updatePokemonAction(data))
    }

    const resetForm = () => {
        reset()
        setAttackAndDefenseValues({
            attack: "0",
            defense: "0",
        })
    }

    return (
        <form className="border-gray" onSubmit={handleSubmit(createNewPokemon)} >
            <h3>Nuevo Pokemon</h3>

            <section>

                <input type="text" hidden {...register('id')} />

                <div className="form-group">
                    {errors.name && <span className='error'>Campo requerido.</span>}
                    <div className="container-form-input">
                        <label>Nombre:</label>
                        <input {...register("name")} className="border-gray" type="text"
                            placeholder="Nombre" />
                    </div>
                    {errors.image && <span className='error'>Campo requerido.</span>}
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
                <Button handleClick={state.isEditMode ?
                    resetForm :
                    () => dispatch(toggleEnableFormNewPokemon(false))}
                >

                    <ImCancelCircle />
                    Cancelar

                </Button>
            </section>
        </form>
    )
}

export default FormHandlePokemon