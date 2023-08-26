import React from 'react'

const Publicacion = ({publicacion}) => {

    console.log(publicacion)
    const { favorito,contenido,creador } = publicacion;

  return (
        <div className=' border border-t-0 border-slate-200 p-5'>
            <div className='flex items-start gap-4'>
                <i className="fa-solid fa-user text-white bg-black rounded-full p-3"></i>
                <div>
                    <p>{creador.nombre}</p>
                    <p className='text-slate-500'>{creador.email}</p>
                </div>
            </div>

            <p className='py-3'>{contenido}</p>

            <div className='flex gap-2'>
                <i className="fa-regular fa-comment cursor-pointer "></i>
                <i className={`fa-regular fa-heart cursor-pointer ${favorito ? 'text-pink-500' : ''}`}></i>
                <i className="fa-regular fa-retweet cursor-pointer"></i>
            </div>

        </div>
  )
}

export default Publicacion