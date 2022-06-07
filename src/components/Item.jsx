import React from "react";

const Item = ({ producto }) => {
  return (
    <div className="card mi-estilo-card" style={{ width: "18rem" }}>
      <img src={producto.img} className="card-img-top" alt={producto.name} />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.description}</p>
        <h5>${producto.price}</h5>
        <a href="#" className="btn btn-primary">Ver mas</a>
      </div>
    </div>
  )
};

export default Item;
