import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BuscarJugadores from "./searchPlayers/BuscarJugadores";
import Nav from "./nav/Nav";
import ShowPlayers from "./showPlayers/ShowPlayers";
import { Player } from "./types/Player";
import ShowDetailModal from "./showDetailModal/ShowDetailModal";
import { Loading } from "./loadingScreen/LoadingScreen";

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
  const [players,setPlayers]=useState<Player[]>(MOCK_PLAYERS)
  const [checkedPlayers,setCheckedPlayers]=useState<number[]>([])

  const checkPlayer=(id:number)=>{
    if(checkedPlayers.includes(id)){
      setCheckedPlayers(checkedPlayers.filter((playerId)=>playerId!==id))
    }else{
      setCheckedPlayers(checkedPlayers.concat([id]))
    }
  }
  const [selectedPlayer,setSelectedPlayer]=useState<Player|null>(null)

  const onCardClick=(index:number)=>{
    setSelectedPlayer(players[index])
  }
  const onModalClose=()=>{
    setSelectedPlayer(null)
  }

  const [loadingMessage,setLoadingMessage]=useState<string>("")
  const [showLoading,setShowLoading]=useState<boolean>(false)

  const sendNotifications=()=>{
    setLoadingMessage("Enviando notificaciones...")
    setShowLoading(true)
    setTimeout(()=>{
      setShowLoading(false)
    },3000)
  }
  return (
    <div className="App w-full h-screen bg-app-background p-4">
      <Nav></Nav>
      <div className="flex justify-evenly">
        <BuscarJugadores></BuscarJugadores>
        <ShowPlayers 
        players={players}
        onPlayerCheck={checkPlayer}
        onButtonClick={sendNotifications}
        onCardClick={onCardClick}></ShowPlayers>
      </div>
      <ShowDetailModal
      player={selectedPlayer}
      onClose={onModalClose}></ShowDetailModal>
      <Loading
      show={showLoading}
      message={loadingMessage}></Loading>
    </div>
  );
}

export default App;
