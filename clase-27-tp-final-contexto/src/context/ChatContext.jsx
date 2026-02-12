import { createContext, useContext, useState } from "react"
import { users as mockUsers } from "../services/mockApi"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleSelectedUser = (id) => {
    setSelectedUser(users.find(user => user.id === id))
  }

  return (
    <ChatContext.Provider value={{ users, selectedUser, handleSelectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }