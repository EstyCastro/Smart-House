import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import React,{useState} from 'react'
import {Provider} from './ContextAPI'
import Home from './components/Home';
import AddRoom from './components/AddRoom'
import Room from './components/Room';

function App() {
   const [ArrRooms , setRooms] = useState([])
   const [room,setRoom] = useState({})
   const [flagOnOff,setflagOnOff] = useState(false)
   const addRooms = val=>{
    console.log(val)
    setRooms([val,...ArrRooms])
    console.log(ArrRooms)
  }

   const saveRoom = (room)=>{
    setRoom(room)
   }

   const addProduct = item =>{
    console.log(item)
    ArrRooms.map((element)=>{
      if(element.nameRoom == item.nameRoom){
        element.productsArr.push(item)
      }
    })
   
   }

   const changeSituation = (item,color)=>{
    let roomsArr=ArrRooms
    roomsArr.map((element)=>{
      if(element.nameRoom == item.nameRoom){
        element.productsArr.map((product)=>{
          if(product.nameProduct == item.nameProduct){
            product.situation=color 
          }
        })
      }
    })
    setRooms(roomsArr)
   }

  return (
    <div className="App">
    <header><h1>Smart House</h1>
     <Router>
       <Routes>
         <Route path='/' element={<Home rooms={ArrRooms} saveRoom={saveRoom}/>}  />
         <Route path='/addroom' element={<AddRoom addRooms={addRooms} ArrRooms={ArrRooms}/>} />
         <Route path='/room' element={<Room room={room} ArrRooms={ArrRooms} setRooms={setRooms} addProduct={addProduct} changeSituation={changeSituation}/>} />
       </Routes>
     </Router>
     </header>
    </div>
  );
}

export default App;
