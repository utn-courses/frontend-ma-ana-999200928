
// prop -> propiedad
function Saludo({ nombre }) {
  return (
    <>
      <h1>Bienvenidos {nombre}, a React!</h1>
      <img src="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg" />
    </>
  )
}

// Export por defecto
// export default Saludo

// Export nombrado -> obligo a que se importe con el mismo nombre
export { Saludo }
