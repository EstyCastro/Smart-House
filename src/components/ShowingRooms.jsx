import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function ShowingRooms(props) {
    const navigate = useNavigate();
    
    let styleRoom={
        display: "inline",
        border: "solid black 2px",
        width: "100px",
        height: "100px",
        padding: "15px",
        margin: "10px",
        backgroundColor:`${props.item.colorRoom}`,
     }
     
    const openRoom = ()=>{
        props.saveRoom(props.item)
        navigate("/room")
     } 

  return (
    <div>
        <button style={styleRoom} onClick={openRoom}>{props.item.nameRoom}<br/><br/>{props.item.typeRoom}</button>
    </div>
  )
}
