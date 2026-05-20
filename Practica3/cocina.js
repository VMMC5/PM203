export const catalogo = [
    { id: 1, nombre: "Pizza", precio: 150, categoria: "comida", promocion: false },
    { id: 2, nombre: "Hamburguesa Clásica", precio: 120, categoria: "comida", promocion: true },
    { id: 3, nombre: "Ensalada César", precio: 95, categoria: "comida", promocion: false },
    { id: 4, nombre: "Refresco 500ml", precio: 35, categoria: "bebida", promocion: false },
    { id: 5, nombre: "Agua de Sabor", precio: 25, categoria: "bebida", promocion: true },
    { id: 6, nombre: "Pastel de Chocolate", precio: 80, categoria: "postre", promocion: false },
    { id: 7, nombre: "Helado de Vainilla", precio: 45, categoria: "postre", promocion: true }
];

// Buscar productos usando filter() y find()
export const obtenerPorCategoria = (cat) => catalogo.filter(p => p.categoria === cat);
export const obtenerProductosBaratos = () => catalogo.filter(p => p.precio < 50);
export const obtenerProductosCaros = () => catalogo.filter(p => p.precio >= 100);
export const buscarProductoPorId = (id) => catalogo.find(p => p.id === id);