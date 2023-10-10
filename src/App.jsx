import { useState } from 'react';
import './App.css'

function App() {

  let [count, updateCount] = useState(10);

  // add value function:
  let addValue =()=>{

        // check that counter should not go above '20':
    if(count === 20){
      count = 20;
    }else{
      count = count + 1;
    updateCount(count); 
    }
    // console.log('add value', count);
  }

  // remove value function:
  let removeValue = () =>{

    // check that counter should not go below '0':
    if(count !== 0){
      count = count -1;
    updateCount(count);
    }else{
      count = 0
    }
    // console.log('remove value', count);
  }

  return (
    <>
    <h1>Count 0 to 20</h1>
    <h2>Counter value: {count}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default App
