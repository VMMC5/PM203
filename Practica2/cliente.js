const cliente = {
  nombre: "Carlos",

  ordenar(producto) {
    console.log(cliente.nombre + " quiere ordenar: " + producto.nombre);
    return producto;
  },

  pagar(total) {
    console.log(cliente.nombre + " paga: $" + total);
  },

  recibirComida(producto) {
    console.log(cliente.nombre + " recibe: " + producto.nombre);
  }
};