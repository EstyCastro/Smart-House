import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Consumer} from '../ContextAPI'

export default function Room(props) {
    const navigate = useNavigate();
    const [room,setRoom] = useState({})
    const [typeRoom,setTypeRoom] = useState('')
    const [nameRoom,setNameRoom] = useState('')
    const [colorRoom,setColorRoom] = useState('')

    let flag =false
    const ChackValid = ()=>{
      if(typeRoom == ''){
        alert('please select a room type')
      }else if(nameRoom ==' '){
        alert('please type the name room ')
      }else{
        if(colorRoom==''){
            setColorRoom('#0DC9A4')
        }
        props.ArrRooms.map((item)=>{
          if(item.nameRoom == nameRoom){
            flag =true
          }
        })
        if(!flag){
          props.addRooms({typeRoom:typeRoom,nameRoom:nameRoom,colorRoom:colorRoom,productsArr:[]})
          navigate("/");
        }else{
          alert('The room name already exists, choose another name')
          navigate("/");
        }
        
      }

    }
    const saveTypeRoom = (e)=>{
        const input = e.target.value;
        setTypeRoom(input);
      
    }
    const saveNameRoom = (e)=>{
        const input = e.target.value;
        setNameRoom(input);
        
    }
    const saveColorRoom = (e)=>{
        const input = e.target.value;
        setColorRoom(input)

    }
   
  return (
    <div>
      <h1>Room page </h1>
      <b><label for="colorType">Select room : </label></b><br></br>
      <select name="rooms" className="style" onChange={saveTypeRoom}>
        <option value=""></option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="kitchen">kitchen</option>
     </select><br/><br/>
     <input type={"text"} required={true} placeholder={"enter name room"} onChange={saveNameRoom} maxLength={"5"}></input><br/><br/>
     <b><label for="colorType">Room Color : </label></b><br></br>
     <input id={"colorType"} type={"color"} placeholder={"Choose a room color"} onChange={saveColorRoom} defaultValue={"#dde006"} ></input><br/><br/>
     <button className={"styleButton"} onClick={ChackValid}>Creat</button>
    </div>
  )
}
