import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'
// import Navbar from './navbar.jsx'
import Course  from './course.jsx'
import Python from "./assets/Python.png";
import HTML from "./assets/HTMl.jpeg";
import CSS from './assets/css.png'
import Javascript from './assets/javascript.png'


function App(){
  return(
    <>

    <Course price={200} name="Python Programming" image={Python}></Course>
    <Course name="HTML PROGRAMMING" image={HTML}></Course>
    <Course price={20} name="CSS PROGRAMMING" image={CSS}></Course>
    <Course price={110} name="Javascript PROGRAMMING" image={Javascript}></Course>




    </>

  );
}




export default App
