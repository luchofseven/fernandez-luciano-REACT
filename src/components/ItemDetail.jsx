import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

export default function ItemDetail({ item }) {

    const [countCantidad, setCountCantidad] = useState(0)

    const onAdd = (contador) => {
        setCountCantidad(contador)
        return alert(`Agregaste ${contador} items al carrito`)
    }

    return (
        <div className="card mi-estilo-itemdetail">
            <img src={item.img} alt={item.name} />
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <h5>${item.price}</h5>
            {countCantidad
                ? <Link to="/cart"><button type="button" className="btn mi-estilo-btn">Terminar compra</button></Link>
                : <ItemCount stock={item.cantidad} inicial={1} onAdd={onAdd} />}
        </div>
    )
}

