import "../styles/About.css";
import profile_pic from "/profile_pic.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope } from "react-icons/fa";

function About() {
  const [description] = useTypewriter({
    words: ["matcha enthusiast", "badminton player", "climbing novice"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div id="home" className="about-container">
      <div className="image-container">
        <img src={profile_pic} alt="profile pic" className="profile-pic" />
      </div>
      <div className="text-container">
        <div className="intro">
          <div className="intro-container">
            Hi, I'm Rachel<div className="period">.</div>
          </div>
          <span style={{ fontWeight: "bold", color: "#afaee0", display:"flex"}}>
            {description}
            <Cursor />
          </span>
        </div>
        <div className="text">
          I am currently a masters student at UC Berkeley majoring in EECS and
          concurrently pursuing the Berkeley Certificate in Design Innovation. I
          previously graduated from UC Berkeley with a B.A. in Computer Science
          and a minor in Data Science. My current academic interests involves
          incorporating Large Language Models (LLMs) capabilities with
          human-computer interaction (HCI). Outside of my studies, I enjoy
          recreating matcha and other tea beverages from my favorite shops.
        </div>
        <div className="button">
          <a href="mailto:raelin@berkeley.edu" className="button-contact">
            <FaEnvelope className="email-icon" />
            Say hi!
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
