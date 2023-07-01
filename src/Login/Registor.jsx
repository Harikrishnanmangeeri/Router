import React from 'react'
import { useNavigate } from 'react-router-dom'
const Registor = () => {
const hk=useNavigate()    
  return (
    <div>
        <form action="">
            <input className='inp'  type="text" placeholder='Enter your first Name' /><br /><br />
            <input className='inp' type="text" placeholder='Enter your last Name' /><br /><br />
            <input className='inp' type="email" placeholder='example@gmail.com' /><br /><br />
            <input className='inp' type="date" name="D.O.B" id="" /><br /><br />
            <input className='inp' type="number" placeholder='Contact no:'/><br /><br />
            <input className='inp' type="password" placeholder='create password' /><br /><br />
            <input className='inp' type="password" placeholder='confirm password' /><br /><br />
            <button onClick={()=>hk('/Login')} className='reg'>Submit</button>
            <button onClick={()=>hk('/Login')} className='login'>Login</button>

        </form>
    </div>
  )
}

export default Registor