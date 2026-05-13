console.log("Hola Mundo js desde el servidor");

/* medir el tiempo de ejecución de un proceso */
console.time("miProceso");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("miProceso");

/* Obejtos tipo tabla */
let usuarios = [
  { nombre: "Victor", edad: 24 },
  { nombre: "Cynthia", edad: 25 },
];

console.table(usuarios);