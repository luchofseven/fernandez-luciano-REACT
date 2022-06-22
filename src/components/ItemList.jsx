import Item from "./Item"

export default function ItemList({ arrayProducts }) {

  return (

    <div className="mi-estilo-itemlist">
      {arrayProducts?.map(product => <Item key={product.id} item={product} />)}
    </div>

  )
}