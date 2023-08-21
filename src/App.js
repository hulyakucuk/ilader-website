import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Activities from "./Pages/Activities/Activities";
import Navbar from "./Components/Navbar/Navbar";
import Media from "./Pages/Media/Media";
import VisionAndMission from "./Pages/VisionAndMission/VisionAndMission";
import Management from "./Pages/Management/Management";

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
          <Route path="/vizyon-ve-misyonumuz" element={<VisionAndMission />}></Route>
          <Route path="/yonetim-kurulu" element={<Management />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
