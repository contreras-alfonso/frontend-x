import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import usePublicaciones from '../hooks/usePublicaciones';
import useHelper from '../hooks/useHelper';
import { editarPublicacionUsuario } from '../api/publicaciones/publicaciones';

export default function ModalEditarPublicacion() {

    const {modalEditarPublicacion,setModalEditarPublicacion,modalMensaje,setModalMensaje,setAlerta,alerta} = useHelper();
    const {publicaciones,setPublicaciones} = usePublicaciones();

    const {publicacionEdit,setPublicacionEdit} = usePublicaciones();
    const [contenido,setContenido] = useState('');
    const [contadorTexto,setContadorTexto] = useState('');

    const asignarTextoYContador = (caracteres) => {
        const cantidadCaracteres = caracteres.length
        if(cantidadCaracteres<=256){
            setContadorTexto(cantidadCaracteres);
            setContenido(caracteres)
        }
    }

    const handleEditarPublicacion = async () => {

      if(!contenido){
        setModalMensaje(true);
        return setAlerta('Primero debes escribir algo.');
      }
        const data = await editarPublicacionUsuario({contenido,id:publicacionEdit._id});

        if(data.status){
            setModalEditarPublicacion(false);
            setModalMensaje(true);
            setAlerta(data.msg);
            let copiaPublicaciones = [...publicaciones];
            copiaPublicaciones = publicaciones.map(e=>e._id === data.data._id ? data.data : e);
            setPublicaciones(copiaPublicaciones);

        }else{
            setModalEditarPublicacion(false);
            setModalMensaje(true);
            setAlerta(data.msg);
        }

    }

    const cerrarModalEditarPublicacion = () => {
      setModalEditarPublicacion(false);
      setPublicacionEdit({});
     
    }

    useEffect(()=>{
        if(publicacionEdit?._id){
            setContadorTexto(publicacionEdit?.contenido.length);
            setContenido(publicacionEdit?.contenido);
        }
    },[publicacionEdit])

  return (
    <>

      <Transition appear show={modalEditarPublicacion} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>{}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-md:w-11/12 md:w-1/2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-black leading-6 text-gray-900"
                  >
                   <i className="fa-solid fa-money-check-pen"></i> Editar Publicación
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className='text-slate-400 text-end'>{contadorTexto}/256</p>
                    <textarea onChange={(e)=>{asignarTextoYContador(e.target.value)}} value={contenido} className='resize-none focus:outline-none bg-white w-11/12 p-3' placeholder='¿Que quieres publicar hoy?' name="" id="" cols="30" rows="5"></textarea>
                  </div>

                  <div className="mt-4 flex items-end justify-end gap-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=>{handleEditarPublicacion()}}
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 "
                      onClick={cerrarModalEditarPublicacion}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
