export interface BuscarJugadorPayload {
  match_id: number;
  categories: string;
  elo_range: [number, number];
  age_range: [number, number];
  gender_preference: string;
  required_players: number;
  location: {
    lat: number;
    lon: number;
  };
  match_time: string;
  required_time: number;
  preferred_position: string;
}

export const buscarJugadores = async (payload: BuscarJugadorPayload) => {
  const url = "http://localhost:8000/api/matchmaking/find_candidates";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error buscando jugador:", error);
    throw error;
  }
};

