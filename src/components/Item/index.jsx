import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../index'
import './Item.css'



const Item = ({info}) =>{
  return(
    <Link to={`/item/${info.id}`} className='card'>
      <img src={info.image} alt='' className='card_img'/>
      <h3>{info.name}</h3>
      <p>${info.price}</p>
      <Button text='Ver detalle'/>
    </Link>
           
  )
}

export default Item
