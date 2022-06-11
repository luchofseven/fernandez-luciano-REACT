import React, { useState } from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({})

    const ITEM_PROMESA = new Promise((res, rej) => {
        setTimeout(() => {

            res({
                id: 1,
                img: "images/labial-gloss.jpg",
                name: "Brillo Labial",
                description: "Brillo labial ultra brillante de acabado húmedo. Hidrata sin ser pegajoso. Crea un efecto de volumen.",
                price: 395,
                cant: 0
            })

        }, 2000);
    })

    function getItem() {
        ITEM_PROMESA
            .then(response => setItemDetail(response))
            .catch(error => console.log("Error:", error))

        return (<ItemDetail item={itemDetail} />)
    }

    return (
        getItem()
    )
}

