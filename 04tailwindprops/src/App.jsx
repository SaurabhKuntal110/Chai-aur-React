import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Saurabh",
    age: 25
  }
  let myArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4' >Tailwind Test</h1>
      <Card userName="ChaiaurCode"  objInfo={myObj} />
      <Card userName="Saurabh" btnText="Visit Me" arrayinfo={myArr} />      
    </>
  )
}

export default App
