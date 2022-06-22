import { createContext, useState } from 'react'

export const CartContext = createContext()

const { Provider } = CartContext

export default function MyProvider({ children }) {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }


    const addItem = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            setCart(auxArray)
        } else {
            setCart([...cart], newItem)
        }
    }

    const clear = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(e => e.id !== id))
    }

    const getItemQty = () => {
        return cart.reduce((acc, e) => acc += e.quantity, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, e) => acc += e.quantity * e.price)
    }


    return <Provider value={{ cart, isInCart, addItem, clear, deleteItem, getItemQty, getItemPrice }}>{children}</Provider>

}




