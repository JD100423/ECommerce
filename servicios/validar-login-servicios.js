const usuario = async () => {
    return await fetch("http://localhost:3000/usuarios").then(respuesta => respuesta.json());
};

const agregarCliente = async (email, password) => {
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
}

export const validarUsuarios = {
    usuario,
    agregarCliente
};