import React from 'react'
import { useSelector } from 'react-redux'


function Comp1() {

    // access Store 
    const userReducer = useSelector((state)=>(state.userReducer))

  return (
    <div>
        <h1 className='text-2xl'>Component 1</h1>
        <br />
        Store:  { userReducer.value }
        <br />
        {userReducer.loading ? <p>Loading true</p>: <p>False
        </p> }
    </div>
  )
}

export default Comp1