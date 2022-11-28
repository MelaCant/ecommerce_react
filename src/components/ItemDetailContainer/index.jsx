import React, {useState, useEffect} from "react"
import {ItemDetail} from '../index'
import { getProducts } from "../../data"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'



export const ItemDetailContainer = () =>{
    const [data, setData] = useState([]);
    const {detalleId} =useParams()

    useEffect(() =>{
        getProducts().then( res => setData(res.find(product => product.id === parseInt(detalleId))))  
    },[detalleId])

    return(
        <ItemDetail data={data}/> 
    )
    
}

export default ItemDetailContainer 