import { useState } from "react"

const Form = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({
      email: email,
      password: password
    })

    // reset form
    setEmail("")
    setPassword("")
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    if (event.target.name === "email") {
      setEmail(event.target.value)
    } else if (event.target.name === "password") {
      setPassword(event.target.value)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Ingrese su email" required name="email" onChange={handleChange} autoComplete="off" value={email} />
        <input type="password" placeholder="Ingrese su contraseña" name="password" required onChange={handleChange} value={password} />
        <button>Enviar</button>
      </form>
      {!email && <p>No has ingresado ningún email</p>}
      {email && <p>Valor del estado email actualizado: {email}</p>}
    </>
  )
}

// export nombrado -> exige que se importe con el mismo nombre
export { Form }