import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () =>{
    const {totalProducts} = useContext(CartContext );

    return(
        <>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{totalProducts() || ''}</span>
        </>   
    )
}

export default CartWidget