import { buscarProductoPorId, prepararEnCocina } from './cocina.js';

export let listaPedidos = [];

export const limpiarCarrito = () => {
    listaPedidos = [];
};

export const agregarPedido = (idProducto) => {
    const producto = buscarProductoPorId(idProducto);
    if (producto) {
        listaPedidos.push(producto);
        console.log(`Agregado al carrito: ${producto.nombre}`);
        return true; 
    } else {
        alert("Error: Ese ID de producto no existe en el catálogo.");
        return false;
    }
};

export const calcularCuentaAutomatica = () => {
    const subtotal = listaPedidos.reduce((acumulador, producto) => {
        const precioAplicado = producto.promocion ? producto.precio * 0.9 : producto.precio;
        return acumulador + precioAplicado;
    }, 0);

    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    return { subtotal, iva, total };
};

export const imprimirTicket = (nombreCliente) => {
    const { subtotal, iva, total } = calcularCuentaAutomatica();
    
    let textoTicket = `\n============== TICKET: ${nombreCliente.toUpperCase()} ==============\n`;
    textoTicket += `Artículos adquiridos:\n`;
    
    listaPedidos.forEach(({ nombre, precio, promocion }) => {
        if (promocion) {
        
            textoTicket += ` - ${nombre}: $${(precio * 0.9).toFixed(2)} (¡Promo 10% desc.!)\n`;
        } else {
            textoTicket += ` - ${nombre}: $${precio}\n`;
        }
    });
    
    textoTicket += `-----------------------------------------\n`;
    textoTicket += `Subtotal (con promos): $${subtotal.toFixed(2)}\n`;
    textoTicket += `IVA (16%):             $${iva.toFixed(2)}\n`;
    textoTicket += `TOTAL NETO A PAGAR:    $${total.toFixed(2)}\n`;
    textoTicket += `=========================================`;

    return textoTicket; 
};

// Con esta función hacemos el procesamiento asíncrono con callbacks
export const procesarOrdenAsincrona = (callbackExito, callbackError) => {
    if (listaPedidos.length === 0) {
        return callbackError(new Error("No hay productos en el pedido."));
    }

    // Convertimos cada pedido en una promesa de preparacion
    const promesasDeCocina = listaPedidos.map(producto => prepararEnCocina(producto));

    // Esperamos a que TODAS las promesas se cumplan si una sola falla, TODO se cancela 
    Promise.all(promesasDeCocina)
        .then(() => {
            callbackExito(); 
        })
        .catch((error) => {
            callbackError(error);
        });
};
