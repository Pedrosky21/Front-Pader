import React, { useState } from 'react'

import { Player } from '../types/Player';

interface ShowPlayersProps {
  players: Player[],
  onPlayerCheck: (id:number)=>void
  onCardClick:(index:number)=>void
}
const ShowPlayers: React.FC<ShowPlayersProps> = ({players,onPlayerCheck,onCardClick}) => {
  return (
    <div className="w-80 text-white flex flex-col bg-app-boxes p-4 rounded-md">
      <h2 className="text-3xl">Buscar jugadores</h2>
      <article className='flex flex-col gap-3 overflow-y-auto items-start h-[80%]'>
        {players.map((player, index) => (
          <section 
          onClick={()=>onCardClick(index)}
          key={index} className='flex flex-col w-full bg-app-gray rounded-lg p-2 gap-2'>
            <div className='flex  flex-row justify-between'>
              <div className='flex flex-row gap-1 max-w-fit items-cente'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
                <p className='text-xl text-app-text'>{player.fullName}</p>
              </div>
              <div>
                <input type='checkbox' onClick={()=>onPlayerCheck(index)}></input>
              </div>
            </div>
            <div className='flex flex-row gap-1 max-w-fit items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trophy" viewBox="0 0 16 16">
                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
              </svg>
              <p className='text-app-text'>Elo: {player.elo}</p>
            </div>
            <div className='flex flex-row gap-1 max-w-fit items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
              </svg>
              <p className='text-app-text'>Distancia: {player.distanceKm}</p>
            </div>
          </section>
        ))}
      </article>
      <footer className='self-end h-10 item-center justify-center w-full'>
        <button className='bg-app-button py-1 px-8 font-bold'>Enviar Notificación</button>
      </footer>
      
    </div>
  )
}

export default ShowPlayers
