export const catalogo = [
    { id: 1, nombre: "Pizza", precio: 150, categoria: "comida", promocion: false },
    { id: 2, nombre: "Hamburguesa Clásica", precio: 120, categoria: "comida", promocion: true },
    { id: 3, nombre: "Ensalada César", precio: 95, categoria: "comida", promocion: false },
    { id: 4, nombre: "Refresco 500ml", precio: 35, categoria: "bebida", promocion: false },
    { id: 5, nombre: "Agua de Sabor", precio: 25, categoria: "bebida", promocion: true },
    { id: 6, nombre: "Pastel de Chocolate", precio: 80, categoria: "postre", promocion: false },
    { id: 7, nombre: "Helado de Vainilla", precio: 45, categoria: "postre", promocion: true }
];

export const obtenerPorCategoria = (cat) => catalogo.filter(p => p.categoria === cat);
export const obtenerProductosBaratos = () => catalogo.filter(p => p.precio < 50);
export const obtenerProductosCaros = () => catalogo.filter(p => p.precio >= 100);
export const buscarProductoPorId = (id) => catalogo.find(p => p.id === id);

const bancoDeErrores = {
    comida: [
        "Se quemó en el horno/parrilla",
        "Nos quedamos sin gas en la estufa",
        "El chef se equivocó de receta y hay que repetir"
    ],
    bebida: [
        "Se descompuso la máquina de espresso",
        "Se derramó el líquido al intentar servirlo",
        "Nos quedamos sin vasos limpios de ese tamaño",
        "La leche se cortó o los hielos se derritieron"
    ],
    postre: [
        "El refrigerador falló y perdió consistencia",
        "Se nos acabaron las decoraciones y el glaseado",
        "El repostero dejó caer la bandeja"
    ],
    general: [
        "Hubo un apagón eléctrico temporal en el local",
        "El sistema de comandas falló y perdimos la orden",
        "Salubridad acaba de entrar a hacer una inspección sorpresa"
    ]
};

// Aquí simulamos la preparación asíncrona usando promesas 
export const prepararEnCocina = (producto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probabilidadFallo = Math.random();
            
            if (probabilidadFallo < 0.25) { 
                
                const esErrorGeneral = Math.random() < 0.2;
                let listaPosiblesErrores = [];

                if (esErrorGeneral) {
                    listaPosiblesErrores = bancoDeErrores.general;
                } else {
                    listaPosiblesErrores = bancoDeErrores[producto.categoria];
                }

                const indiceAleatorio = Math.floor(Math.random() * listaPosiblesErrores.length);
                const motivoError = listaPosiblesErrores[indiceAleatorio];

                reject(new Error(`Problema con ${producto.nombre}: ${motivoError}`));
                
            } else {
                resolve(producto);
            }
        }, 2000); 
    });
};




