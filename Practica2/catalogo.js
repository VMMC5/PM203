const catalogo = [
  {
    id: 1,
    nombre:    "Capuchino",
    precio:    59,
    tamanio:   "Grande",
    categoria: "Bebida",
    tipo:      "Café caliente",
  },
  {
    id: 2,
    nombre:    "Latte",
    precio:    55,
    tamanio:   "Mediano",
    categoria: "Bebida",
    tipo:      "Café caliente",
  },
  {
    id: 3,
    nombre:    "Frappé caramelo",
    precio:    75,
    tamanio:   "Grande",
    categoria: "Bebida",
    tipo:      "Café frío",
  },
    {
    id: 4,
    nombre:    "Pan de muerto",
    precio:    35,
    tamanio:   "Único",
    categoria: "Comida",
    tipo:      "Pan",
  },


  {
    id: 5,
    nombre:    "Muffin de chocolate",
    precio:    40,
    tamanio:   "Único",
    categoria: "Comida",
    tipo:      "Pastelería",
  },

    {
    nombre:    "Cuernito",
    precio:    35,
    tamanio:   "Único",
    categoria: "Comida",
    tipo:      "Pan",
  },
]
 
console.log(catalogo[0].nombre)
console.log(catalogo[0].precio)
 
catalogo[0].precio = 65
catalogo[0].nombre = "Capuchino normal"
 
catalogo.push({
  nombre:    "Agua",
  precio:    20,
  tamanio:   "Chico",
  categoria: "Bebida",
  tipo:      "Agua",
})
 
catalogo.forEach(producto => {
  console.log(`${producto.nombre} - $${producto.precio}`)
})


const bebidas = catalogo.filter(producto => producto.categoria === "Bebida")
console.log(bebidas)
 
const comidas = catalogo.filter(producto => producto.categoria === "Comida")
console.log(comidas)