import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Netflix from './pages/Netflix'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Netflix/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App