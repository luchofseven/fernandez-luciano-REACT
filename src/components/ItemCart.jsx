import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemCart({ product }) {

    const { deleteItem } = useContext(CartContext)

    return (<>
        <div className="mi-estilo-itemCart">
            <img src={product.img} alt={product.name} />
            <h5>{product.name}</h5>
            <h5>{product.quantity}</h5>
            <h5>${product.quantity * product.price}</h5>
            <button className="btn mi-estilo-btn" onClick={() => { deleteItem(product.id) }}>Eliminar producto</button>
        </div>
    </>)
}
