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

export{
    crearPublicacion,
    obtenerPublicacionesUsuario,
}