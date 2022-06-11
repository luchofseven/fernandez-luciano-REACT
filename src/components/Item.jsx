import React from "react";

export default function Item({ item }) {
  return (
    <div className="card mi-estilo-card" style={{ width: "18rem" }}>
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <h5>${item.price}</h5>
        <a href="#" className="btn btn-primary">Ver mas</a>
      </div>
    </div>
  )
}