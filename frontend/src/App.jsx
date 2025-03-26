import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./components/Home.jsx";
import MyPath from "./components/MyPath.jsx";
import Assessment from "./components/Assessment.jsx";
import Contact from "./components/Contact.jsx";
import Profile from "./components/Profile.jsx";
import Dashboard from "./components/Dashboard.jsx";

import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

import Nav from "./components/Nav.jsx";


function App() {
  return (

    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypath" element={<MyPath />} />
        <Route path="/ass" element={<Assessment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
