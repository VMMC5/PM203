const nombreCafeteria = "Cafeteria JS";
let totalAcumulado = 0;
const pedidos = [];

function agregarPedido(producto) {
  pedidos.push(producto.nombre);
  totalAcumulado += producto.precio;
  console.log(producto.nombre + " agregado - $" + producto.precio);
}

function mostrarResumen() {
  console.log("Pedidos: " + pedidos.join(", "));
  console.log("Total: $" + totalAcumulado);
}

console.log("Bienvenido a " + nombreCafeteria);

const orden1 = cliente.ordenar(catalogo[0]);
const orden2 = cliente.ordenar(catalogo[4]);

agregarPedido(orden1);
agregarPedido(orden2);

mostrarResumen();

cliente.pagar(totalAcumulado);
cliente.recibirComida(orden1);
cliente.recibirComida(orden2);