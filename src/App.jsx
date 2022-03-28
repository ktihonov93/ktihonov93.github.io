import {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Containers/Header'
import CaughtPokemonList from './Containers/CaughtPokemonList';
import PokemonDetails from './Components/PokemonDetails';
import PokemonList from './Containers/PokemonList'
import { PokemonContext, PokemonProvider } from './Utils/PokemonContext'
import './App.css';

function App() {
  const { caught } = useContext(PokemonContext);

  return (

    <Router>
      <PokemonProvider>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/:id" element={<PokemonDetails caught={caught} />} />
          <Route exact path="/caught" element={<CaughtPokemonList />} />
        </Routes>
      </PokemonProvider>
    </Router>

  );
}

export default App;