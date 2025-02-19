import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <h1 class = 'bg-slate-700 text-white-500 p-4 rounded-2xl '>Testing Tailwind in React</h1>
     <Card type ="Formal meeting" Further = "Explore More"/>
     <Card  type ="Informal meeting" Further = "Bas kar Yaar"/>
    </>
  )
}

export default App
