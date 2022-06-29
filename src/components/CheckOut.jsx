import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import swal from "sweetalert"

export default function CheckOut() {

    // const expressions = {
    //     name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //     phoneNumber: /^\d{7,14}$/ // 7 a 14 numeros.
    // }

    const { cart, clear, getItemPrice } = useContext(CartContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    function handleClick() {

        const order = {
            buyer: { name, email, phoneNumber },
            products: cart,
            date: new Date(),
            total: getItemPrice()
        }

        if (order.products.length === 0) {
            swal({
                title: "No se pudo completar la operacion porque el carrito está vacío",
                icon: "error",
                buttons: {
                    confirm: {
                        className: "mi-estilo-btn-sweetAlert"
                    }
                }
            })
            setName("")
            setEmail("")
            setPhoneNumber("")
        } else {
            addDoc(orderCollection, order)
                .then(({ id }) => {
                    if (id) {
                        swal({
                            title: "¡Gracias por su compra!",
                            text: `ID de compra: ${id}`,
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: "mi-estilo-btn-sweetAlert"
                                }
                            }
                        })
                    }
                })
                .catch((error) => {
                    console.log(`Ocurrio un error: ${error}`)
                })
                .finally(() => {
                    setName("")
                    setEmail("")
                    setPhoneNumber("")
                    clear()
                })
        }
    }

    return (<>
        <h2 className="text-center m-5">Complete los siguientes datos para terminar su compra.</h2>
        <div className="mi-estilo-checkOut">
            <div>
                <label htmlFor="name">Nombre</label>
                <input onChange={(e) => setName(e.target.value.toLocaleUpperCase())} value={name} type="text" name="name" id="name" placeholder="Ingrese su nombre" />

                <label htmlFor="email">E-mail</label>
                <input onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())} value={email} type="email" name="email" id="email" placeholder="Ingrese su e-mail" />

                <label htmlFor="phone-number">Nº Celular</label>
                <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" name="phone-number" id="phone-number" placeholder="Ingrese su celular" />
            </div>
            <button className="btn mi-estilo-btn2" onClick={handleClick}>Terminar Compra</button>
        </div>
    </>)
}
