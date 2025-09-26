import { useEffect, useRef, useState } from "react"
import Componet3 from "./Componet3";


function Componet2() {
    console.log('2')
    const [nombre,setNombre]=useState(0)
    const count = useRef(0);
    
        useEffect(() => {
          count.current = count.current + 1;
          console.log(count)
          
        },[]);

        
        
  return (
    <div>
        <h2>componente 2</h2>
        <Componet3></Componet3>
      
    </div>
  )
}

export default Componet2
