import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

export default function ItemDetail({ item }) {

    const { addItem, isInCart } = useContext(CartContext)

    const [buttonCart, setButtonCart] = useState(true)

    const onAdd = (count) => {
        isInCart(item.id)
        addItem(item, count)
        alert(`Agregaste ${count} items al carrito`)
        setButtonCart(false)
    }

    return (
        <div className="card mi-estilo-itemdetail">
            <img src={item.img} alt={item.name} />
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <h4>${item.price}</h4>
            {
                (buttonCart === true)
                    ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    : <>
                        <Link to="/cart"><button type="button" className="btn mi-estilo-btn">Ver el carrito</button></Link>
                        <Link to="/"><button type="button" className="btn mi-estilo-btn">Seguir comprando</button></Link>
                        <Link to="/pago"><button type="button" className="btn mi-estilo-btn">Terminar compra</button></Link>
                    </>
            }
        </div>
    )
}

{/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
<Link to="/cart"><button type="button" className="btn mi-estilo-btn">Ver el carrito</button></Link> */}