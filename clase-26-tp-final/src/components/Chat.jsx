import { useState } from "react"
import { messages as mockMessages } from "../services/mockApi.js"

const Chat = () => {
  const [text, setText] = useState("")
  const [messages, setMessages] = useState(mockMessages)

  // manipular el input

  // enviar el mensaje
  const handleChangeText = (event) => {
    setText(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage()
    }
  }

  // crear el obj
  const sendMessage = () => {

    if (text.length === 0) {
      return
    }

    const currentTime = new Date()
    const newMessage = {
      id: messages.length + 1,
      author: "Ana",
      time: currentTime.getHours() + ":" + currentTime.getMinutes(),
      text: text
    }

    setMessages([...messages, newMessage])
    setText("")
  }
  // { id: 6, author: "Ana", text: "Sí, ahora lo reviso", time: "19:04" }
  // agregar el obj a mi lista de mensajes

  return (
    <section className="chat">
      <header>
        <h2>Lucas Hernan Figueroa</h2>
        <p>Última conexión: hace 1 minuto</p>
      </header>
      <div className="chat-body">
        {
          messages.map((message) => <div key={message.id} className={`message ${message.author === "Ana" ? "me" : "received"}`}>
            <p><b>{message.author}</b>: {message.text}</p>
            <p className="timestamp">{message.time}</p>
          </div>)
        }
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          onChange={handleChangeText}
          onKeyDown={handleKeyDown}
          value={text}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </section>
  )
}

export { Chat }