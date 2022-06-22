import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function Cart() {

    const { cart, getItemPrice, deleteItem, clear } = useContext(CartContext)

    return (

        <div className="m-5">
            <h5>{cart}</h5>
        </div>

    )
}
