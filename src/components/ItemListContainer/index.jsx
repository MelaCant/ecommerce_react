import React, {useState, useEffect} from "react"
import { getProducts } from "../../data"
import { ItemList } from "../index"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"


const ItemListContainer = () =>{
    const [data, setData] = useState([]);
    const{categoriaId} = useParams()

    useEffect(() =>{
        if(categoriaId){
            getProducts().then( res => setData(res.filter(remeras => remeras.category === categoriaId)))        
        }else{
            getProducts().then( res => setData(res))
        }
    },[categoriaId]);
    
    return(
        <>
            <div className="itemList_container">
                <ItemList data={data}/>
            </div>
        </>
    )
}

export default ItemListContainer