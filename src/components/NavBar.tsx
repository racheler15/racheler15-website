import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" smooth className="navbar-logo">
            Rachel Lin
          </Link>
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
          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
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
