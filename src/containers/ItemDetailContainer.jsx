import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'

const ARRAY_PRODUCTS = [
    {
        id: 1,
        img: "../images/labial-gloss.jpg",
        name: "Brillo Labial",
        description: "Brillo labial ultra brillante de acabado húmedo. Hidrata sin ser pegajoso. Crea un efecto de volumen.",
        price: 395,
        category: "labial",
        stock: 200
    },
    {
        id: 2,
        img: "../images/labial-liquido.jpg",
        name: "Labial Líquido",
        description: "Labial líquido de color intenso y acabado satinado. Híbrido que cumple la función de labial y gloss a la vez.",
        price: 385,
        category: "labial",
        stock: 200
    },
    {
        id: 3,
        img: "../images/labial-holografico.jpg",
        name: "Labial Holográfico",
        description: "Brillo labial holográfico ultra brillante con pigmentos móviles que se transfroman en color.",
        price: 390,
        category: "labial",
        stock: 200
    },
    {
        id: 4,
        img: "../images/labial-aterciopelado.jpg",
        name: "Labial Aterciopelado",
        description: "Labial líquido de fórmula ligera y alta pigmentación. Hidratante, cremoso y de acabado aterciopelado.",
        price: 385,
        category: "labial",
        stock: 200
    },
    {
        id: 5,
        img: "../images/ojos-fibra.jpg",
        name: "Delineador Fibra",
        description: "Delineador en fibra. Negro Intenso. Larga duración y resistente al agua.",
        price: 295,
        category: "ojos",
        stock: 200
    },
    {
        id: 6,
        img: "../images/ojos-mascara.jpg",
        name: "Máscara de Pestañas",
        description: "Máscara de pestañas waterproof. Negro intenso. Crea volumen y alarga las pestañas.",
        price: 395,
        category: "ojos",
        stock: 200
    },
    {
        id: 7,
        img: "../images/ojos-lapiz.jpg",
        name: "Lápiz Delineador",
        description: "Delineador en lápiz negro intenso. Textura supercremosa que se aplica sin esfuerzo. Larga duración.",
        price: 150,
        category: "ojos",
        stock: 200
    },
    {
        id: 8,
        img: "../images/ojos-sombras.jpg",
        name: "Paleta Pastel",
        description: "Paleta con gama de todos mates, superiridiscentes y metalizados que permiten lograr diferentes looks.",
        price: 685,
        category: "ojos",
        stock: 200
    },
    {
        id: 9,
        img: "../images/rostro-polvo.jpg",
        name: "Polvo Volátil",
        description: "Polvo suelto ultraligero que fija y prolonga la duración del maquillaje.",
        price: 450,
        category: "rostro",
        stock: 200
    },
    {
        id: 10,
        img: "../images/rostro-base.jpg",
        name: "Base Líquida",
        description: "Base fluída de alta cobertura. No reseca la piel. Larga duración.",
        price: 480,
        category: "rostro",
        stock: 200
    },
    {
        id: 11,
        img: "../images/rostro-bronzer.jpg",
        name: "Paleta de Bronzers",
        description: "Paleta de bronceadores mates y brillantes para dar profunidad y dimensión.",
        price: 500,
        category: "rostro",
        stock: 200
    },
    {
        id: 12,
        img: "../images/rostro-iluminador.jpg",
        name: "Paleta de Iluminadores",
        description: "Paleta de cuatro iluminadores, para conseguir desde un brillo natural hasta un mega glow.",
        price: 500,
        category: "rostro",
        stock: 200
    },
    {
        id: 13,
        img: "../images/esmalte-colores.jpg",
        name: "Esmaltes",
        description: "Esmalte para uñas. 24 Tonos.",
        price: 200,
        category: "esmalte",
        stock: 200
    },
    {
        id: 14,
        img: "../images/esmaltes-matificante.jpg",
        name: "Esmalte Matificante",
        description: "Protege el esmalte y proporciona a la uña un acabado efecto mate sobre cualquier esmalte común.",
        price: 300,
        category: "esmalte",
        stock: 200
    }
]

export default function ItemDetailContainer() {

    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState({})

    useEffect(() => {

        ARRAY_PRODUCTS.find(product => product.id == id && setItemDetail(product))

    }, [id])

    return (
        <ItemDetail item={itemDetail} />
    )
}

