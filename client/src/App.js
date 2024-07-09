import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Dealerships from './Dealerships';
import Dealership from './Dealership';
const App = () => {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dealerships" element={<Dealerships/>} />
          <Route path="/dealership/:id" element={<Dealership />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;