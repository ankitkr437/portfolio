import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Api Developer", "Leetcoder"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="wrapper">
        <div className="intro-title">
          <h2>Hi There, I'm </h2>
          <h1>Ankit Kumar</h1>
        </div>
        <h3>
        <span ref={textRef}></span>
        </h3>

       <div className="intro-button">
       <a className="aboutme-button" href="#about">
          About Me
          <img src="assets/downabout.png" alt="" className="" />
        </a>
        <a className="contact-button" href="#contact">
          Hire Me
          <img src="assets/downabout.png" alt="" className="" />
        </a>
       </div>
        <div className="contact-link">
          <a href="https://github.com/ankitkr437" className="contact-1" target="_blank">
            <img src="assets/github.png" alt="" className="contact-img" />
          </a>
          <a href="#portfolio" className="contact-1" target="_blank">
            <img src="assets/linkedin.png" alt="" className="contact-img" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100037481640809"
            className="contact-1"
            target="_blank"
          >
            <img src="assets/facebook.png" alt="" className="contact-img" />
          </a>
          <a href="https://www.instagram.com/ankitkr437/" className="contact-1" target="_blank">
            <img src="assets/instagram.png" alt="" className="contact-img" />
          </a>
        </div>
      </div>

      <a href="#portfolio" className="down-arrow">
        <img src="assets/downabout.png" alt="" />
      </a>
    </div>
  );
}
