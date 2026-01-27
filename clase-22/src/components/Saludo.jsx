// prop -> properties
const Saludo = ({ nombre, apellido }) => {
  return (
    <h1>Hola {nombre}, {apellido} desde app</h1>
  )
}

// export por defecto
// export default Saludo

// export nombrado
export { Saludo }