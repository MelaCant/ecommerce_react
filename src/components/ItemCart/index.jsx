import React from "react";
import { useCartContext } from "../../context/CartContext";
import './ItemCart.css';

const ItemCart = ({product}) =>{
    const {removeProduct} = useCartContext()
    return(
        <div className="itemCart">
            <img src={product.image} alt= {product.name}/>
            <div>
                <p>Título : {product.name}</p>
                <p>Cantidad : {product.quantity}</p>
                <p>Precio : {product.price}</p>
                <p>Subtotal : {product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
} 

export default ItemCart