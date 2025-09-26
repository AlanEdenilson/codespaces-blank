import { useState } from 'react'
import { PrincipalPage } from './PrincipalPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './Products/Product'
import Componet1 from './test/Componet1'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <PrincipalPage/>
    <Routes>
        
        <Route path="/product" element={<Product />}>
        </Route>
        <Route path="/prueba" element={<Componet1 />}></Route>
        
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
