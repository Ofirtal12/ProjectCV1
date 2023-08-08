import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function MainPage(props) {

    const nav = useNavigate()
  return (
    <div>

        {props.rooms.map((val,index)=>{
            return <button key={index} onClick={()=>{nav(`/rooms/${val.name}`)}} style={{backgroundColor:val.color}}> {val.name}</button>
        })}

        <Link to="/AddRoom"> <button>+</button> </Link>
    </div>
  )
}
