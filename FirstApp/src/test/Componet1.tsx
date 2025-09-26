import { useEffect, useRef, useState } from "react"
import Componet2 from "./Componet2"
import Componet3 from "./Componet3"

function Componet1() {
    console.log('1')

    const [nombre,setNombre]=useState(0)

    const count = useRef(0);
    
        useEffect(() => {
          count.current = count.current + 1;
          console.log('contador',count.current)
         
    
        },[]);

        useEffect(() => {
          setNombre(1)
    
        },[nombre]);

       
       

  return (
    <div>
        <h1>conponente 1</h1>
        
      <Componet2></Componet2>
      
   
    </div>
  )
}

export default Componet1
