import './App.css';
import React from 'react';
import Authentication from './pages/authentication/Authentication'; 
import Message from './pages/Message/Message';
import Homepage from './pages/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';  


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/*" element ={< Homepage/> }/>
        <Route path ="/message" element ={<Message/> }/>
        <Route path ="/*" element ={<Authentication/> }/> {/*Redirect to authentication */}

      </Routes>
{/* Render the Authentication component */}
    </div>
  );
}

export default App;
