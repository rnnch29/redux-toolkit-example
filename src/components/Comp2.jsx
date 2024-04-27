import React from 'react'
import { login,logout } from '../store/userSlice'
import { useDispatch } from 'react-redux'


function Comp2() {

    const user = {
        username: 'admin',
        password: '1234'
    }
    
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login(user))
    }
    const handleLogout = () => {
        dispatch(logout())
    }

    

  return (
    <div>
        <h1 className='text-2xl'>Component 2</h1>
        <button className='btn bg-blue-500 text-white p-3 rounded-xl' onClick={handleLogin}>Login</button>
        <br />
        <br />
        <button className='btn bg-red-500 text-white p-3 rounded-xl' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Comp2