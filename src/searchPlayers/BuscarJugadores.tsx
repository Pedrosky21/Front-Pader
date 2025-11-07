import React, { useState } from "react";

interface BuscarJugadoresProps {
  onJsonSend: (json: string) => void;
}

const BuscarJugadores: React.FC<BuscarJugadoresProps> = ({ onJsonSend }) => {
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify({
    match_id: 23,
    categories: "NINTH",
    elo_range: [1000, 1500],
    age_range: [25, 50],
    gender_preference: "Male",
    required_players: 3,
    location: {
        lat: 10,
        lon: 10
    },
    match_time: "10:00",
    required_time: 90,
    preferred_position: "FOREHAND"
  }, null, 2)); // Formateado con indentación

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
  };

  const handleClick = () => {
    onJsonSend(jsonInput);
  };



  return (
    <div className="w-80 h-auto text-white flex flex-col bg-app-boxes p-4 rounded-md">
      <h2 className="text-2xl font-semibold">Buscar jugadores</h2>
      <p className="text-app-text my-2">Ingrese los datos de su jugador ideal</p>
      <textarea
        className="mt-2 bg-app-gray py-2 resize-none w-full flex-1 leading-none"
        value={jsonInput}
        onChange={handleChange}
        rows={21}
        cols={50}
        style={{ fontFamily: "monospace" }}
      />
      <br />
      <div className="flex justify-center w-full">
        <button className="bg-app-button py-1 px-8 font-bold" onClick={e => handleClick}>Buscar</button>
      </div>
    </div>
  );
};

export default BuscarJugadores;
