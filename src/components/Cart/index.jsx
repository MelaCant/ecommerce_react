import React from "react";
import { useCartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'
import './Cart.css' 

const Cart = () => {
    const { cart } = useCartContext()
    
    if(cart.lenght === 0){
        return(
            <>
                <p className="text">No hay elementos en el carrito</p>
                <Link to='/' className="text">Volver a productos</Link>
            </>
        )
    } 
    
    return(
        <div>Cart</div>
    )

}

export default Cart