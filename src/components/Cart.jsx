import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import ItemCart from "./ItemCart"

export default function Cart() {

    const { cart, getItemPrice, getItemQty, clear } = useContext(CartContext)

    return (
        <>
            {
                (cart.length > 0)
                    ?
                    <>
                        {cart.map(product => <ItemCart key={product.id} product={product} />)}
                        <div className="mi-estilo-cart-h4">
                            <h4>Productos agregados: {getItemQty()}</h4>
                            <h4>Total a pagar: ${getItemPrice()}</h4>
                        </div>
                        <div className="mi-estilo-cart">
                            <button className="btn mi-estilo-btn" onClick={() => clear()}>Vaciar carrito</button>
                            <Link to="/checkout"><button className="btn mi-estilo-btn">Terminar compra</button></Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="mi-estilo-emptyCart">
                            <h4>El carrito está vacío</h4>
                            <button className="btn mi-estilo-btn"><Link to="/" className="nav-link" style={{ color: "#000000", fontWeight: "bold", fontSize: "1.5rem" }}>Empezar a comprar</Link></button>
                        </div>
                    </>
            }
        </>
    )
}