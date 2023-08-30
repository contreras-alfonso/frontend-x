import React from 'react'
import useAuth from '../hooks/useAuth';
import { convertirMilisegundos,formatearFecha } from '../helpers/helpers';
import OptionsPublicacion from './OptionsPublicacion';

const Publicacion = ({publicacion}) => {

    const {user} = useAuth();
    const {_id, favorito,contenido,creador,horaPublicada,createdAt } = publicacion;
  
   

  return (
        <div className=' border border-t-0 border-slate-200 p-5'>
            <div className='flex justify-between'>
                <div className='flex items-start gap-4'>
                    <i className="fa-solid fa-user text-white bg-black rounded-full p-3"></i>
                    <div>
                        <p className=''>{`${user.nombre}`} <span className='text-slate-500 text-sm'>{formatearFecha(createdAt)}</span></p>
                        <p className='text-slate-500'>{user.email}</p>
                    </div>
                </div>

                <OptionsPublicacion publicacion={publicacion}/>

            </div>

            <p className='resize-none py-4'>{contenido}</p>

            <div className='flex gap-2'>
                <i className="fa-regular fa-comment cursor-pointer "></i>
                <i className={`fa-regular fa-heart cursor-pointer ${favorito ? 'text-pink-500' : ''}`}></i>
                <i className="fa-regular fa-retweet cursor-pointer"></i>
            </div>

        </div>
  )
}

export default Publicacion