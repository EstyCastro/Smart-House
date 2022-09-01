import React, { useState } from 'react';
import SaveStyle from './SaveStyle'

export default function ShowingProducts(props) {
 
  return (
    <div>
        {props.item.map((p)=>{
          return <SaveStyle product={p} changeSituation={props.changeSituation}/> 
        })}
    </div>
  )
}
