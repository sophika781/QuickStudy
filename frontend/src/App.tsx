import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registration from "./components/Registration";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path= "/login" element= {<Login/>}/>
          <Route path="/register" element= {<Registration/>}/>
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
