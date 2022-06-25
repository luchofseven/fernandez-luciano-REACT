import { useState } from "react"

export default function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial)
  const [partialStock, setPartialStock] = useState(stock)

  const handlerQuitar = () => {
    if (count > initial) {
      setCount(count - 1)
    } else {
      alert("Compra minima")
    }
  }

  const handlerAgregar = () => {
    if (count < stock) {
      setCount(count + 1)
    } else {
      alert("Alcanzaste el stock de compra disponible")
    }
  }

  const isValue = () => {
    if (count > partialStock) {
      alert(
        `No podes ingresar esta cantidad, stock disponible: ${partialStock}`
      )
    } else {
      onAdd(count)
      setPartialStock(partialStock - count)
    }
    setCount(initial)
  }

  return (
    <>
      <div className="mi-estilo-itemcount">
        <h5 className="text-center">Cantidad:</h5>
        <h3>{count}</h3>
        <small>Disponible: {stock} unidades</small>

        <div className="btn-group m-2" role="group">
          <button type="button" className="btn mi-estilo-btn" onClick={() => handlerQuitar()}>-</button>

          <button type="button" className="btn mi-estilo-btn2" onClick={() => { isValue() }}>Agregar al carrito</button>

          <button type="button" className="btn mi-estilo-btn" onClick={() => handlerAgregar()}>+</button>
        </div>
      </div>
    </>
  )
}
