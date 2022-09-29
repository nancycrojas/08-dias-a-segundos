//Días a segundos

//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

const dias = Number(prompt("Por favor ingresa la cantidad de días"));
//alert("Conversión en segundos: " + dias * 24 * 60 * 60 + " segundos");

//Template strings
alert(`Conversión en segundos: ${dias * 24 * 60 * 60} segundos.`)