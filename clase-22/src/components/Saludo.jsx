// prop -> properties
const Saludo = ({ nombre, apellido }) => {
  return (
    <h1>Hola {nombre}, {apellido} desde app</h1>
  )
}

const SaludoEjercicio = ({ esMañana, nombre }) => {
  return (
    esMañana === true ? <p>Buenos días, {nombre}</p> : <p>Buenas tardes, {nombre}</p>
  )
}

// export por defecto
// export default Saludo

// export nombrado
export { Saludo, SaludoEjercicio }
















