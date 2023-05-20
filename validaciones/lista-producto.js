import { productoServices } from "../servicios/product-servicios.js";
import { formatPrice } from "../formt-price.js";

const getProducto = (nombre, precio, imageUrl, id) => {
    const card = document.createElement("div");
    card.classList.add("producto");
    const contenido = `
        <div class="container">
            <button class="buttonDelete" type="button">
                <img class="deleteImage" src="../asset/img/delete.png" alt="Eliminar">
            </button>
            <a href="../screens/edit-producto.html?id=${id}">
                <button class="buttonEdit" type="button">
                    <img class="editImage" src="../asset/img/edit.png" alt="Editar">
                </button>
            </a>
        </div>
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name">${nombre}</h1>
        <p class="precio">${formatPrice(precio)}</p>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
};

const productos = document.querySelector("[data-allProducts]");
productos.addEventListener("click", async (evento) => {
    const deleteButton = evento.target.className === "deleteImage";
    if (deleteButton) {
        const producto = evento.target.closest("[data-id]");
        const id = producto.dataset.id;
        productoServices.eliminarUnProducto(id).then((res) => {
            producto.remove();
            console.log(res);
        })
        .catch((err) => console.log(err))
    }
});

const render = async () => {
    try {
        const listaProducto = await productoServices.listaProductos();
        listaProducto.slice(0,18).forEach((producto) => { 
            productos.appendChild(getProducto(producto.nombre, producto.precio, producto.imageUrl, producto.id));
        });
    } catch (err) {
        console.log(err);
    }
};

render();
