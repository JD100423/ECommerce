import { productoServices } from "../servicios/product-servicios.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescription = document.querySelector("[data-description]");
const inputCategoria = document.querySelector("[data-categoria]")

productoServices.listarUnProducto(id).then((datos) => {
    inputImageUrl.setAttribute("src", datos.imageUrl);
    inputNombre.value = datos.nombre;
    inputPrecio.value = datos.precio;
    inputDescription.value = datos.description;
    inputCategoria.value = datos.categoria;
});

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    productoServices.alterarProducto (id, inputNombre.value, inputPrecio.value, inputDescription.value, inputCategoria.value).then(() => {
        window.location.href = "index.html";
    });
});