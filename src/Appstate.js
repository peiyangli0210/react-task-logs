import './App.css'
import { useState } from 'react';
const App = () => {



    const result = useState(1)

    let curNumber = result[0];
    let setCounter = result[1];
    const addHandler = () => {
        setTimeout(()=>{
            setCounter((prevCounter)=>{
                return prevCounter+1
            })
            //setCounter(prevState =>prevState+1)
        },1000)
        
        
    }
    const subtractHandler = () => {
        setTimeout(()=>{
            setCounter((prevCounter)=>{
                return prevCounter-1
            })
        },1000)
    
    }

    return <div className='app'>App
        <h1>{curNumber}</h1>
        <button onClick={subtractHandler}>-</button>
        <button onClick={addHandler}>+</button>    
    </div>
}


export default App;