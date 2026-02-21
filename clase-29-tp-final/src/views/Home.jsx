import { Aside } from "../components/Aside"
import { Chat } from "../components/Chat"

const Home = () => {
  return (
    <main className='app'>
      <Aside />
      <Chat />
    </main>
  )
}

export { Home }