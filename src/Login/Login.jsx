import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
const jb=useNavigate()
    return (
    <div><form action="">
        <input className='inp' type="email" placeholder=' Enter username' /><br /><br />
        <input className='inp' type="password"/><br /><br />
        <button onClick={()=>jb('/')} className='reg'>Registor</button>
        <button onClick={()=>jb('/Home')} className='login'>Login</button>
        </form></div>
  )
}

export default Login