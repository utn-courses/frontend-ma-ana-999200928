import { useState } from "react"

const Test = () => {
  const [product, setProduct] = useState({ id: 1, name: "Pc", price: 100 })

  // let producto = { id: 1, name: "Pc", price: 100 }

  const handleClick = () => {
    setProduct({ id: 1, name: "Pc", price: 90 })
  }

  return (
    <>
      <div>
        <p>ID del producto: {product.id}</p>
        <p>Nombre del producto: {product.name}</p>
        <p>Precio del producto: ${product.price}</p>
        {product.price < 100 && <p>Producto en rebaja, precio menor a $100</p>}
      </div>
      <button onClick={handleClick}>Actualizar precio</button>
    </>
  )
}

export { Test }