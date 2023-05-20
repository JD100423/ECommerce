import { productoServices } from "../servicios/product-servicios.js";
import { formatPrice } from "../formt-price.js";

const containerAvion = document.querySelector("[data-avion]");
const containerJets = document.querySelector("[data-jets]");
const containerJetsMilitares = document.querySelector("[data-jetsMilitares]");

const nuevoProducto = (nombre, precio, imageUrl, id, categoria) => {
    const card = document.createElement("div");
    const contenido = `
    <div class="producto">
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name">${nombre}</h1>
        <p class="precio">${formatPrice(precio)}</p>
        <a class="ver-producto" href="../screens/producto.html?id=${id}">Ver Producto</a>
    </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

productoServices.listaProductos()
    .then(async respuesta => {
        try {
            await respuesta.forEach(({ nombre, precio, categoria, imageUrl, id }) => {
                const nuevaLinea = nuevoProducto(nombre, precio, imageUrl, id, categoria);

                switch (categoria) {
                    case "Avion":
                        containerAvion.appendChild(nuevaLinea);
                        break;

                    case "Jets":
                        containerJets.appendChild(nuevaLinea);
                        break;

                    case "Jets Militares":
                        containerJetsMilitares.appendChild(nuevaLinea);
                        break;

                    default:
                        categoria = "";
                        break;
                }
            });
        } catch (error) {
            console.log(error);
        }
    });
