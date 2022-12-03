import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'


const CartWidget = () =>{
    const {totalProducts} = useContext(CartContext );

    return(
        <>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="total">{totalProducts() || ''}</span>
        </>   
    )
}

export default CartWidget