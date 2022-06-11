import React from 'react'

export default function ItemDetail({ item }) {
    return (
        <div className="card mi-estilo-itemdetail">
            <img src={item.img} alt={item.name} />
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <h5>${item.price}</h5>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
    )
}

