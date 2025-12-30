// Saludar a una persona (acción) ✅

let nombre = "Gustavo"
// template string
// back stick
// string + evaluación js
let saludo = `¡Hola, ${nombre.toUpperCase()}!`
console.log(saludo)

let nombre2 = "Nicolas"
let saludo2 = `¡Hola, ${nombre2}!`
console.log(saludo2)

let nombre3 = "Lucas"
let saludo3 = `¡Hola, ${nombre3}!`
console.log(saludo3)

// declaración (pc aprende una acción)
// parametros
// ¿QUE NECESITO DENTRO DE LA FUNCIÓN?
const saludar = (nombre, momentoDelDia, hora = "sin hora") => {
  if (momentoDelDia === "mañana") {
    let saludoEnLaFuncion = `¡Hola, buen día, ${nombre} ${hora === "sin hora" ? "" : `, son las ${hora}hs!`}`
    console.log(saludoEnLaFuncion)
  } else if (momentoDelDia === "noche") {
    let saludoEnLaFuncion = `¡Hola, buenas noches, ${nombre}, ${hora === "sin hora" ? "" : `son las ${hora}hs!`}`
    console.log(saludoEnLaFuncion)
  } else if (momentoDelDia === undefined) {
    console.log(`Hola ${nombre}, recien te levantas? O que momento del día es?, ${hora === "sin hora" ? "" : `son las ${hora}hs`} 😋`)
  } else {
    console.log("Hola :)")
  }
}

// invocación (ejecutar la función)
// argumentos
// VALORES PARA LOS PARAMETROS

saludar("Luis", "noche", 17)
saludar("Maite", "mañana", new Date().getHours())
saludar("Cami", "noche", 21)
saludar("Gus")

const pagar = (producto) => {
  const tiempo = new Date()
  if (!producto) {
    console.log("Debes comprar un producto antes de pagar")
  } else {
    console.log(`Compraste el ${producto} a las ${tiempo.getHours()}:${tiempo.getMinutes()}hs`)
  }
}

pagar("celular")
pagar()

// hoisting !== hosting

function funcionNombrada() { }

// arrow function
// función flecha
const sumar = () => { }
