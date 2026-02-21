import { useState, useRef, useEffect, useContext } from "react"
import { ChatContext } from "../context/ChatContext.jsx"
import { useNavigate } from "react-router-dom"

const Chat = () => {
  const [text, setText] = useState("")
  const chatBodyRef = useRef(null)

  const { selectedUser, logout, handleMessages } = useContext(ChatContext)

  const navigate = useNavigate()

  const handleChangeText = (event) => {
    setText(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (text.length === 0) {
      return
    }

    const currentTime = new Date()
    const newMessage = {
      author: "Ana",
      time: currentTime.getHours() + ":" + currentTime.getMinutes(),
      text: text
    }

    handleMessages(newMessage)
    setText("")
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [])

  if (!selectedUser) {
    return (
      <section className="chat-cont-empty">
        <p className="chat-empty">Selecciona un contacto para empezar a conversar</p>
      </section>
    )
  }

  return (
    <section className="chat">
      <header>
        <div>
          <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
          <p>{selectedUser.address.country}</p>
        </div>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </header>
      <div className="chat-body" ref={chatBodyRef}>
        {
          selectedUser.messages.map((message) => <div key={message.id} className={`message ${message.author === "Ana" ? "me" : "received"}`}>
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