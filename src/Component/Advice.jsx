import  React, { useState } from 'react'



function Advise() {
    const[advice, setAdvice]=useState('')
    const[count, setCount]=useState(0)
    

    async function getAdvice(){

    const res= await fetch("https://api.adviceslip.com/advice");
    const data= await res.json();
    setAdvice(data.slip.advice);
    setCount((c)=> c+1);
    }

  return (
    <div>
        <h1>{advice}</h1>
        <input type='submit' onClick={getAdvice} name='Submit' placeholder='GetAdvice'/>
        <p>Number of advice<strong>{count}</strong></p>
    </div>
    
    
  );

}


export default Advise