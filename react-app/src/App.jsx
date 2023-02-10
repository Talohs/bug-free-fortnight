
import "./App.css"
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Home from './components/Home';
import NewBuild from './components/NewBuild';
import Navbar from './components/Navbar';
import AlertMessage from './components/AlertMessage';
import Register from './components/Register';
import Login from './components/Login';
import WarframeBuild from './components/WarframeBuild';
import PrimaryBuild from './components/PrimaryBuild';

function App(props){

    const [mods, setMods] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:/api/mod")
      .then(res => res.json())
      .then(data => setMods(data))
    })

    
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const now = new Date();
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token') && new Date(localStorage.getItem('tokenExp')) > now));
    
    function flashMessage(message, category){
    setMessage(message);
    setCategory(category);
    };

    function logUserIn(){
    setLoggedIn(true);
    };

    function logUserOut(){
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExp');
    flashMessage("You have logged out", "primary");
    };

  
  return (
    <>
      <Navbar loggedIn={loggedIn} logUserOut={logUserOut}/>
      <DndProvider backend={HTML5Backend}>
      <div className="container">

        {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} />: null}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/newbuild' element={<NewBuild />}  />
            <Route path='/register' element={<Register flashMessage={flashMessage} />} />
            <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
            <Route path='/warframebuild' element={<WarframeBuild loggedIn={loggedIn} mods={mods} flashMessage={flashMessage}/>} />
            <Route path='/primarybuild' element={<PrimaryBuild/>}/>
        </Routes>
      </div>
      </DndProvider>   
    </>
  );
}

export default App;
