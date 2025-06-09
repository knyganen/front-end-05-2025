import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses'
import Navbar from './components/Navbar';

function App() {
  return (
    <div >

    <Routes>
      <Route path="/" element={ <Navbar/> }/>
      <Route path="/work" element={ <Work/> }/>
      <Route path="/hobbies" element={ <Hobbies/> }/>
      <Route path="/courses" element={ <Courses/> }/>
     </Routes>

   
    </div>
    
  );
}

export default App;
