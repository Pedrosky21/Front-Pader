import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BuscarJugadores from "./searchPlayers/BuscarJugadores";
import Nav from "./nav/Nav";
import ShowPlayers from "./showPlayers/ShowPlayers";
import { Player } from "./types/Player";

export const MOCK_PLAYERS: Player[] = [
  new Player({
    player_name: "Lionel Messi",
    elo: "2450",
    distance_km: "2.4",
    reasons: "Excelente precisión y control del balón",
    compatibility_sumary: "Altamente compatible con tu estilo de juego ofensivo",
    invitation_message: "¿Listo para armar jugadas increíbles juntos?"
  }),
  new Player({
    player_name: "Cristiano Ronaldo",
    elo: "2430",
    distance_km: "5.8",
    reasons: "Gran capacidad física y definición",
    compatibility_sumary: "Compatible en jugadas rápidas y contraataques",
    invitation_message: "¡Vamos a romper redes juntos!"
  }),
];
function App() {
  const [checkedPlayers,setCheckedPlayers]=useState<number[]>([])

  const checkPlayer=(id:number)=>{
    if(checkedPlayers.includes(id)){
      setCheckedPlayers(checkedPlayers.filter((playerId)=>playerId!==id))
    }else{
      setCheckedPlayers(checkedPlayers.concat([id]))
    }
  }
  return (
    <div className="App w-full h-screen bg-app-background p-4">
      <Nav></Nav>
      <div className="flex justify-evenly">
        <BuscarJugadores></BuscarJugadores>
        <ShowPlayers 
        players={MOCK_PLAYERS}
        onPlayerCheck={checkPlayer}></ShowPlayers>
      </div>
    </div>
  );
}

export default App;
