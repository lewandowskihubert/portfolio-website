import React from "react";
import { useEffect, useState } from "react";
import "./aboutme.css";
import { technologies } from "../../data/about-me-data";

const AboutMe: React.FC = () => {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const element = document.querySelector(".animated-aboutme-element");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        setAnimated(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="aboutme-container">
        <div
          className={`aboutme-header animated-aboutme-element ${
            animated ? "animate" : ""
          }`}
        >
          About me
        </div>
        <div className="aboutme-content">
          <div className="about-me-technologies">
            <h3>Technologies i use:</h3>
            <ul>
              {technologies.map((tech) => (
                <li key={tech.name}>
                  {React.createElement(tech.icon)}
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-me-description">
            <p className="about-me-hello">Hello <span className="waving-hand">👋</span> </p>
            <p className="about-me-introducion">
              I'm frontend developer who like to learn new things and challenge
              myself. Since I can remember i love computers and everything
              related to it. Creating something from scratch gives me
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
