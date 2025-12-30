// hoisting
// elevar las funciones ANTES DE LA EJECUCIÓN arriba de todo 

saludar()
function saludar() {
  console.log("Saludo dentro de la función")
}
console.log("Saludo 1")
console.log("Saludo 2")
console.log("Saludo 3")