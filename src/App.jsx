import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './Login/Home'
import Login from './Login/Login'
import Registor from './Login/Registor'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Registor/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
