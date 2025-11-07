import React, { useState } from "react";

const BuscarJugadores: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify({
    match_id: 23,
    categories: "NINTH",
    elo_range: [1000, 1500],
    age_range: [25, 50],
    gender_preference: "Male"
  }, null, 2)); // Formateado con indentación

  const buscarJugador = () => {
    try {
      const data = JSON.parse(jsonInput);
      console.log(data);
      alert("Datos recopilados, revisa la consola");
    } catch (error) {
      alert("JSON inválido. Revisa la sintaxis.");
    }
  };

  return (
    <div className="w-80 text-white flex flex-col bg-app-boxes p-4 rounded-md">
      <h2 className="text-3xl">Buscar jugadores</h2>
      <p className="text-app-text">Ingrese los datos de su jugador ideal</p>
      <textarea
        className="mt-2 bg-app-gray py-2"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        rows={15}
        cols={50}
        style={{ fontFamily: "monospace" }}
      />
      <br />
      <div className="flex justify-center w-full">
        <button className="bg-app-button" onClick={buscarJugador}>Buscar</button>
      </div>
    </div>
  );
};

export default BuscarJugadores;
