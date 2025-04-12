import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
import Course  from './course.jsx'

function App(){
  return(
    <>
    
    <Navbar/>
    <Course></Course>
    </>

  );
}




export default App
