let nombre = "Fulano";
let apellido = "Mengano";
let sueldoActual = 20000;
let porcentajeAumento = 25;

let calculoAumento = sueldoActual * porcentajeAumento/100;

let nuevoSueldo = calculoAumento + sueldoActual;

console.log(`Hola, estimado/a ${nombre} ${apellido}.\nEn base a su sueldo actual: $${sueldoActual}.\nHa recibido un aumento del 25%: $${calculoAumento}.\ny su nuevo sueldo es de $${nuevoSueldo}.`);