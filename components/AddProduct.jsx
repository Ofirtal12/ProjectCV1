import React, { useState } from 'react'

export default function AddProduct(props) {

    const [productChosen,setProductChosen] = useState("Lamp")

    const checkProductChosen =()=>{
        const products = props.products;
        if(productChosen === "Stereo" && products.filter(val => val.type === "Stereo").length > 0)
            alert("Only 1 stereo in each room");
        else if(productChosen === "Heater" && props.type !== "Bathroom")
            alert("Heater allowed only in bathroom!")
        else if(products.length === 5)
            alert("Only 5 products per room")
        else{
            props.addNewProduct(props.index , productChosen)
        }
        props.setFlag(true)
    }
  return (
    <div>
        <select onChange={(e)=>setProductChosen(e.target.value)}>
            <option value="Lamp">Lamp</option>
            <option value="Stereo">Stereo</option>
            <option value="Air Con">Air Con</option>
            <option value="Heater">Heater</option>
        </select>
        <br />
        <button onClick={checkProductChosen}>Add Product</button>
    </div>
  )
}
