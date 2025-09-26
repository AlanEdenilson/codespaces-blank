import { useEffect, useRef, useState } from "react"


function Componet3() {
    console.log('3')
    const [nombre,setNombre]=useState(0)

    const count = useRef(0);

    useEffect(() => {
      count.current = count.current + 1;
      console.log(count)
       

    },[]);
    
   


  return (
    <div>
      <h1>componente 3</h1>
    </div>
  )
}

export default Componet3
