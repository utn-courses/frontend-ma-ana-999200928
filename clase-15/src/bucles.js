// Un ciclo/bucle permite repetir una acción varias veces mientras se cumpla una condición

// let, const, function, if, for

// blucle controlado
// for (inicio; condición; inclemento/decremento) { }

// Contar del 1 al 10
// for -> bucle
// let i = 0 -> varible que lleva la cuenta del index
// i < 10 -> determinará cuando se detiene el bucle
// i = i + 1 -> modifica el index

for (let indice = 1; indice <= 10; indice = indice + 1) {
  // console.log(`Voy por la vuelta ${indice}.`)
}

// Crear un programa que muestre la tabla de multiplicar de un número X

// DECLARACIÓN
// parametros
const crearTablaMultiplicar = (numero) => {
  // Es correcto que no hay número?
  if (!numero) {
    console.log("Debes ingresar un número.")
    return
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} es igual a: ${i * numero}.`)
  }

  console.log("-----------")
}

// INVOCACIÓN
// argumento
crearTablaMultiplicar(9)
crearTablaMultiplicar(7)
crearTablaMultiplicar(1)

const carrito = [
  {
    nombre: "pc",
    precio: 1000
  },
  {
    nombre: "celular",
    precio: 2000
  },
  {
    nombre: "mesa",
    precio: 500
  }
]

for (let i = 0; i < carrito.length; i++) {
  console.log(`El producto n° ${i + 1} es: ${carrito[i].nombre} y cuesta $${carrito[i].precio}`)
}

// El producto n° 1 es el "nombre del prod" y cuesta "$".