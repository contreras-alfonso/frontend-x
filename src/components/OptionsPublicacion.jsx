import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { eliminarPublicacionUsuario } from '../api/publicaciones/publicaciones';
import usePublicaciones from '../hooks/usePublicaciones';
import ModalMensaje from './ModalMensaje';
import useHelper from '../hooks/useHelper';
import ModalEditarPublicacion from './ModalEditarPublicacion';


export default function OptionsPublicacion({publicacion}) {

  const {setPublicacionEdit} = usePublicaciones();
  const {_id} = publicacion;
  const {setModalMensaje,setAlerta,setModalEditarPublicacion} = useHelper();
  const {publicaciones,setPublicaciones} = usePublicaciones();

  const handleEliminarPublicacion = async (id) => {
    const data = await eliminarPublicacionUsuario({id});
    if(!data.status){
      setAlerta(data.msg);
      return setModalMensaje(true);
    }
   
      let copiaPublicaciones = [...publicaciones];
      copiaPublicaciones = copiaPublicaciones.filter(e=>e._id!==id);
      setPublicaciones(copiaPublicaciones);
      setAlerta(data.msg);
      setModalMensaje(true);
    
  }

  const handleEditarPublicacion = (id) => {
    setPublicacionEdit(publicacion);
    setModalEditarPublicacion(true);
  }

  return (
    <>

    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-2">
          <i className="fa-solid fa-ellipsis-vertical text-neutral-500 hover:text-black"></i>
   
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg border border-neutral-100 focus:outline-none">
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <button onClick={()=>{handleEditarPublicacion(_id)}}
                    className={` ${
                      active ? 'bg-black text-white' : ' text-black'
                    } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm `}
                  >

                    <i className="fa-sharp fa-solid fa-pen"></i>{' '}Editar
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button onClick={()=>{handleEliminarPublicacion(_id)}}
                    className={` ${
                      active ? 'bg-red-400 text-white' : ' text-black'
                    } group flex gap-3 w-full items-center rounded-md px-2 py-2 text-sm `}
                  >

                    <i className="fa-sharp fa-solid fa-eraser"></i>{' '}Eliminar
                  </button>
                )}
              </Menu.Item>
              
            </div>
           
        
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
                    
    </>
  )
}

