import { useState } from 'react'
import Chai from "./Chai"


function App() {
  
  //syntax to inject variable 
  let username = "Adnan"
  return (
    <><h1>React with vite and {username}</h1>
    <Chai/>
    <p>This is down below</p>
    </>

  )
}

export default App
