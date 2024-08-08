import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home/>
      </Router>
    </>
  );
}

export default App;
