import { createContext, useContext, useState } from "react"
import { users as mockUsers } from "../services/mockApi"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const handleUser = (user) => {
    setLoggedUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const handleSelectedUserId = (id) => {
    setSelectedUserId(id)
  }

  const login = (userData) => {
    const foundUser = mockUsers.find(user => user.email === userData.email)

    if (!foundUser) {
      return false
    }

    if (foundUser.password === userData.password) {
      return true
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
  }

  const handleMessages = (newMessage) => {
    setUsers((prevValue) => prevValue.map((user) =>
      user.id === selectedUserId
        ? {
          ...user,
          messages: [...user.messages, newMessage]
        }
        : user
    ))
  }

  const selectedUser = users.find(user => user.id === selectedUserId)

  return (
    <ChatContext.Provider value={{ users, handleSelectedUserId, login, logout, handleUser, loggedUser, handleMessages, selectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }