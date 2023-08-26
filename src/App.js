import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Media from "./Pages/Media/Media";
import VisionAndMission from "./Pages/VisionAndMission/VisionAndMission";
import Management from "./Pages/Management/Management";
import Education2020To2021 from "./Pages/Activities/contents/education/Education2020To2021";
import Education2021To2022 from "./Pages/Activities/contents/education/Education2021To2022";
import Educators from "./Pages/Activities/contents/educators/Educators";
import Lessons from "./Pages/Activities/contents/lessons/Lessons";
import Activities from "./Pages/Activities/Activities";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />}></Route>
          <Route path="/medya" element={<Media />}></Route>
          <Route path="/vizyon-ve-misyonumuz" element={<VisionAndMission />}></Route>
          <Route path="/yonetim-kurulu" element={<Management />}></Route>
          <Route path="/egitimler-2020-2021" element={<Education2020To2021/>}></Route>
          <Route path="/egitimler-2021-2022" element={<Education2021To2022/>}></Route>
          <Route path="/hocalarimiz" element={<Educators/>}></Route>
          <Route path="/dersler" element={<Lessons/>}></Route>
          <Route path="/faaliyetler" element={<Activities/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
