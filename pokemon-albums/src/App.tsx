import { ToastContainer } from 'react-toastify';
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
      {(state.isFormNewPokemonEnable) && (
        <FormHandlePokemon />
      )}

      <div className="container-spinner">
        {state.isLoading && (
          <Loader />
        )}
      </div>

      <ToastContainer />
    </main>
  );
}

export default App;
