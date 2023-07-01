import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const jb=useNavigate()
  return (
    <div>
    <nav>
        {/* <div></div> */}
    <div className='btn'><button onClick={()=>jb('/Login')} className='login'>Login</button>
        <button onClick={()=>jb('/')} className='reg'>Registor</button></div>
    </nav>
    <div><h1>welcome to React</h1></div>
    </div>
  )
}

export default Home