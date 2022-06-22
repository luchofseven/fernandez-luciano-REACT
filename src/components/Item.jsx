import { Link } from "react-router-dom";

export default function Item({ item }) {

  return (
    <div className="card mi-estilo-card" style={{ width: "18rem" }}>
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h4 className="p-4">${item.price}</h4>
        <Link to={`/producto/${item.id}`} className="btn mi-estilo-btn">Ver más</Link>
      </div>
    </div>
  )
}