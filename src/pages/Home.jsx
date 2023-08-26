import React from 'react'
import { useState, useEffect } from 'react'
import Publicacion from '../components/Publicacion';
import ModalMensaje from '../components/ModalMensaje';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { verificarSesionValida } from "../api/usuarios/usuarios";
import { crearPublicacion, obtenerPublicacionesUsuario } from '../api/publicaciones/publicaciones';

const Home = () => {
    const [publicaciones,setPublicaciones] = useState([]);
    const [contadorTexto,setContadorTexto] = useState(0);
    const [texto,setTexto] = useState('');
    const [modalMensaje,setModalMensaje] = useState(false);
    const [alerta,setAlerta] = useState('');
    const [user,setUser] = useState({});
    const [spinner,setSpinner] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{

        const obtenerDatosSesion = async () => { 
            setSpinner(true);
            const data = await verificarSesionValida();
            setSpinner(false);
            
            if(data?._id){
               return setUser(data);
            }else{
                navigate('/')
            }

        }
        obtenerDatosSesion();

    },[])

    useEffect(()=>{
        const obtenerPublicacionesDeUsuario = async ()=>{
            const data = await obtenerPublicacionesUsuario();
            setPublicaciones(data)
        }

        if(user?._id){
            obtenerPublicacionesDeUsuario();
        }

    },[user])

    const asignarTextoYContador = (caracteres) => {
        const cantidadCaracteres = caracteres.length
        if(cantidadCaracteres<=256){
            setContadorTexto(cantidadCaracteres);
            setTexto(caracteres)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(texto.length<=0){
            setAlerta('Primero debes escribir algo.');
            return setModalMensaje(true);
        }
        const data = await crearPublicacion({texto});
        if(!data.status){
            setAlerta(data.msg);
            return setModalMensaje(true);
        }
        //agregar al state la publicación creada
        const copiaPublicaciones = [...publicaciones];
        copiaPublicaciones.push(data.data);
        setPublicaciones(copiaPublicaciones);
        setTexto('');
        setContadorTexto(0);

    }

    if(spinner){
        return (<Spinner/>)
    }


  return (
    <>
        <div className='bg-white p-3 md:w-1/2 mx-auto'>
            <form onSubmit={handleSubmit}>
            <div className=' border border-slate-200 p-5'>
                <div className='flex justify-end mx-10'>
                    <p className='text-slate-400'>{contadorTexto}/256</p>
                </div>
                <div className='flex items-start p-3 gap-3'>
                    <i className="fa-solid fa-user text-white bg-black rounded-full p-3"></i>
                    <textarea onChange={(e)=>{asignarTextoYContador(e.target.value)}} value={texto} className='focus:outline-none bg-white w-11/12 p-3' placeholder='¿Que quieres publicar hoy?' name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className='flex justify-end mx-5'>
                    <button type='submit' className='bg-black hover:bg-zinc-900 text-white rounded-2xl text-base py-1 px-7'>Publicar</button>
                </div>

            </div>
            </form>
            {publicaciones.map(e=>(
                <Publicacion key={e._id} publicacion={e}></Publicacion>
            ))}
        </div>
        <ModalMensaje alerta={alerta} setModalMensaje={setModalMensaje} modalMensaje={modalMensaje}></ModalMensaje>
    </>
  )
}

export default Home