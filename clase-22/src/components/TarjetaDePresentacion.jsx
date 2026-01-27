// Renderizado condicional
// Decidir la ui en tanto a un valor

// ✅ si nos envian los datos de user, renderizamos la tarjeta
// ❌ si no nos envian los datos de user, comunicamos que debería logearse

const TarjetaDePresentacion1 = ({ usuario }) => {
  console.log(usuario, "<-user")
  if (usuario !== undefined) {
    return (
      <div>
        <h2>{usuario.nombre}, {usuario.apellido}</h2>
        <p>Curso: {usuario.curso}</p>
        <a href="#">Visitar perfil</a>
      </div>
    )
  }

  return (
    <div>
      <p>❌ Inicie sesión para visualizar el contenido</p>
    </div>
  )
}

const TarjetaDePresentacion2 = ({ usuario }) => {
  if (usuario === undefined) {
    return (
      <h2>Debes contar con un usuario para ver este contenido.</h2>
    )
  }

  const { nombre, apellido, curso } = usuario

  if (nombre === undefined || apellido === undefined || curso === undefined) {
    return (
      <p>Información invalida del usuario</p>
    )
  }

  return (
    usuario.logged ? <div>
      <h2>{nombre}, {apellido}</h2>
      <p>Curso: {curso}</p>
      <a href="#">Visitar perfil</a>
    </div> : <div>
      <p>❌ Inicie sesión para visualizar el contenido</p>
    </div>
  )
}

export { TarjetaDePresentacion2 }
