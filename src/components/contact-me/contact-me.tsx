import { useEffect, useState } from "react";
import "./contact-me.css";



const ContactMe: React.FC = () => {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const element = document.querySelector(".animated-contactme-element");
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
    <div className="contactme-container">
      <div
        className={`contactme-header animated-contactme-element ${
          animated ? "animate" : ""
        }`}
      >
        You can find me there
      </div>
      <div className="contact-me-content">
        <div className="contact-me-socialmedias">
          <div className="social-media-item">
            <a href="mailto:hubletto@gmail.com"  title="mail">
              <img src="../src/assets/mail.svg" alt="" />
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://github.com/lewandowskihubert" target="__blank" title="github">
              <img src="../src/assets/github.svg" alt="" />
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://www.linkedin.com/in/hubert-lewandowski00/" target="__blank" title="linkedin">
              <img src="../src/assets/linkedin.svg" alt="" />
            </a>
          </div>
          <div className="social-media-item">
            <a href="https://stackoverflow.com/users/22267924/hubert" target="__blank" title="stackoverflow">
              <img src="../src/assets/stackoverflow.svg" alt="" />
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ContactMe;
