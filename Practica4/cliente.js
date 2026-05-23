import { catalogo } from './cocina.js';

export const mostrarMenuDinamico = () => {
    console.log("\n--- MENÚ ---");
    catalogo.forEach(({ nombre, precio }) => {
        console.log(`• ${nombre} -> $${precio}`);
    });
};

export const mostrarPromociones = () => {
    console.log("\n--- PROMOCIONES DE HOY (10% descuento) ---");
    const enPromo = catalogo.filter(p => p.promocion);
    const promoConDescuento = enPromo.map(p => ({ ...p, precioFinal: p.precio * 0.9 }));

    promoConDescuento.forEach(({ nombre, precio, precioFinal }) => {
        console.log(`¡OFERTA! ${nombre}: Antes $${precio} | HOY: $${precioFinal.toFixed(2)}`);
    });
};

// Función que nos ayuda a  generar pausas asíncronas 
export const esperarTiempo = (ms) => new Promise(resolve => setTimeout(resolve, ms));
