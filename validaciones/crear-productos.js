import { productoServices } from "../servicios/product-servicios.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const url = document.querySelector("[data-url]").value;
    const precio = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-description]").value;
    const categoria = document.querySelector("[data-categoria]").value;

    productoServices.creaProductos(nombre, url, precio, description, categoria).then((respuesta) => {
        window.location.href = "../index.html";
        console.log(respuesta);
    })
    .catch((err) => {
        console.log(err)
    });
});