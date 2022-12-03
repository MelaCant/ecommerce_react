import React, {useState, useContext} from "react"

import { CartContext } from '../../context/CartContext'
import { ItemCount, Button } from '../index'
import { Link } from "react-router-dom"
import './ItemDetail.css'

const ItemDetail = ({ data }) =>{
    const [cantidad, setCantidad] = useState(0)
    const {addProduct, getProductQuantity} = useContext(CartContext)
    
    function onAdd(quantity) {
        setCantidad(quantity);
        addProduct(data, quantity);
    }
    const quantity = getProductQuantity(data.id);

    return(
        
        <div className='card'>
            <img src={data.image} alt='' className='card_img'/>
            <h3>{data.name}</h3>
            {
                cantidad >= 1 ? (<Link to='/cart'>
                    <button className='compra_button'>Terminar compra
                    </button></Link>) : (
                    <ItemCount
                    stock={data.stock}
                    initial={data.stock !== 0 && quantity ? quantity : 1}
                    onAdd={onAdd}
                />
            )}
            
            <Link to='/'>
                <Button text='Volver a tienda'>
                </Button>
            </Link>
                 
            
        </div>    
    )
}

export default ItemDetail

