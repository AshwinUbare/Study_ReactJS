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

   let [name1, setName1]= useState("Priti");

   function changeData()
   {
      // name1 ="Priti";
      // console.log(name1);

      setName1("Neha");
   }

   let [name2, setName2]= useState();

   let [age, setAge]= useState();

   let countries = [
       {id:1,name:"India",capital:"New Delhi"},  // id shuld be unique
       {id:2,name:"USA",capital:"Washington D.C."},
       {id:3,name:"South Frica",capital:"Cape Town"},
       {id:4,name:"New Zealand",capital:"Wellington"}
   ]

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
       {/* <h3>{name2} {age}</h3> */}

       <input type='text' placeholder='Enter Name' onChange={(event) => {
         setName2(event.target.value) 
         
         // event = info of event & element where element is gating 
         // target = it refer to the element on which the event was triggered 
        }}/>

        <h3>Age :</h3>
        <input type='number' placeholder='Enter Age' onChange={(event)=>{
          setAge(event.target.value)
        }}/>

        <button type='button' onClick={()=> {
          console.log(name2,age)
          }}>Submit</button>

         
         {/* Iterating array manually */}
         <div className='data'>
          <h3>{countries[0].name}</h3>
          <p>{countries[0].capital}</p>
         </div>
         

         {/* Iterating array by using loop */}
         { 
             //writing in '{}' are JS
              //  countries.map((country,index)=>{     // map is iterate as mush time as a size of array (countries) i.e 4-time
                countries.map((country)=>{ 
                  return(
                  // writing in '()' is JSX and writing in '{}' are JS
                    <div className='data' key={country.id}>  {/* index is unike so we use it as key in map, if you have id tha use id as a key  */}
                        <h3>{country.name}</h3>
                        <p>{country.capital}</p>
                    </div>
               )
              })
         }


        
    </div>
    
  );
}
export default App;

