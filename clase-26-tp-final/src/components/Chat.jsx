import { useState } from "react"
import { messages as mockMessages } from "../services/mockApi.js"

const Chat = () => {
  const [text, setText] = useState("")
  const [messages, setMessages] = useState(mockMessages)

  // manipular el input

  // enviar el mensaje
  // crear el obj
  // agregar el obj a mi lista de mensajes

  return (
    <section>
      <header>
        <h2>Lucas Hernan Figueroa</h2>
        <p>Última conexión: hace 1 minuto</p>
      </header>
      <div className="chat-body">
        {
          messages.map((message) => <div className={`message ${message.author === "Ana" ? "me" : "received"}`}>
            <p><b>{message.author}</b>: {message.text}</p>
            <p className="timestamp">{message.time}</p>
          </div>)
        }
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Escribe un mensaje..." />
        <button>Enviar</button>
      </div>
    </section>
  )
}

export { Chat }