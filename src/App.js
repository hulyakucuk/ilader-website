
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";
function App() {

  return (
    <>
      <Router>
        <Navbar />
       <AnimatedRoutes/>
      </Router>
    </>
  );
}

export default App;
