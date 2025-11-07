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
    <div className="App w-full h-screen bg-app-background p-4">
      <Nav></Nav>
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
