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
    <div>
      <h2 className="text-xl">Buscar jugadores</h2>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        rows={15}
        cols={50}
        style={{ fontFamily: "monospace" }}
      />
      <br />
      <button onClick={buscarJugador}>Buscar</button>
    </div>
  );
};

export default BuscarJugadores;
