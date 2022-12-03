import React, { useState } from "react";
import { useEffect } from "react";
import './ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial)
    
    useEffect(()=>{
        setCount(initial)
    },[initial])

    function add() {
        if (count >= 0 && count < stock) {
          setCount(count + 1);
        }
      }
      function remove() {
        count > 1 && setCount(count - 1);
    }
    
    return (
        <div className="countContainer">
          <div className="buttonContainer">
            <button onClick={() => remove()} className="buttonCount">
              -
            </button>
            <p className="counter">{count}</p>
            <button onClick={() => add()} className="buttonCount">
              +
            </button>
          </div>
          <button className="addChart" onClick={() => onAdd(count)}>
            Agregar al carrito
          </button>
        </div>
    )
}

export default ItemCount