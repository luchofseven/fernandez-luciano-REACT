import React, { useState } from 'react'

export default function ItemCount({ stock, inicial, onAdd }) {

  const [contador, setContador] = useState(inicial)

  const handlerQuitar = () => {
    if (contador > inicial) {
      setContador(contador - 1)
    } else {
      alert("Compra minima")
    }
  }

  const handlerAgregar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    } else {
      alert("Alcanzaste el stock de compra disponible")
    }
  }

  return (
    <>

      <div className="mi-estilo-itemcount">

        <h5 className="text-center">Productos a añadir:</h5>
        <h3>{contador}</h3>

        <div className="btn-group" role="group">

          <button type="button" className="btn btn-primary"
            onClick={() => handlerQuitar()}>-</button>

          <button type="button" className="btn btn-dark"
            onClick={() => { onAdd(contador) }}>Agregar al carrito</button>

          <button type="button" className="btn btn-primary"
            onClick={() => handlerAgregar()}>+</button>

        </div>
      </div>

    </>
  )
}
