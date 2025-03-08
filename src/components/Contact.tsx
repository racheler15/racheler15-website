import "../styles/Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="header">
        <div className="header-container">
          Contact<div className="period">.</div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="contact-text">
        If you're interested in connecting, feel free to reach out at{" "}
        <a href="mailto:raelin@berkeley.edu" className="contact-info">
          raelin@berkeley.edu
        </a>
        . I am also on{" "}
        <a
          href="https://www.linkedin.com/in/racheler15/"
          target="_blank"
          className="contact-info"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/racheler15"
          target="_blank"
          className="contact-info"
        >
          Github
        </a>
        .
        <br />
        <br />
        {/* My resume (typically outdated) is available for download{" "}
        <a href={Resume} target="_blank" className="contact-info">
          here
        </a> */}
        {/* . */}
      </div>
      <span style = {{marginTop: "3rem",fontWeight:"bold"}}>This website is also a portfolio item I built using TypeScript & React. Thanks for taking the time to check it out!</span>
      <div className="footer">
        <div className="sentence">Copyright © Rachel Lin 2025</div>
      </div>


    </div>
  );
}

export default Contact;
