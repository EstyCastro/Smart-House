import React, { useState } from 'react';

export default function Products(props) {

  const[product,setProduct]= useState({})

  const saveProduct = (e)=>{
    const input = e.target.value;
    if(input != ' '){
        console.log(input)
        setProduct(input)
    }else{
        alert('Select a product')
        return 0
    }
  }

  const validationProduct =()=>{
    console.log('product',product)
    props.addProduct(product)
    props.changeFlag()
  }
  return (
    <div>
      <b><label for="products">Select Product : </label></b><br></br>
      <select name="products" className="style" onChange={saveProduct}>
        <option value=""></option>
        <option value="lamp">Lamp</option>
        <option value="airConditioner">Air-Conditioner</option>
        <option value="boiler">Boiler</option>
        <option value="stereoSystem">stereo system</option>
      </select><br/><br/>
      <button className={"styleButton"} onClick={validationProduct} >Add</button>
    </div>
  )
}
