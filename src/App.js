// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products from './Products';
import { useState } from 'react';

function App() {



  function doSomthing(data)
  {
    console.log("This is new page on "+data)
  }
  
  // let name1 ="Neha"; // local variable

   let [name1, setName1]= useState("Priti")

   function changeData()
   {
      // name1 ="Priti";
      // console.log(name1);

      setName1("Neha");
   }

   let {name, setName}= useState();

  return (
    <div className="App">
      
      <h1>Welcome in ReactJs</h1>
      <Header/> 
      <Products/>

      <button className="btn" onClick={(event)=>{
        console.log(event)
        doSomthing("Ashwin")
      }}>Click</button>
    
       <h3>---------------------------------------------</h3>
       <h3>{name1}</h3>

       <button onClick={changeData}>ChangeName</button>

       

       <h3>Name : </h3>
       <input type='text' placeholder='Enter Name' onChange={(event) => {
         console.log(event.target.value) 
         // event = info of event & element where element is gating 
         // target = it refer to the element on which the event was triggered 
        
        }}/>
    </div>
    
  );
}

export default App;
