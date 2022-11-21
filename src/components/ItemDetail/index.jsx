import React from "react"
import './ItemDetail.css'
import {ItemCount} from '../index'


const ItemDetail = ({data}) =>{
    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`)
    }
    return(
        <div className='card'>
            <img src={data.image} alt={data.description} className='card_img'/>
            <h3>{data.name}</h3>
            <p>${data.price}</p>
            <div>
                <ItemCount initial ={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>    
    )
}

export default ItemDetail

