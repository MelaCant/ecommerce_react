import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import './Cart.css'
import {ItemCart} from './../index'
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, totalPrice} = useContext(CartContext );
    

    const order = {
        buyer : {
            name: 'Melina',
            email : 'melina@gmail.com',
            phone : '1545512',
            address : 'avenida 1234',
        },
        items : cart.map(product => ({ id: product.id, name: product.name, price : product.price, quantity: product.quantity})),
        total : totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id)) 
    }

    
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
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total : {totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir compra</button>          
        </>
    )

}

export default Cart