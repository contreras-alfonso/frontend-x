import React from 'react'
import { useState } from 'react'
import Publicacion from '../components/Publicacion';

const Home = () => {
    const [contadorTexto,setContadorTexto] = useState(0);
    const [texto,setTexto] = useState('');
    const asignarTextoYContador = (caracteres) => {
        const cantidadCaracteres = caracteres.length
        if(cantidadCaracteres<=256){
            setContadorTexto(cantidadCaracteres);
            setTexto(caracteres)
        }
    }
  return (
    <div className='bg-white p-3 md:w-1/2 mx-auto'>
        <div className=' border border-slate-200 p-5'>
            <div className='flex justify-end mx-10'>
                <p className='text-slate-400'>{contadorTexto}/256</p>
            </div>
            <div className='flex items-start p-3 gap-3'>
                <i className="fa-solid fa-user text-white bg-black rounded-full p-3"></i>
                <textarea onChange={(e)=>{asignarTextoYContador(e.target.value)}} value={texto} className='focus:outline-none bg-white w-11/12 p-3' placeholder='¿Que quieres publicar hoy?' name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className='flex justify-end mx-5'>
                <button className='bg-black hover:bg-zinc-900 text-white rounded-2xl text-base py-1 px-4'>Publicar</button>
            </div>

        </div>

        <Publicacion></Publicacion>
    </div>
  )
}

export default Home