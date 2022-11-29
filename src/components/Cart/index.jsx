import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import './Cart.css' 

const Cart = () => {
    const { cart} = useContext(CartContext );
    
    if(cart.lenght === 0){
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Volver a productos</Link>
            </>
        )
    }

    return(
        <>
            <div>Cart</div>            
        </>
    )

}

export default Cart