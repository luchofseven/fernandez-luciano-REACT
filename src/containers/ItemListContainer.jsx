import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../components/ItemList"
import NavProducts from "../components/NavProducts"

const ARRAY_PRODUCTOS = [
  {
    id: 1,
    img: "../images/labial-gloss.jpg",
    name: "Brillo Labial",
    description: "Brillo labial ultra brillante de acabado húmedo. Hidrata sin ser pegajoso. Crea un efecto de volumen.",
    price: 395,
    category: "labial"
  },
  {
    id: 2,
    img: "../images/labial-liquido.jpg",
    name: "Labial Líquido",
    description: "Labial líquido de color intenso y acabado satinado. Híbrido que cumple la función de labial y gloss a la vez.",
    price: 385,
    category: "labial"
  },
  {
    id: 3,
    img: "../images/labial-holografico.jpg",
    name: "Labial Holográfico",
    description: "Brillo labial holográfico ultra brillante con pigmentos móviles que se transfroman en color.",
    price: 390,
    category: "labial"
  },
  {
    id: 4,
    img: "../images/labial-aterciopelado.jpg",
    name: "Labial Aterciopelado",
    description: "Labial líquido de fórmula ligera y alta pigmentación. Hidratante, cremoso y de acabado aterciopelado.",
    price: 385,
    category: "labial"
  },
  {
    id: 5,
    img: "../images/ojos-fibra.jpg",
    name: "Delineador Fibra",
    description: "Delineador en fibra. Negro Intenso. Larga duración y resistente al agua.",
    price: 295,
    category: "ojos"
  },
  {
    id: 6,
    img: "../images/ojos-mascara.jpg",
    name: "Máscara de Pestañas",
    description: "Máscara de pestañas waterproof. Negro intenso. Crea volumen y alarga las pestañas.",
    price: 395,
    category: "ojos"
  },
  {
    id: 7,
    img: "../images/ojos-lapiz.jpg",
    name: "Lápiz Delineador",
    description: "Delineador en lápiz negro intenso. Textura supercremosa que se aplica sin esfuerzo. Larga duración.",
    price: 150,
    category: "ojos"
  },
  {
    id: 8,
    img: "../images/ojos-sombras.jpg",
    name: "Paleta Pastel",
    description: "Paleta con gama de todos mates, superiridiscentes y metalizados que permiten lograr diferentes looks.",
    price: 685,
    category: "ojos"
  },
  {
    id: 9,
    img: "../images/rostro-polvo.jpg",
    name: "Polvo Volátil",
    description: "Polvo suelto ultraligero que fija y prolonga la duración del maquillaje.",
    price: 450,
    category: "rostro"
  },
  {
    id: 10,
    img: "../images/rostro-base.jpg",
    name: "Base Líquida",
    description: "Base fluída de alta cobertura. No reseca la piel. Larga duración.",
    price: 480,
    category: "rostro"
  },
  {
    id: 11,
    img: "../images/rostro-bronzer.jpg",
    name: "Paleta de Bronzers",
    description: "Paleta de bronceadores mates y brillantes para dar profunidad y dimensión.",
    price: 500,
    category: "rostro"
  },
  {
    id: 12,
    img: "../images/rostro-iluminador.jpg",
    name: "Paleta de Iluminadores",
    description: "Paleta de cuatro iluminadores, para conseguir desde un brillo natural hasta un mega glow.",
    price: 500,
    category: "rostro"
  },
  {
    id: 13,
    img: "../images/esmalte-colores.jpg",
    name: "Esmaltes",
    description: "Esmalte para uñas. 24 Tonos.",
    price: 200,
    category: "esmalte"
  },
  {
    id: 14,
    img: "../images/esmaltes-matificante.jpg",
    name: "Esmalte Matificante",
    description: "Protege el esmalte y proporciona a la uña un acabado efecto mate sobre cualquier esmalte común.",
    price: 300,
    category: "esmalte"
  }
]

export default function ItemListContainer({ mensaje }) {

  const { id } = useParams()

  const [productos, setProductos] = useState(ARRAY_PRODUCTOS)

  useEffect(() => {

    if (id === "labial") {
      setProductos(ARRAY_PRODUCTOS.filter(producto => producto.category === "labial"))
    } else if (id === "ojos") {
      setProductos(ARRAY_PRODUCTOS.filter(producto => producto.category === "ojos"))
    } else if (id === "rostro") {
      setProductos(ARRAY_PRODUCTOS.filter(producto => producto.category === "rostro"))
    } else if (id === "esmalte") {
      setProductos(ARRAY_PRODUCTOS.filter(producto => producto.category === "esmalte"))
    } else {
      setProductos(ARRAY_PRODUCTOS)
    }

  }, [id])

  return (<>
    <NavProducts />
    <div className="container-fluid">
      <h2 className="text-center">{mensaje}</h2>
      <ItemList arrayProductos={productos} />
    </div>
  </>)
}
