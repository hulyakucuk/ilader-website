import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Navbar from "./Components/Navbar/Navbar";
import Media from "./Pages/Media";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
          <Route path="/medya" element={<Media />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
