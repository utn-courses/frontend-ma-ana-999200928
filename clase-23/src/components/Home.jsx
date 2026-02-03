// hooks de react
// useState -> para manejar estados
// useEffect -> para manejar efectos secundarios
import { useState, useEffect } from "react"

// un estado es una varible QUE CUANDO SE ACUTUALIZA refrezca la ui
const Home = () => {
  // destructuring
  const [name, setName] = useState("")
  const [products, setProducts] = useState([])

  // let listOfProducts = []

  const c1 = "important"
  const c2 = "underline"

  const fetchingData = async () => {
    try {
      const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // ejecuta un efecto secundario, es decir, traer la data SOLO luego de que renderice el componente
  useEffect(() => {
    fetchingData()
  }, [])

  const handleClick = () => {
    console.log("Hice click en el botón!")
    // Actualización del estado
    setName("Camila")
  }

  return (
    <>
      <main>
        {/* Si es verdad que tengo nombre y contenido para mostrar, entonces, muestro el titulo. */}
        {name && <h1 className={`${c1} ${c2}`}>Welcome {name}, to the Home Page</h1>}
        <button onClick={handleClick}>Cambiar nombre</button>
        <section>
          <p>This is the main content of the home page.</p>
          <article>
            <h2>Latest News</h2>
            <p>Stay tuned for the latest updates and news.</p>
          </article>
        </section>
        <section className="products-grid">
          {
            products.map((product) => {
              return (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.api_featured_image}
                    alt={`Imagen del producto ${product.name}`}
                  />
                  <h2>{product.name}</h2>
                  <p className="price">
                    {product.price_sign}{product.price}
                  </p>
                  <p className="description">{product.description}</p>
                  <p className="category">{product.category ? product.category : "Sin categoria"}</p>
                </div>
              )
            })
          }
        </section>
      </main >
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </>
  )
}

export { Home }