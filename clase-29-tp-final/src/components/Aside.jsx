import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/ChatContext"
// import { users } from "../services/mockApi.js"

const Aside = () => {
  const [search, setSearch] = useState("")

  const { users, handleSelectedUserId } = useContext(ChatContext)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  const handleClick = (id) => {
    handleSelectedUserId(id)
  }

  return (
    <aside>
      <h1>Chat UTN</h1>
      <input className="search" type="search" placeholder="Buscar contactos..." onChange={handleChange} />
      {
        filteredUsers.length === 0 && <p className="not-found-text">No se encontraron contactos</p>
      }
      <ul>
        {
          filteredUsers.map((user) => (
            <li key={user.id} onClick={() => handleClick(user.id)}>
              <img src={user.image} alt="" />
              <div>
                {user.firstName} {user.lastName}
                <small>{user.address.country}</small>
              </div>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export { Aside }