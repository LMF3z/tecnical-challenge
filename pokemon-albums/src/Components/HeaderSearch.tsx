import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"
import { IoMdAdd } from "@react-icons/all-files/io/IoMdAdd"
import Button from './Button'
import { useAppDispatch } from "../Store/redux/reduxHooks"
import { toggleEnableFormNewPokemon } from "../Store/redux/actions/pokemon.actions"
import "../styles/headerSearch.css"

const HeaderSearch = () => {

    const dispatch = useAppDispatch()

    return (
        <div className='container-search-elements'>
            <div>
                <label>Listado de Pokemons</label>
                <div className="container-search-elements-input border-gray">
                    <AiOutlineSearch color="#8f999e" style={{ margin: "5px" }} size="1.2em" />
                    <input type="text" placeholder="Buscar"
                        onChange={() => { }} />
                </div>
            </div>
            <Button handleClick={() => dispatch(toggleEnableFormNewPokemon(true))}>
                <IoMdAdd size="1.3em" />
                Nuevo
            </Button>
        </div>
    )
}

export default HeaderSearch