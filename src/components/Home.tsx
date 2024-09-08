import About from "./About";
import NavBar from "./NavBar";
import Experience from "./Experience";
import Academics from "./Academics";
import Projects from "./Projects";
import "../styles/Home.css";
import Contact from "./Contact";
import LandingPage from "./LandingPage"

function Home() {
  return (
    <>
      <NavBar />
      <LandingPage/>
      <About />
      <Experience />
      <Projects />
      <Academics />
      <Contact />
    </>
  );
}

export default Home;
