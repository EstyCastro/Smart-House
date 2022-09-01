import React, { useState } from 'react';

export default function SaveStyle(props) {

    const [color ,setColor ] = useState(props.product.situation)

    const changeColor = ()=>{
        if(color == "red"){
            setColor("green")
            props.changeSituation(props.product,"green")
        }else{
            setColor("red")
            props.changeSituation(props.product,"red")

        }
    }

  return (
    <div>
      <button style={{background:color}} onClick={changeColor} className={"style"} >{props.product.nameProduct}</button>
    </div>
  )
}
