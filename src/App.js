import {React, useState} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [value, setvalue] = useState(true)
  console.log(num);

  const onAdd= ()=>{
    const addValue = num + 1;
    setNum(addValue);
    if(addValue>0){
      checkvalue(false)
    }
  }
  const  onSub=()=>{
    const subValue = num - 1;
    setNum(subValue);
    if(subValue === 0){
      checkvalue(true)
    }
  }
  const checkvalue=(value)=>{
    setvalue(value);
  }
  const clear=(value)=>{
    setNum(0);
    checkvalue(true);

  }
  return(
    <>
    <h1>Counter</h1>
    <h2>{num}</h2>
    <button onClick={onAdd}>Add</button>
    <button onClick={onSub} disabled={value}>Sub</button>
    <button onClick={clear} disabled={value} >clear</button>
  
    </>
  );
}
export default App;
