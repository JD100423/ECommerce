const listaProductos = () => 
    fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json()).catch((error) => console.log(error));
    

    const listarUnProducto = (id) => {
        return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => {
            return respuesta.json();
        });
    };

    const creaProductos = (nombre, imageUrl, precio, description, categoria) => {
        return fetch(`http://localhost:3000/producto`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                imageUrl,
                precio,
                description,
                categoria,
            }),
        }).then((respuesta) => {
            if(respuesta.ok) {
                return respuesta.body;
            }
            throw new Error("No fue posible crear un nuevo producto")
        });
    };

    const alterarProducto = async (id, nombre, precio, description, categoria) => {
        return fetch(`http://localhost:3000/producto/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio,
                description,
                categoria,
            }),
        })
        .then((respuesta) => {
            return respuesta.json();
        })
        .catch((error) => console.log(error))
    }

    const eliminarUnProducto = async (id) => {
        return await fetch(`http://localhost:3000/producto/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };


    export const productoServices = {
        listaProductos,
        listarUnProducto,
        creaProductos,
        alterarProducto,
        eliminarUnProducto,
    }