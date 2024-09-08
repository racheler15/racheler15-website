import "../styles/LandingPage.css";


// https://www.youtube.com/watch?v=yqaLSlPOUxM&ab_channel=LunDev

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="banner">
        <div className="content">
          <div className="header" data-content="RACHEL LIN">
            <span>Rachel Lin</span>
            <span style={{ fontWeight: "200", fontSize: "1.5rem" }}>
              web developer
            </span>
          </div>
        </div>
        <div
          className="slider"
          style={{ "--quantity": 10 } as React.CSSProperties}
        >
          <div
            className="item"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img src="/landing/image1.jpg" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src="/landing/image2.JPG" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src="/landing/image3.JPG" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src="/landing/image4.JPG" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src="/landing/image5.jpg" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 6} as React.CSSProperties}
          >
            <img src="/landing/image6.JPG" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src="/landing/image7.jpg" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <img src="/landing/image8.jpg" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 9 } as React.CSSProperties}
          >
            <img src="/landing/image9.JPG" alt="image"></img>
          </div>
          <div
            className="item"
            style={{ "--position": 10 } as React.CSSProperties}
          >
            <img src="/landing/image10.JPEG" alt="image"></img>
          </div>
        </div>
      </div>
      <span
        style={{
          display: "block",
          height: "1px",
          width: "70%",
          backgroundColor: "#d3d3d3",
          margin: "0 auto",
          border: "none",
        }}
      ></span>
    </div>
  );
};

export default LandingPage;

