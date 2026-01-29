import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Saludo, SaludoEjercicio } from './components/Saludo.jsx'
import { Mensaje } from "./components/Mensaje.jsx"
import { TarjetaDePresentacion2 } from './components/TarjetaDePresentacion.jsx'
import './index.css'

const alumnos = [
  {
    nombre: "Danyel",
    apellido: "Salazar Alarcon",
    curso: "Desarrollo web backend"
  }
]

const alumno = {
  nombre: "Victoria",
  apellido: "Larranaga",
  curso: "Desarrollo web frontend"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Saludo nombre={alumno.nombre} apellido={alumno.apellido} />
    <Saludo nombre={"Pepe"} apellido={"Perez"} />
    <Saludo nombre={alumnos[0].nombre} apellido={alumnos[0].apellido} />
    <hr />
    <Mensaje text={"hola amigo, que haces despues de las 19?"} send={"me"} time={new Date().toLocaleString()} />
    <Mensaje text={"trabajo hasta las 21"} time={new Date().toLocaleString()} />
    <Mensaje text={"ok nos vemos despues"} send={"me"} time={new Date().toLocaleString()} /> */}
    <hr />
    <TarjetaDePresentacion2 />
    <SaludoEjercicio esMañana={false} nombre={"Santi"} />
  </StrictMode>,
)
