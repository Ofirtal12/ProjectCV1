import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddRoom(props) {

    const [name,setName] = useState("")
    const [color,setColor] = useState("")
    const [type,setType] = useState("default")

    const nav = useNavigate()

    const checkRoom = () =>{
        if(type === "default" || name.length < 1){
            alert("Error");
            nav("/")
        }else{
            alert("A room has been added");
            props.addNewRoom(name,color,type);
            nav('/')
        }
    }

  return (
    <div>
        <select onChange={(e)=>{setType(e.target.value)}}>
            <option value="default">Choose a room type</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Kitchen">Kitchen</option>
        </select>
        <br />
        <input type="text" placeholder='enter room name' onChange={(e)=>{setName(e.target.value)}} />
        <br />
        <input type="color"  onChange={(e)=>setColor(e.target.value)}/>
        <br />
        <button onClick={checkRoom}>Create Room</button>
    </div>
  )
}
