function mostrarMenu() {
    console.log("--- MENÚ DEL DÍA ---");
    catalogo.forEach(producto => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    });
    console.log("-----------------------");
}
