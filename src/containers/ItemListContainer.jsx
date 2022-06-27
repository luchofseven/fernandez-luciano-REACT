import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from "../components/ItemList"
import NavProducts from "../components/NavProducts"
import Loader from "../components/Loader"

export default function ItemListContainer() {

  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    const db = getFirestore()
    const productsCollection = collection(db, "products")

    if (id) {
      const q = query(collection(db, "products"), where("category", "==", id))
      getDocs(q)
        .then((response) => {
          setProducts(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
          console.log(`Ocurrio un error: ${error}`)
        })
        .finally(() => {
          setLoader(false)
        })
    } else {
      getDocs(productsCollection)
        .then((response) => {
          setProducts(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
          console.log(`Ocurrio un error: ${error}`)
        })
        .finally(() => {
          setLoader(false)
        })
    }
  }, [id])

  return (<>
    <NavProducts />
    {
      (loader === true)
        ? <Loader />
        : <div className="container-fluid">
          <ItemList arrayProducts={products} />
        </div>
    }
  </>)
}
