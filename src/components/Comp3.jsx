import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../store/counterSlice';


function Comp3() {

    const { counterReducer } = useSelector((state) => ({ ...state }))

    const dispatch = useDispatch();

    const increaseNumber = () => {
        dispatch(increase())
    }

    const decreaseNumber = () => {
        dispatch(decrease())
    }

    return (
        <div>
            <h1 className='text-3xl'>Component 3</h1>
            <p className='text-xl font-bold my-5'>Counter: {counterReducer.counter}</p>
            <div className="flex gap-5">
                <button className='bg-blue-500 text-white p-2 rounded-xl' onClick={increaseNumber}>Increase</button>
                <button className={`bg-red-500 text-white p-2 rounded-xl`} onClick={decreaseNumber} >Decrease</button>
            </div>
        </div>
    )
}

export default Comp3