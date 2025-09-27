import { useState } from 'react'
import { PrincipalPage } from './PrincipalPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './Products/Product'





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='fixed'>
      <PrincipalPage/>

    </div>
    
    <Routes>
        
        <Route path="/product" element={<Product />}>
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
