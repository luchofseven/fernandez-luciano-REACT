import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

export default function ItemDetail({ item }) {

    const { addItem, isInCart } = useContext(CartContext)

    const onAdd = (count) => {
        isInCart(item.id)
        addItem(item, count)
        alert(`Agregaste ${count} items al carrito`)
    }

    return (
        <div className="card mi-estilo-itemdetail">
            <img src={item.img} alt={item.name} />
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <h4>${item.price}</h4>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <Link to="/cart"><button type="button" className="btn mi-estilo-btn">Ver el carrito</button></Link>
        </div>
    )
}

