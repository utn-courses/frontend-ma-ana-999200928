// estructura de control

let clima = "fresco"
let hora = 13
let tenesProtector = true
let mensaje
console.log(mensaje, "<- valor de mensaje al comienzo")

// if (clima === "caluroso" && tenesProtector && (hora > 16 || hora < 10)) {
//   console.log("Poder ir a la pile 🥽")
// } else if ((hora > 10 || hora < 16) && hora !== 13) {
//   console.log("Espera que baje el sol 🌝")
// } else {
//   console.log("No podes meterte, es el mediodia 🥵")
// }

clima === "caluroso"
  ? mensaje = "Anda a la pile"
  : mensaje = "Esta fresco no te metas"

console.log(mensaje, "<- valor de mensaje luego de la reasignación")