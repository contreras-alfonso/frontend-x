const validarEmail = (email) => {
    const expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    return expresion.test(email);
}

export {
    validarEmail,
}