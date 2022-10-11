import React from 'react';
import MyFirst from './Compo/MyFirst';
import MySecond from './Compo/MySecond';
import MyThird from './Compo/MyThird';
import MyFourth from './Compo/MyFourth';
import MyFifth from './Compo/MyFifth';
import NavBar from './Compo/NavBar';
import './App.css';


const App =()=>{
  
    return(
        <div>
         <NavBar />
         <MyFifth />
         <MyFourth />
         <MyThird />
        < MySecond />
        <MyFirst name="About Us" />
       </div>
      
    );
}

export default App;