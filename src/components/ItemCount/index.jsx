import React,{useState, useEffect} from "react"
import './ItemCount.css'
import {Button} from "../index"



const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial)
    
    useEffect(()=>{
        setCount(initial)
    },[initial])
    
    return(
        <>
            <div className='counter'>
                <button disabled={count <= 1} onClick={()=> setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={()=> setCount(count + 1)}>+</button>
                <div>
                    <Button disabled={stock <= 0} text='Agregar al carrito' onClick={onAdd(count)}/>  
                </div>
            </div> 
        </> 
    )
}

export default ItemCount