import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import './Cart.css'
import {ItemCart, Button} from './../index'
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

    
    if(cart.length === 0){
        return(
            <>  
                <p className="text">No hay elementos en el carrito</p>
                <Link to='/' className="text"><button className="volver">Volver a tienda</button>
                </Link>
            </>
        )
    }

    return(
        <>
            <div className="text">
                {
                    cart.map(product => <ItemCart key={product.id} product={product}/>)
                }
                
                <div className="price_container">
                    <div>
                        Total : $ {totalPrice()}
                    </div>
                    <Button onClick={handleClick} text='Emitir compra'/> 
                </div>
            </div>         
        </>
    )

}

export default Cart