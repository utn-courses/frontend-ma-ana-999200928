import { useEffect, useState } from "react"
// import { users } from "../services/mockApi.js"

const Aside = () => {
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([])

  const fetchingData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")

      if (!response.ok) {
        alert("No se encuentra lo que pedis :(")
        return
      }

      const data = await response.json()

      setUsers(data.users)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(search.toLowerCase()))

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
            <li key={user.id}>
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