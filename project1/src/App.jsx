import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


//React protect us from this hasle do the behind the scene by using userstate and hooks
// let count = 5;
// function addValue(){
//   count = count + 1;
//   let val = document.getElementById('value')
//   val.innerHTML = `Counter Value : ${count}`
// }
// function decreaseValue(){
//   count = count -1;
//   let val = document.getElementById('value')
//   val.innerHTML = `Counter Value : ${count}`
// }

//when the value of counter change for footer than we have to again write function like above to change the counter value but react changes the 
//value of counter automatically where ever it may be present in UI may it 1 or 1000 times and we dont need to do it manually
//getElement etc for 1000 times , thats why react is very powerful

function App() {

  const [count,setCount] = useState(0);
  function addValue(){
    setCount(count+1)
  }
  function decreaseValue(){
    setCount(count-1)
  }
  return (
    <>
    <h2>Counter to study User State</h2>
    <h2 id="value">Counter Value : {count}</h2>
    <button onClick = {addValue}>Increase Counter</button>
    <br></br>
    <br></br>
    <button onClick = {decreaseValue}>Decrease Counter</button>
    <footer>
      Count is {count}
    </footer>
   </>
  
  )
}

export default App
