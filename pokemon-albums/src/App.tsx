import FormHandlePokemon from './Components/FormHandlePokemon';
import HeaderSearch from './Components/HeaderSearch';
import Loader from './Components/Loader';
import Table from './Components/Table';
import { useAppSelector } from './Store/redux/reduxHooks';

function App() {

  const state = useAppSelector((state) => state.pokemon)

  return (
    <main className='container'>
      <HeaderSearch />
      <Table />
      {(state.isFormNewPokemonEnable || state.isEditMode) && (
        <FormHandlePokemon />
      )}
    </main>
  );
}

export default App;
