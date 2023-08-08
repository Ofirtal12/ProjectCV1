import React, { useState } from 'react'
import AddProduct from './AddProduct'
import { Link } from 'react-router-dom'

export default function Room(props) {

    const [flag,setFlag] =useState(false)

    const show = () =>{
        if(flag === false){
            return <AddProduct type={props.type} products={props.products} index={props.index} addNewProduct={props.addNewProduct} setFlag={setFlag}/>
        }else{
            return <button onClick={()=>{setFlag(!flag)}}>+</button>
        }
    }

  return (
    <div>
        
        <h2>Room name: {props.name}</h2>
        <h2>Room type: {props.type}</h2>
        <br />
        {show()}
        <br />
        {props.products.map((val,productIndex)=>{
            let condition = val.condition ? "green" : "red";
            return <button key={productIndex} onClick={()=>{props.changeProductStatus(props.index,productIndex)}} style={{backgroundColor:condition}}> {val.type}</button>
        })}
    <br /><br /><br /><br />
    <Link to='/'> <button> Go back to rooms </button></Link>

    </div>
  )
}
