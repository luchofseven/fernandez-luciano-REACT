import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from "firebase/firestore"
import ItemDetail from '../components/ItemDetail'
import Loader from '../components/Loader'

export default function ItemDetailContainer() {

    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState({})
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        const db = getFirestore()
        const productDetail = doc(db, "products", id)

        getDoc(productDetail)
            .then((response) => {
                setItemDetail({ ...response.data(), id: response.id })
            })
            .catch((error) => {
                console.log(`Ocurrio un error: ${error}`)
            })
            .finally(() => {
                setLoader(false)
            })

    }, [id])

    return (<>
        {
            (loader === true)
                ? <Loader />
                : <ItemDetail item={itemDetail} />
        }
    </>)
}

