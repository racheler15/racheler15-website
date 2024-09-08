import "../styles/Experience.css";
// import {} from "framer-motion";
import cognac from "/cognac.png";
import epic from "/eecs.jpg";
import omni from "/omnivision_logo.jpeg";

function Experience() {
  return (
    <div id="experience" className="experience-container">
      <div className="header">
        <div className="header-container">
          Experience<div className="period">.</div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="places">
        <div className="experience">
          <div className="expimage-container">
            <img src={epic} alt="epic-data-pic" className="experience-pic" />
          </div>
          <div className="multiple-experience">
            <div className="experience-description">
              <div className="place">UC Berkeley RISE Lab</div>
              <div className="role">HCI Researcher</div>
              <div className="date">May 2024 - Present</div>
              <div className="description">
                Incoporating LLM expertise into an iterative dataset search
                featuring dynamic widgets. Coding the interface with React.
                Working with Professor Aditya Parameswaran, Shreya Shankar, &
                Madelon Hulsebos.
              </div>
              <div className="skills-container">
                <div className="skill">React</div>
                <div className="skill">Large Language Models</div>
                <div className="skill">SQL</div>
                <div className="skill">JSON</div>
              </div>
            </div>
            <div className="experience-description">
              <div className="role-with-padding">ML Researcher</div>
              <div className="date">Sept 2023 - May 2024</div>
              <div className="description">
                Assessed LLMs' ability to implicitly conduct feature selection
                for missing data imputation. Reduced computation time through
                Modal parallelization. Advised by Professor Aditya Parameswaran
                & Shreya Shankar.
              </div>
            </div>
            <div className="skills-container">
              <div className="skill">Python</div>
              <div className="skill">Large Language Models</div>
              <div className="skill">JSON</div>
              <div className="skill">Microsoft Azure</div>
              <div className="skill">Scikit learn</div>
              <div className="skill">Modal</div>
              <div className="skill">Hugging Face</div>
            </div>
          </div>
        </div>
        <div className="experience-separator"></div>

        <div className="experience">
          <div className="expimage-container">
            <img src={cognac} alt="cognac-pic" className="experience-pic" />
          </div>
          <div className="experience-description">
            <div className="place">UC Berkeley Cognition and Action Lab</div>
            <div className="role">Computational Neuroscience Researcher</div>
            <div className="date">May 2023 - Jan 2024</div>
            <div className="description">
              Programmed a dynamic predator-prey reinforcement model to evaluate
              cerebellar degeneration challenges. Advised by Professor Richard
              B. Ivry & Sabrina Abram.
            </div>
            <div className="skills-container">
              <div className="skill">Python</div>
              <div className="skill">Matplotlib</div>
              <div className="skill">NumPy</div>
            </div>
          </div>
        </div>

        <div className="experience-separator"></div>

        <div className="experience">
          <div className="expimage-container">
            <img src={omni} alt="omni-pic" className="experience-pic" />
          </div>
          <div className="experience-description">
            <div className="place">OmniVision Technologies</div>
            <div className="role">Data Algorithm Intern</div>
            <div className="date">May 2022 - Aug 2022</div>
            <div className="description">
              Generated data to mimic LED light behavior on Blender and
              engineered a multilayered perceptron neural network to identify
              automobile LED light sources.
            </div>
            <div className="skills-container">
              <div className="skill">Python</div>
              <div className="skill">Matplotlib</div>
              <div className="skill">Pytorch</div>
              <div className="skill">OpenCV</div>
              <div className="skill">Blender</div>
            </div>
          </div>
        </div>
        <div className="experience-separator"></div>
      </div>
    </div>
  );
}

export default Experience;
