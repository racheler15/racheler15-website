import "../styles/Projects.css";
import calq from "/calq.png";
import mind from "/mind.png";
import uxab from "/uxab.png";
import subfield_survey from "/Rachel Lin Subfield Survey.pdf";

// https://www.youtube.com/watch?v=Kx8XlKRBZx8
export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="header">
        <div className="header-container">
          Projects<div className="period">.</div>
          <div className="underline"></div>
        </div>
      </div>
      <div
        className="paper-container"
        style={{ marginTop: "1rem", marginBottom: "5rem" }}
      >
        <a href={subfield_survey} target="_blank" style={{ fontSize: "24px" }}>
          Paper: A Survey on The State of the Art in Coreference Resolution
        </a>
      </div>
      <div style={{ paddingBottom: "3rem", fontSize:"20px"}}>
        Here are some highlights from my design portfolio:
      </div>
      <a href="https://www.themindcoffee.com/" target="_blank">
        <div className="proj-container">
          <div className="proj-img-container">
            <img src={mind} alt="mind" className="proj-pic" />
          </div>
          <div className="proj-description">
            <div className="proj-title">Mind Coffee</div>
            <div className="proj-text">
              We were hired by one of Berkeley's most popular cafés to redesign
              their website and enhance the user experience.{" "}
            </div>
          </div>
        </div>
      </a>
      <a href="/CALQ.pdf" target="_blank">
        <div className="proj-container">
          <div className="proj-img-container">
            <img src={calq} alt="calq" className="proj-pic" />
          </div>
          <div className="proj-description">
            <div className="proj-title">CalQ</div>
            <div className="proj-text">
              A UI/UX design project proposing a solution to improve UC Berkeley
              students' experience at gyms and libraries by reducing waiting
              times.
            </div>
          </div>
        </div>
      </a>
      <a href="https://www.uxab.org/" target="_blank">
        <div className="proj-container">
          <div className="proj-img-container">
            <img src={uxab} alt="uxab" className="proj-pic" />
          </div>
          <div className="proj-description">
            <div className="proj-title">UX @ Berkeley</div>
            <div className="proj-text">
              I served as an Outreach Officer at UX @ Berkeley for a semester.
              UX @ Berkeley strives to provide accessible design and career
              guidance to everyone who becomes a part of our community. My
              responsibilities included maintaining professional relations with
              external organizations and overseeing the project team's work as a
              project manager
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
