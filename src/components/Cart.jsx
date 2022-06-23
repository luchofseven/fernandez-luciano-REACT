import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {

    const { cart, getItemPrice, deleteItem, clear } = useContext(CartContext)

    return (

        <div className="m-5">
            <h5 className="text-center">Productos en el carrito</h5>
            {cart.map(e => <img src={e.img}></img>)}
        </div>

    )
}
