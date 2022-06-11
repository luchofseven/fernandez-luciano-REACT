import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ARRAY_PRODUCTOS = [
  {
    id: 1,
    img: "images/labial-gloss.jpg",
    name: "Brillo Labial",
    description: "Brillo labial ultra brillante de acabado húmedo. Hidrata sin ser pegajoso. Crea un efecto de volumen.",
    price: 395,
    cant: 0
  },
  {
    id: 2,
    img: "images/labial-liquido.jpg",
    name: "Labial Líquido",
    description: "Labial líquido de color intenso y acabado satinado. Híbrido que cumple la función de labial y gloss a la vez.",
    price: 385,
    cant: 0
  },
  {
    id: 3,
    img: "images/labial-holografico.jpg",
    name: "Labial Holográfico",
    description: "Brillo labial holográfico ultra brillante con pigmentos móviles que se transfroman en color.",
    price: 390,
    cant: 0
  },
  {
    id: 4,
    img: "images/labial-aterciopelado.jpg",
    name: "Labial Aterciopelado",
    description: "Labial líquido de fórmula ligera y alta pigmentación. Hidratante, cremoso y de acabado aterciopelado.",
    price: 385,
    cant: 0
  },
  {
    id: 5,
    img: "images/ojos-fibra.jpg",
    name: "Delineador Fibra",
    description: "Delineador en fibra. Negro Intenso. Larga duración y resistente al agua.",
    price: 295,
    cant: 0
  },
  {
    id: 6,
    img: "images/ojos-mascara.jpg",
    name: "Máscara de Pestañas",
    description: "Máscara de pestañas waterproof. Negro intenso. Crea volumen y alarga las pestañas.",
    price: 395,
    cant: 0
  },
  {
    id: 7,
    img: "images/ojos-lapiz.jpg",
    name: "Lápiz Delineador",
    description: "Delineador en lápiz negro intenso. Textura supercremosa que se aplica sin esfuerzo. Larga duración.",
    price: 150,
    cant: 0
  },
  {
    id: 8,
    img: "images/ojos-sombras.jpg",
    name: "Paleta Pastel",
    description: "Paleta con gama de todos mates, superiridiscentes y metalizados que permiten lograr diferentes looks.",
    price: 685,
    cant: 0
  },
  {
    id: 9,
    img: "images/rostro-polvo.jpg",
    name: "Polvo Volátil",
    description: "Polvo suelto ultraligero que fija y prolonga la duración del maquillaje.",
    price: 450,
    cant: 0
  },
  {
    id: 10,
    img: "images/rostro-base.jpg",
    name: "Base Líquida",
    description: "Base fluída de alta cobertura. No reseca la piel. Larga duración.",
    price: 480,
    cant: 0
  },
  {
    id: 11,
    img: "images/rostro-bronzer.jpg",
    name: "Paleta de Bronzers",
    description: "Paleta de bronceadores mates y brillantes para dar profunidad y dimensión.",
    price: 500,
    cant: 0
  },
  {
    id: 12,
    img: "images/rostro-iluminador.jpg",
    name: "Paleta de Iluminadores",
    description: "Paleta de cuatro iluminadores, para conseguir desde un brillo natural hasta un mega glow.",
    price: 500,
    cant: 0
  },
  {
    id: 13,
    img: "images/esmalte-colores.jpg",
    name: "Esmaltes",
    description: "Esmalte para uñas. 24 Tonos.",
    price: 200,
    cant: 0
  },
  {
    id: 14,
    img: "images/esmaltes-matificante.jpg",
    name: "Esmalte Matificante",
    description: "Protege el esmalte y proporciona a la uña un acabado efecto mate sobre cualquier esmalte común.",
    price: 300,
    cant: 0
  }
]

export default function ItemListContainer({ mensaje }) {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    const PROMESA_PRODUCTOS = new Promise((res, rej) => {

      setTimeout(() => {

        res(ARRAY_PRODUCTOS)

      }, 2000);

    })

    PROMESA_PRODUCTOS
      .then(data => setProductos(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="container-fluid">
      <h2 className="text-center">{mensaje}</h2>
      <ItemList arrayProductos={productos} />
    </div>
  )
}
