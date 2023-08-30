const backendRuta = import.meta.env.VITE_BACKEND_URL

const crearPublicacion = async (objPublicacion) => {
    const url = `${backendRuta}/publicaciones/nueva-publicacion`;
    const response = await fetch(url,{
        method:'POST',
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'Application/json',
        },
        body: JSON.stringify(objPublicacion),
    })
    return await response.json();
}

const obtenerPublicacionesUsuario = async () => {
    const url = `${backendRuta}/publicaciones/obtener-publicaciones`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'Application/json',
        },
    })
    const data = await response.json();
    return data;
}

const eliminarPublicacionUsuario = async (objPublicacion) => {
    const url = `${backendRuta}/publicaciones/eliminar-publicacion`;
    const response = await fetch(url,{
        method:'DELETE',
        body: JSON.stringify(objPublicacion),
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'Application/json',
        },
    })
    const data = await response.json();
    return data;
}

const editarPublicacionUsuario = async (objPublicacion) => {
    const url = `${backendRuta}/publicaciones/editar-publicacion`;
    const response = await fetch(url,{
        method:'PUT',
        body: JSON.stringify(objPublicacion),
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'Application/json',
        },
    })
    const data = await response.json();
    return data;
}

export{
    crearPublicacion,
    obtenerPublicacionesUsuario,
    eliminarPublicacionUsuario,
    editarPublicacionUsuario,
}