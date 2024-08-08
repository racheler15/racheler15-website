import "../styles/Projects.css";
import calq from "/CALQ.png";
import mind from "/mind.png";
import uxb from "/uxb.png";
import subfield_survey from "/Rachel Lin Subfield Survey.pdf";
import { ImageSlider } from "./ImageSlider";

// https://www.youtube.com/watch?v=Kx8XlKRBZx8
const IMAGES = [
  {name: uxb, link: "https://www.uxab.org/"},
  {name: mind, link: "../../public/Mind.pdf"},
  {name: calq, link: "../../public/CALQ.pdf"}];
export default function Projects() {
  return (
    <div id = "projects" className="projects-container">
      <div className="header">
        <div className="header-container">
          Projects<div className="period">.</div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="paper-container" style = {{marginTop:"1rem", marginBottom:"3rem"}}>
        <a href={subfield_survey} target="_blank">
          Paper: A Survey on The State of the Art in Coreference Resolution
        </a>
      </div>
      Here are some highlights from my design portfolio:
    <ImageSlider images={IMAGES} />
    </div>
  );
}
