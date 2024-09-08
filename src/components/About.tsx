import "../styles/About.css";
import profile_pic from "/profile_pic.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  const [description] = useTypewriter({
    words: ["matcha enthusiast", "badminton player", "climbing novice"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      transition={{duration: 2, ease: "easeInOut"}}
      whileInView="visible"
      viewport={{ once: true }}
      id="home"
      className="about-container"
    >
      <div className="image-container">
        <img src={profile_pic} alt="profile pic" className="profile-pic" />
      </div>
      <div className="text-container">
        <div className="intro">
          <div className="intro-container">
            Hi, I'm Rachel<div className="period">.</div>
          </div>
          <div className="cursor-text"
            style={{ fontWeight: "bold", color: "#afaee0", display: "flex" }}
          >
            {description}
            <Cursor />
          </div>
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
    </motion.div>
  );
}

export default About;
