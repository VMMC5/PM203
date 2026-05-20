import { catalogo } from './cocina.js';

// Mostrar menú dinámico, promociones y productos disponibles
export const mostrarMenuDinamico = () => {
    console.log("\n--- MENÚ ---");
    catalogo.forEach(({ nombre, precio }) => {
        console.log(`• ${nombre} -> $${precio}`);
    });
};

export const mostrarPromociones = () => {
    console.log("\n--- PROMOCIONES DE HOY (10% descuento) ---");
    const enPromo = catalogo.filter(p => p.promocion);
    
    // map() para transformar y calcular descuento
    const promoConDescuento = enPromo.map(p => ({ ...p, precioFinal: p.precio * 0.9 }));

    promoConDescuento.forEach(({ nombre, precio, precioFinal }) => {
        console.log(`¡OFERTA! ${nombre}: Antes $${precio} | HOY: $${precioFinal.toFixed(2)}`);
    });
};