import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

  return (
    <div>
       <Link to='/' > Home </Link>
       <Link to='/about' > About </Link>
       <Link to='/food' > Food</Link> 
       <button onClick={() => {navigate("/gallary")}}>Gallary</button>
    </div>
  )
}
