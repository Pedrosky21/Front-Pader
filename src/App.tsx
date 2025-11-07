import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BuscarJugadores from "./searchPlayers/BuscarJugadores";
import Nav from "./nav/Nav";

function App() {
  return (
    <div className="App w-full h-screen bg-app-background p-4">
      <Nav></Nav>
      <div className="flex justify-between">
        <BuscarJugadores></BuscarJugadores>
      </div>
    </div>
  );
}

export default App;
