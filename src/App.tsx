import React, { useState } from "react";
import "./App.css";
import BuscarJugadores from "./searchPlayers/BuscarJugadores";
import Nav from "./nav/Nav";
import ShowPlayers from "./showPlayers/ShowPlayers";
import { Player } from "./types/Player";
import ShowDetailModal from "./showDetailModal/ShowDetailModal";
import { buscarJugadores } from "./services/players.service";
import { Loading } from "./loadingScreen/LoadingScreen";

export const MOCK_PLAYERS: Player[] = [
  new Player({
    player_name: "Lionel Messi",
    elo: "2450",
    distance_km: "2.4",
    reasons: "Excelente precisión y control del balón",
    compatibility_sumary:
      "Altamente compatible con tu estilo de juego ofensivo",
    invitation_message: "¿Listo para armar jugadas increíbles juntos?",
  }),
  new Player({
    player_name: "Cristiano Ronaldo",
    elo: "2430",
    distance_km: "5.8",
    reasons: "Gran capacidad física y definición",
    compatibility_sumary: "Compatible en jugadas rápidas y contraataques",
    invitation_message: "¡Vamos a romper redes juntos!",
  }),
  new Player({
    player_name: "Lionel Messi",
    elo: "2450",
    distance_km: "2.4",
    reasons: "Excelente precisión y control del balón",
    compatibility_sumary:
      "Altamente compatible con tu estilo de juego ofensivo",
    invitation_message: "¿Listo para armar jugadas increíbles juntos?",
  }),
  new Player({
    player_name: "Lionel Messi",
    elo: "2450",
    distance_km: "2.4",
    reasons: "Excelente precisión y control del balón",
    compatibility_sumary:
      "Altamente compatible con tu estilo de juego ofensivo",
    invitation_message: "¿Listo para armar jugadas increíbles juntos?",
  }),
];
function App() {
  const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);
  const [checkedPlayers, setCheckedPlayers] = useState<number[]>([]);

  const checkPlayer = (id: number) => {
    if (checkedPlayers.includes(id)) {
      setCheckedPlayers(checkedPlayers.filter((playerId) => playerId !== id));
    } else {
      setCheckedPlayers(checkedPlayers.concat([id]));
    }
  };
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);


  const handleJsonFromChild = async (json: string) => {
    try {
      const payload = JSON.parse(json); // Convertir string JSON a objeto
      const data = await buscarJugadores(payload); // POST al backend
      setPlayers(data); // Actualizar lista de jugadores con la respuesta
    } catch (error) {
      alert("JSON inválido o error buscando jugadores");
      console.error(error);
    }
  };

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
    <div className="App w-full h-full flex flex-col bg-app-background">
      <Nav></Nav>
      <div className="flex flex-col items-center text-center text-white p-4">
      <h1 className="text-3xl font-bold pb-2">Buscar jugadores</h1>
      <p className="text-center max-w-[40vw] self-center text-xl flex">Ingrese los datos de su rival ideal y el sistema le mostrara los jugadores mas compatibles</p>
     
        
      </div> 
      <div className="flex justify-evenly">
        <BuscarJugadores onJsonSend={handleJsonFromChild}></BuscarJugadores>
        <ShowPlayers
          players={players}
          onPlayerCheck={checkPlayer}
        onButtonClick={sendNotifications}
          onCardClick={onCardClick}
        ></ShowPlayers>
      </div>
      <ShowDetailModal
        player={selectedPlayer}
        onClose={onModalClose}
      ></ShowDetailModal>
      <Loading
      show={showLoading}
      message={loadingMessage}></Loading>
    </div>
  );
}

export default App;
