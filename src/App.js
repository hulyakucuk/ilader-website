import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from "./Components/Contact/Contact";
import Activities from './Pages/Activities';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <>
   
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/activities" element={<Activities />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>

  </>
  );
}

export default App;
