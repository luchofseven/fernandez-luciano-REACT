import React from "react";
import Item from "./Item"

export default function ItemList({ arrayProductos }) {

  return (

    <div className="mi-estilo-itemlist">
      {arrayProductos?.map(producto => <Item key={producto.id} item={producto} />)}
    </div>

  )
}