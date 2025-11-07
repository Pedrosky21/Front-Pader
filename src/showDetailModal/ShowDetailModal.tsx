import React from 'react'
import { Player } from '../types/Player'

interface ShowDetailModalProps{
  player:Player|null
  onClose:()=>void
}

const ShowDetailModal: React.FC<ShowDetailModalProps>=({player, onClose}) => {
  return (
    <div>
      {player &&(
        <div className='fixed left-0 top-0 bg-app-background bg-opacity-50 z-30 w-screen h-screen flex items-center justify-center'>
          <div className='w-80 text-white flex flex-col bg-app-boxes p-4 rounded-md self-center'>
            <header>
              <h3>Ver jugador</h3>
              <svg onClick={()=>onClose()}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </header>
            <article>
              <section>
                <h4>Razones</h4>
                <p>{player.reasons}</p>
              </section>
              <section>
                <h4>Explicación</h4>
                <p>{player.compatibilitySumary}</p>
              </section>
              <section>
                <h4>Invitación</h4>
                <p>{player.invitationMessage}</p>
              </section>
            </article>
          </div>
        </div>

      )}
    </div>
  )
}

export default ShowDetailModal
