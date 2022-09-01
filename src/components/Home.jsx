import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import ShowingRooms from './ShowingRooms'

export default function Home(props) {
  const navigate = useNavigate();
  let arr=props.rooms
  
  return (
    <div>
      <h1>Home Page</h1>
      <button className={"styleButton"} onClick={() => {navigate("/addroom")}}>AddRoom</button><br/><br/><br/>
      {arr.map((item)=>{
          return <ShowingRooms item={item} saveRoom={props.saveRoom}/>
       })}
    </div>
  )
}
