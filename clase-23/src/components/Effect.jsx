import { useEffect, useState } from "react"


// 1 - efecto primario renderizar el componente
const Effect = () => {
  const [dataNorris, setDataNorris] = useState({})

  const fetchingData = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random")

      if (!response.ok) {
        throw new Error("La ruta del recurso no existe.")
      }

      const data = await response.json()
      setDataNorris(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  // 2 - efecto secundario llamar a una API
  useEffect(() => {
    fetchingData()
  }, [])


  return (
    <>
      {
        dataNorris.icon_url && <div className="data-norris">
          <img src={dataNorris.icon_url} alt="Imagen del meme" />
          <p>"{dataNorris.value}"</p>
          <small>Cita creada: {new Date(dataNorris.created_at).toLocaleString()}</small>
          <small>Cita actualizada{new Date(dataNorris.updated_at).toLocaleString()}</small>
        </div>
      }
    </>
  )
}

export { Effect }