import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="#" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="#experience" smooth>
                Experience
              </Link>
            </li>
            <li>
              <Link to="#projects" smooth>
                Projects
              </Link>
            </li>
            <li>
              <Link to="#academics" smooth>
                Academics
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
          <ul className={`navbar-links-side ${menuOpen ? "open" : ""}`}>
          <li>
              <Link
                to="#"
                smooth
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </Link>
            </li>  
            <li>
              <Link
                to="#"
                smooth
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#experience"
                smooth
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                smooth
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="#academics"
                smooth
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                smooth
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
