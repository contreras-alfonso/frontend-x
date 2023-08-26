const backendRuta = import.meta.env.VITE_BACKEND_URL
const headers = {
    'Content-Type': 'application/json',
}

const registrarUsuario = async (usuario) => {
    const url = `${backendRuta}/usuarios/registrar`;
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(usuario),
        headers,
    })
    return await response.json();
    
}

const recuperarCuenta = async (objUser) => {
    const url = `${backendRuta}/usuarios/recuperar-cuenta`;
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(objUser),
        headers,
    })
    return await response.json();
}

const confirmarUsuario = async (token) => {
    const url = `${backendRuta}/usuarios/confirmar-cuenta/${token}`;
    const response = await fetch(url,{
        method:'GET',
        headers,
    })
    return await response.json()
}

const confirmarTokenCambiarPassword = async (token) => {
    const url = `${backendRuta}/usuarios/actualizar-password/${token}`;
    const response = await fetch(url,{
        method:'GET',
        headers,
    })
    return await response.json()
}

const cambiarPasswordPorOlvido = async (objUser,token) => {
    const url = `${backendRuta}/usuarios/actualizar-password/${token}`;
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(objUser),
        headers,
    })
    return await response.json()
}

const iniciarSesion = async (objUser) => {
    const url = `${backendRuta}/usuarios/iniciar-sesion`;
    const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify(objUser),
        headers,
    })
    return await response.json()
}

const verificarSesionValida = async () => {
    const url = `${backendRuta}/usuarios/perfil`;
    const token = localStorage.getItem('token')
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+token,
        }
    })
    return await response.json()
}

const activarServer = async () => {
    const url = `${backendRuta}/`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    return await response.json()
}

export{
    registrarUsuario,
    recuperarCuenta,
    confirmarUsuario,
    confirmarTokenCambiarPassword,
    cambiarPasswordPorOlvido,
    iniciarSesion,
    verificarSesionValida,
    activarServer,
}