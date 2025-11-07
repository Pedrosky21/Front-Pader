import React from 'react';
import logo from './logo.svg';
import './App.css';
import BuscarJugadores from './searchPlayers/BuscarJugadores';

function App() {
  return (
    <div className="App bg-app-background p-4">
      <BuscarJugadores></BuscarJugadores>
    </div>
  );
}

export default App;
