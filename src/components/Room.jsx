import React, { useState } from 'react';
import Products from './Products'
import ShowingProducts from './ShowingProducts'

export default function Room(props) {
  const [showResults, setShowResults] = useState(false)
  const [countProducts ,setCountProducts] = useState(props.room.productsArr.length)//להתחיל את הספירה מכמות המוצרים שכבר הייתה 

  const changeFlag = ()=>{
    setShowResults(!showResults)
  }
  const addProduct = (prod)=>{
    if(prod == "boiler" && props.room.typeRoom != "Bathroom" ){//לתקן לדייק 
        alert("A boiler can only be added to a bathroom")
    }else{
        if(countProducts<5){
            props.addProduct({nameProduct:prod,nameRoom:props.room.nameRoom,situation:'red'})
            setCountProducts(countProducts+1)//לסכום את מוצרים בנוסף למוצרים הקיימים
        }else{
            alert("No more products can be added to this room")
            return 0
        }
    }
    
  }

  return (
    <div>
      <div className='styleDiv'>the name room is : {props.room.nameRoom}</div>
      <div className='styleDiv'>the type room is : {props.room.typeRoom}</div><br/>
      {props.ArrRooms.map((item)=>{
        if(item.nameRoom == props.room.nameRoom){

           return <ShowingProducts item={item.productsArr} changeSituation={props.changeSituation} />
        }
       })}<br/>
       <button className={"styleButton"} onClick={changeFlag} >Add Product</button><br/><br/>
     { showResults ? 
     <div>
      {<Products addProduct={addProduct} changeFlag={changeFlag}/>} 
      </div>
     : null }
    </div>
  )
}
