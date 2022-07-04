import { Link } from "react-router-dom";

export default function Item({ item }) {

  return (
    <Link className="mi-estilo-itemLink" to={`/producto/${item.id}`}>
      <div className="card mi-estilo-card" style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h4 className="p-4">${item.price}</h4>
          <button className="btn mi-estilo-btn">Ver más</button>
        </div>
      </div>
    </Link>
  )
}