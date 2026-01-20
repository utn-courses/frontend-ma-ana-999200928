const alumnos = [
  { nombre: "Juan", edad: 20, carrera: "Ingeniería" },
  { nombre: "María", edad: 22, carrera: "Medicina" },
  { nombre: "Luis", edad: 21, carrera: "Derecho" }
]

const alumnosJson = JSON.stringify(alumnos)
console.log(typeof alumnosJson)

const nuevoAlumno = {
  nombre: "Zoe",
  edad: 24,
  carrera: "Desarrollo web frontend"
}

console.log(nuevoAlumno)
// convertir a json
const nuevoAlumnoJson = JSON.stringify(nuevoAlumno)
console.log(nuevoAlumnoJson)

// java, javascript, go, php, phyton, C, C++
// un servidor es una pc que "sirve" data
const baseApi = "https://mibackendparaalumnos.com.ar/alumnos"
console.log(baseApi)

const traerPoderes = async () => {
  const respuesta = await fetch("https://wizard-world-api.herokuapp.com/spells", { method: "GET" })
  if (respuesta.ok) {
    // parsear
    const data = await respuesta.json()
    console.log(data)
  } else if (respuesta.status === 405) {
    console.log("Método no permitido.")
  } else {
    console.log("El recurso no se encuentra.")
  }
}

traerPoderes() 