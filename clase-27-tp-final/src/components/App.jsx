import { useState } from "react"
import { Aside } from "./Aside"
import { Chat } from "./Chat"

const App = () => {
  const [activeUser, setActiveUser] = useState(null)

  const handleActiveUser = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`)
      if (!response.ok) {
        alert("El usuario no éxiste.")
        return
      }

      const data = await response.json()
      setActiveUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='app'>
      <Aside onActiveUser={handleActiveUser} />
      <Chat activeUser={activeUser} />
    </main>
  )
}

export { App }