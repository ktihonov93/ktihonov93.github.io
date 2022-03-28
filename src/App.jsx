import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Containers/Header'
import CaughtPokemonList from './Containers/CaughtPokemonList';
import PokemonDetails from './Components/PokemonDetails';
import PokemonList from './Containers/PokemonList'
import { PokemonProvider } from './Utils/PokemonContext'
import './App.css';

function App() {

  return (

    <Router>
      <PokemonProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/:id" element={<PokemonDetails />} />
          <Route exact path="/caught" element={<CaughtPokemonList />} />
        </Routes>
      </PokemonProvider>
    </Router>

  );
}

export default App;