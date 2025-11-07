import React from 'react';
import logo from './logo.svg';
import './App.css';
import BuscarJugadores from './searchPlayers/BuscarJugadores';
import ShowPlayers from './showPlayers/ShowPlayers';

function App() {
  return (
    <div className="App">
      <BuscarJugadores></BuscarJugadores>
      <ShowPlayers></ShowPlayers>
    </div>
  );
}

export default App;
