import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
