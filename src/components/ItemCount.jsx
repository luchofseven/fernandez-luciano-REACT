import { useState } from "react"

export default function ItemCount({ stock, inicial, onAdd }) {
  const [contador, setContador] = useState(inicial)
  const [stockParcial, setStockParcial] = useState(stock)
  const [stockDisponible, setStockDisponible] = useState(9) //Hardcodee el 9 porque si pongo stock no me lo toma, no sé por qué (ayuda xD)!

  const handlerQuitar = () => {
    if (contador > inicial) {
      setContador(contador - 1)
      setStockDisponible(stockDisponible + 1)
    } else {
      alert("Compra minima")
    }
  }

  const handlerAgregar = () => {
    if (contador < stock) {
      setContador(contador + 1)
      setStockDisponible(stockDisponible - 1)
    } else {
      alert("Alcanzaste el stock de compra disponible")
    }
  }

  const hayStock = () => {
    if (contador > stockParcial) {
      alert(
        `No podes ingresar esta cantidad, stock disponible: ${stockParcial}`
      )
    } else {
      onAdd(contador)
      setStockParcial(stockParcial - contador)
    }
    setContador(inicial)
  }

  return (
    <>
      <div className="mi-estilo-itemcount">
        <h5 className="text-center">Cantidad:</h5>
        <h3>{contador}</h3>
        <small>Disponible: {stockDisponible} unidades</small>

        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn mi-estilo-btn"
            onClick={() => handlerQuitar()}
          >
            -
          </button>

          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              hayStock()
            }}
          >
            Agregar al carrito
          </button>

          <button
            type="button"
            className="btn mi-estilo-btn"
            onClick={() => handlerAgregar()}
          >
            +
          </button>
        </div>
      </div>
    </>
  )
}
