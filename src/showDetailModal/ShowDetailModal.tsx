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
        <div
        onClick={()=>onClose()}
         className='fixed left-0 top-0 bg-app-background bg-opacity-50 z-30 w-screen h-screen flex items-center justify-center'>
          <div className='w-80 text-white flex flex-col bg-app-boxes p-4 rounded-md self-center'>
            <header className='flex flex-row w-full gap-5 align-center'>
              <h3 className='text-2xl text-center'>Ver jugador</h3>
              <svg onClick={()=>onClose()}
              xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg rigth-0 cursor-pointer" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </header>
            <article className='flex flex-col gap-4'>
              <section className='flex flex-col gap-2'>
                <h4 className='text-xl font-medium'>Razones</h4>
                <p>{player.reasons}</p>
              </section>
              <section className='flex flex-col gap-2'>
                <h4 className='text-xl font-medium'>Explicación</h4>
                <p>{player.compatibilitySumary}</p>
              </section>
              <section className='flex flex-col gap-2'>
                <h4 className='text-xl font-medium'>Invitación</h4>
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
