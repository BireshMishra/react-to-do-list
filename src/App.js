import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokedex from './containers/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokemonDetails from './containers/PokemonDetails';

export default () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavigator />
        <Routes>
          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
