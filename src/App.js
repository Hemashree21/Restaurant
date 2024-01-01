import React, { useEffect, useState } from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Login from './pages/Login';
import VegMenu from './pages/Vegmenu';
import Nonvegmenu from './pages/Nonvegmenu';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [backendData,setBackEndData] = useState([{}])
useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackEndData(data)
    }
  )
}, [])

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/vegmenu" element={<VegMenu/>} />
        <Route path="/nonvegmenu" element={<Nonvegmenu/>} />
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

