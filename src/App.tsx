import React, { useState } from "react";
import "./App.css";
import BuscarJugadores from "./searchPlayers/BuscarJugadores";
import Nav from "./nav/Nav";
import ShowPlayers from "./showPlayers/ShowPlayers";
import { Player } from "./types/Player";
import ShowDetailModal from "./showDetailModal/ShowDetailModal";
import { buscarJugadores } from "./services/players.service";
import { Loading } from "./loadingScreen/LoadingScreen";
import toast, { Toaster } from "react-hot-toast";


function App() {
  const [players, setPlayers] = useState<Player[]>([]);
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
    console.log(json);
    try {
      setLoadingMessage("Buscando jugadores...");
      setShowLoading(true);
      const payload = JSON.parse(json); // Convertir string JSON a objeto
      const data = await buscarJugadores(payload); // POST al backend
      console.log(data.candidates);
      setPlayers(data.candidates.map((jugador: any) => new Player(jugador.metadata))); // Actualizar lista de jugadores con la respuesta
      setShowLoading(false);
    } catch (error) {
      alert("JSON inválido o error buscando jugadores");
      console.error(error);
    }
  };

  const onCardClick = (index: number) => {
    setSelectedPlayer(players[index]);
  };
  const onModalClose = () => {
    setSelectedPlayer(null);
  };

  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const sendNotifications = () => {
    setLoadingMessage("Enviando notificaciones...");
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      // toast.success("Notificaciones enviadas");
      toast.custom((t) => (
        <div
          className={`flex space-x-2 h-20 items-center bg-app-gray outline outline-white shadow-lg rounded-xl py-2 px-6 ${
            t.visible ? "animate-custom-enter" : "animate-custom-leave"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>

          <p className="text-white">
            Notificaciones enviadas
          </p>
        </div>
      ));
    }, 3000);
  };
  return (
    <div className="App w-full h-screen flex flex-col bg-app-background">
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
      <Loading show={showLoading} message={loadingMessage}></Loading>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
