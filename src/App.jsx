import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Comp1/>
    <hr />
    <hr />
    <Comp2/>
    <hr />
    <hr />
    <Comp3/>
    </>
  )
}

export default App
