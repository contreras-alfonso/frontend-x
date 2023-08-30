const validarEmail = (email) => {
    const expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    return expresion.test(email);
}

const convertirMilisegundos = (milisegundos) => {

    let totalSegundos = Math.floor(Number(milisegundos) / 1000);
    let horas = Math.floor(totalSegundos / 3600);
    let minutos = Math.floor((totalSegundos % 3600) / 60);

    // Asegurarse de que los valores tengan dos dígitos
    let horasStr = horas < 10 ? '0' + horas : '' + horas;
    let minutosStr = minutos < 10 ? '0' + minutos : '' + minutos;

    return horasStr + ':' + minutosStr;
    
}

const formatearFecha = (fecha)=>{

    const nuevaFecha = (fecha.split('T')[1].split(':',2));
    return nuevaFecha[0]+':'+nuevaFecha[1]
}

export {
    validarEmail,
    convertirMilisegundos,
    formatearFecha,
}